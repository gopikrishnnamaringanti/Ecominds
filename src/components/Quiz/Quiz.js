import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Navbar from  '../navbar/Navbar'
import Box from '@mui/material/Box';
import App from '../App'

function Quiz() {
  return (
    <div>
    <Navbar/>
    <Box height={45}/>
    <Box sx={{ display: 'flex' }}>
    <Dashboard/>
    <Box component="main" sx={{ flexGrow: 1,p:4}}>
        <App/>
    </Box>
    </Box>


    </div>
  )
}

export default Quiz