import { Typography, Box, TextField, Select, MenuItem, Button, InputLabel, Grid } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import SelectInput from '@mui/material/Select/SelectInput';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import AddIcon from '@mui/icons-material/Add';

const CreateJob = () => {
    const id = localStorage.getItem("userId")
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        company: '',
        position: '',
        location: '',
        type: '',
        category: '',
        pay: '',
        description: '',
        url: '',
    });

    const handleInputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("https://job-portal-uqhl.onrender.com/api/job/create-job", {
                company: formData.company,
                position: formData.position,
                location: formData.location,
                type: formData.type,
                category: formData.category,
                pay: formData.pay,
                description: formData.description,
                url: formData.url,
                user: id,
            })

            toast.success("Blog Created");
            navigate("/all-jobs")

        } catch (error) {
            console.log('Error creating job:', error);
            // Handle error state or display error message
        }
    };


    return (
        <>
            <Typography variant='h4' textAlign='center' sx={{ color: '#4834D4', fontWeight: 'bold' }}>
                Create New Job
            </Typography>
            <Grid container justifyContent={'center'} spacing={4}>
                <Grid item>
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        justifyContent='center'
                        boxShadow='10px 10px 20px #ccc'
                        backgroundColor='#fff'
                        padding='20px 20px'
                        margin='auto'
                        borderRadius={5}
                    >
                        <form onSubmit={handleSubmit}>
                            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Job Details</Typography>
                            <TextField
                                label='Company'
                                name='company'
                                value={formData.company}
                                onChange={handleInputChange}
                                required
                                fullWidth size='small'
                            />
                            <TextField
                                label='Position'
                                name='position'
                                value={formData.position}
                                onChange={handleInputChange}
                                required
                                fullWidth
                                size='small'
                            />
                            <TextField
                                label='Location'
                                name='location'
                                value={formData.location}
                                onChange={handleInputChange}
                                fullWidth
                                size='small'
                            />
                            <InputLabel id='job-type-label'>Job Type</InputLabel>
                            <Select
                                labelId='job-type-label'
                                name='type'
                                value={formData.type}
                                onChange={handleInputChange}
                                required
                                fullWidth
                                size='small'
                            >
                                <MenuItem value='full-time'>Full Time</MenuItem>
                                <MenuItem value='intern'>Intern</MenuItem>
                                <MenuItem value='part-time'>Part Time</MenuItem>
                            </Select>
                            <InputLabel id='category-label'>Category</InputLabel>
                            <Select
                                labelId='category-label'
                                name='category'
                                value={formData.category}
                                onChange={handleInputChange}
                                fullWidth
                                size='small'
                            >
                                <MenuItem value='programming'>Programming</MenuItem>
                                <MenuItem value='graphic-design'>Graphic Design</MenuItem>
                                <MenuItem value='software-testing'>Software Testing</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                            <InputLabel id='pay-label'>Pay</InputLabel>
                            <Select
                                labelId='pay-label'
                                name='pay'
                                value={formData.pay}
                                onChange={handleInputChange}
                                fullWidth
                                size='small'
                            >

                                <MenuItem value='inr'>INR</MenuItem>
                                <MenuItem value='usd'>USD</MenuItem>
                                <MenuItem value='eur'>EUR</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                            <TextField
                                label='Description'
                                name='description'
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                                fullWidth
                                multiline
                                rows={4}
                                size='small'
                            />
                            <TextField
                                label='URL'
                                name='url'
                                value={formData.url}
                                onChange={handleInputChange}
                                fullWidth
                                size='small'
                            />
                            <Button type='submit' variant='contained' sx={{ marginLeft: '40%', backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);', color: 'white' }} endIcon={<AddIcon />}>
                                Create Job
                            </Button>
                        </form>
                        {<Toaster position="top-right" reverseOrder={false} />}
                    </Box>
                </Grid>

                <Grid item>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/job-search-4268354-3560997.png" className='img-fluid' height={'20px'} />
                </Grid>
            </Grid>

        </>
    );
};

export default CreateJob;
