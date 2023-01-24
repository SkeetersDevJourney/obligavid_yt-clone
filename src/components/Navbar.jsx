import { useState, useEffect } from 'react';
import { Stack, Box, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom';

import { SearchBar, Sidebar } from './';

import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'

const Navbar = ({ showSidebarHandler }) => {

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
      <Stack direction="row" alignItems='center'>

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
          <img className='logo-icon' src={logoIcon} alt='logo icon' height={30} />
          <img className='logo' src={logo} alt='logo' height={30} />
        </Link>
      </Stack>

      <SearchBar />

    </Stack>
  )
}

export default Navbar