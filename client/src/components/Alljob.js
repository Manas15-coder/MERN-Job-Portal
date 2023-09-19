import React from 'react'
import '../App.css'
import { Card, CardContent, Typography, Button, Grid, Paper, TextField, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import SearchIcon from '@mui/icons-material/Search';
import Loader from './Loader';


const Alljob = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedPay, setSelectedPay] = useState('all');
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [filters, setFilters] = useState(false)

    const navigate = useNavigate();

    const sendRequest = async () => {
        try {
            const { data } = await axios.get('https://job-portal-uqhl.onrender.com/api/job/all-job');
            if (data?.success) {
                setJobs(data?.jobs);
                setFilteredJobs(data?.jobs);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        sendRequest();
    }, []);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        const filteredJobs = jobs.filter(job =>
            job.position.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(filteredJobs);
    };

    const handleFilterChange = (filterName, filterValue) => {
        if (filterValue === 'all') {
            setFilteredJobs(jobs);
        } else {
            const filteredJobs = jobs.filter(job =>
                job[filterName] === filterValue
            );
            setFilteredJobs(filteredJobs);
        }
    };


    if (filteredJobs.length === 0) {
        return <Loader/>
    }

    const showFilters = () => {
        setFilters(true)
    }
    if (!jobs) {
        <Box sx={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center', marginTop: '10%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h4'>No Jobs Found .....</Typography>
        <img src="https://qjobsindia.com/assets/img/no-jobs-found.png" />
    </Box>
    }

    return (
        <>
            <Typography variant='h4' sx={{ textAlign: 'center', color: '#4834D4', fontWeight: 'bold' }}>All Jobs</Typography>
            <Box sx={{ background: '#fff', borderRadius: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', marginLeft: 'auto', marginRight: 'auto', padding: '10px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'sticky', top:'0' }}>
                        <Typography variant='h6' sx={{ color: '#4834D4', fontWeight: 'bold' }}>Search Jobs</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                            <Button sx={{ color: '#4834D4', fontSize: '20px' }} endIcon={<SearchIcon />}></Button>
                        </Box>
                        <TextField
                            label="Search Job by postion"
                            variant="standard"
                            value={searchTerm}
                            onChange={(e) => handleSearch(e.target.value)}
                            sx={{
                                marginBottom: '20px', justifyContent: 'center', textAlign: 'center'
                            }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' sx={{ color: '#4834D4', fontWeight: 'bold' }}>{filters ? "Hide Filters" : "Show Filters"}</Typography>
                            <Button onClick={() => setFilters(!filters)} sx={{ color: '#4834D4' }}>{filters ? (<FilterAltIcon />) : <FilterAltOffIcon />}</Button>
                        </Box>
                        
                        {filters && (<>
                            <FormControl sx={{ marginBottom: '20px', minWidth: 150, justifyContent: 'center', textAlign: 'center' }}>
                                <Select
                                    value={selectedCategory}
                                    onChange={(e) => handleFilterChange('category', e.target.value)}
                                >
                                    <MenuItem value="all">Category</MenuItem>
                                    <MenuItem value="programming">Programming</MenuItem>
                                    <MenuItem value="graphic-design">Graphic Design</MenuItem>
                                    <MenuItem value="software-testing">Software Testing</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ marginBottom: '20px', minWidth: 150 }}>
                                <Select
                                    value={selectedType}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                >
                                    <MenuItem value="all">Job Type</MenuItem>
                                    <MenuItem value="full-time">Full-time</MenuItem>
                                    <MenuItem value="intern">Intern</MenuItem>
                                    <MenuItem value="part-time">Part-time</MenuItem>
                                    {/* Add other types */}
                                </Select>
                            </FormControl>
                            <FormControl sx={{ marginBottom: '20px', minWidth: 150 }}>
                                <Select
                                    value={selectedPay}
                                    onChange={(e) => handleFilterChange('pay', e.target.value)}
                                >
                                    <MenuItem value="all">Pay</MenuItem>
                                    <MenuItem value="inr">INR</MenuItem>
                                    <MenuItem value="usd">USD</MenuItem>
                                    <MenuItem value="eur">EUR</MenuItem>
                                    {/* Add other pay options */}
                                </Select>
                            </FormControl>
                        </>)}

                    </Box>
            <Grid container  sx={{ justifyContent: 'center', padding: '10px 5px' }}>

                        {filteredJobs.map((job) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ padding: '0 20px' }}>
                                <Card sx={{ margin: '5px', padding: '10px', fontWeight: 'bold', borderRadius: '15px', width: '100%', maxWidth: '100%' }} elevation={12}>
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
                                            {job.position}
                                        </Typography>
                                        <Typography variant='h6' >{job.company}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Location: {job.location}
                                        </Typography>
                                        <Typography variant="body2" color="textPrimary">
                                            Type: {job.type}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Category: {job.category}
                                        </Typography>
                                        <Button sx={{ backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);', color: 'white' }} LinkComponent={Link} to={`/job/get-job/${job._id}`} endIcon={<ArrowForwardIcon />}>
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                                </Grid>
                        ))}

            </Grid>
        </>
    )
}

export default Alljob
