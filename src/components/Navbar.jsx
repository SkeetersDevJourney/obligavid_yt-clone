import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'

import logo from '../assets/logo-name.png'

const Navbar = () => {
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
        <img src={logo} alt='logo' height={45} />
      </Link>

      <SearchBar />

    </Stack>
  )
}

export default Navbar