import { useState, useEffect } from 'react';
import { Stack, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'

import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'

const Navbar = () => {
  const [matches, setMatches] = useState(false)

  // useEffect(() => {}, [])
  

  return (
    <Stack 
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      p={2}
      sx={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#0c090a',
      }}
    >

      <Link 
        to='/'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img src={matches ? logo : logoIcon} alt='logo' height={40} />
      </Link>

      <SearchBar />

    </Stack>
  )
}

export default Navbar