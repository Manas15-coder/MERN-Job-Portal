import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Loader = () => {
  return (
    <Box sx={{ display: 'flex', marginTop: '20%', marginLeft: '20%', color: '#4834D4' }}>
      <CircularProgress color='secondary' />
    </Box>
  )
}

export default Loader
