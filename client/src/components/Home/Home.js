import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTypingEffect } from 'react-typing-effect'
const Home = () => {
  return (
    <Grid container spacing={4} justifyContent={'center'} padding={'40px,0'} marginTop={8} className='home'>
      <Grid item justifyContent={'center'} sx={{ margin: '10px', padding: '10px' }}>
        <Typography variant='h2' sx={{ color: '#4d39e9', fontWeight: 'bold', margin: '10px', fontFamily: '' }}>
          Get Your Dream Job Today !
        </Typography>
        <Typography variant='h6' sx={{ margin: '10px',marginTop:'5%'}}>Explore all the most exciting job roles based on your interest and study major.</Typography>
        <Box display='flex' marginTop='20%' sx={{ marginTop: 'auto' }}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' className='company-logo' height={'40px'} alt='Facebook' />
          <img src='https://www.pngplay.com/wp-content/uploads/3/Black-Apple-Logo-PNG-Images-HD.png' className='company-logo' height={'40px'} alt='Apple' />
          <img src='https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=163252369' className='company-logo' height={'40px'} alt='Amazon' />
          <img src='https://pngimg.com/uploads/netflix/netflix_PNG10.png' className='company-logo' height={'40px'} alt='Netflix' />
          <img src='https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227' className='company-logo' height={'40px'} alt='Google' />
        </Box>
        <Button LinkComponent={Link} to='/all-jobs' sx={{ marginTop: '10%', backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);', padding: '10px 20px', width: '100%', maxWidth: '400px', borderRadius: '15px', color: 'white' }} className='btn'> Apply Now</Button>
      </Grid>
      <Grid item >
        <img src='https://cdni.iconscout.com/illustration/premium/thumb/job-search-4268354-3560997.png' alt='Job Search' className='img-fluid' />
      </Grid>
    </Grid>
  );
};

export default Home;
