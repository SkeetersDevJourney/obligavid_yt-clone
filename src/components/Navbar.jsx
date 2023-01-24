import { useState, useEffect } from 'react';
import { Stack, Box, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom';

import { SearchBar, Sidebar } from './';

import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'

const Navbar = () => {

  const [showSidebar, setShowSidebar] = useState(false);
  
  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <Stack 
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      p={1.5}
      sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#0c090a'
      }}
    >
      <Stack direction="row">

        <IconButton 
          onClick={showSidebarHandler}
          sx={{ 
            color: '#fff', 
            mr: {xs: '10px', md: '15px'},
            ':hover': { 
              backgroundColor: 'rgba(12, 9, 10, .08)',
              color: '#FF0000' } }}
          >
          <Menu />
        </IconButton>

        <Link 
          to='/'
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img className='logo-icon' src={logoIcon} alt='logo icon' height={35} />
          <img className='logo' src={logo} alt='logo' height={35} />
        </Link>
      </Stack>

      <SearchBar />
      
      {
        showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/> 
      }

    </Stack>
  )
}

export default Navbar