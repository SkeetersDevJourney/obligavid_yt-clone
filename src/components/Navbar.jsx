import { useState, useEffect } from 'react';
import { Stack, Box, IconButton } from "@mui/material";
import { Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom';

import { SearchBar, Sidebar, Categories } from './';

import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'

const Navbar = ({ showSidebarHandler, selectedCategory, setSelectedCategory }) => {

  return (
    <>
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
            to={`${process.env.PUBLIC_URL}/`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img className='logo-icon' src={logoIcon} alt='logo icon' height={30} />
            <img className='logo' src={logo} alt='logo' height={30} />
          </Link>
        </Stack>

        <SearchBar />

      </Stack>
      
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Categories 
          showSidebarHandler={showSidebarHandler}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          direction='row'
        />
      </Box>
    </>
  )
}

export default Navbar