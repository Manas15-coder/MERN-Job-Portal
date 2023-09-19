import React from 'react'
import { AppBar, Button, Grid, Toolbar, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'
const Navbar = () => {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  console.log('state', isLoggedIn)
  return (
    <div>
      <AppBar sx={{ background: '#4d39e9', color: 'white',fontWeight:'bold',position:'sticky',top:'0'}}>
        <Toolbar>
          <Link to='/'><Typography variant='h5' color={'white'}>Job Aspire</Typography></Link>
          <Box display="flex" marginLeft='auto'>
            {!isLoggedIn && (
              <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, backgroundImage: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>Login</Button>
            )}
            {isLoggedIn && (
              <>
                <Button LinkComponent={Link} to='/create-jobs' variant='contained' sx={{ margin: 1, background: '#7161ed', borderRadius: '15px', padding: '10px 20px', color: 'white', fontWeight: 'bold' }}>Post Jobs</Button>
                <Button onClick={() => dispatch(authActions.logout())} LinkComponent={Link} to='/' variant='contained' sx={{ margin: 1, background: '#7161ed', borderRadius: '20px', color: 'white', fontWeight: 'bold' }}>Logout</Button>
              </>
            )}

          </Box>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
