import { useState } from 'react'

import { Paper, Button, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = e => {
      e.preventDefault();
      setSearchTerm('');
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSearchSubmit}
      sx={{ 
        position: 'relative',
        borderRadius: '25px', 
        // border: '1px solid #e3e3e3',
        pl: 2,

      }}
    >
        <input 
          type='search'
          className='search-bar'
          placeholder='Search...'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        { searchTerm &&  
          <IconButton 
            type='button'
            onClick={() => setSearchTerm('')}
            sx={{
              color: '#a71d31',
              position: 'absolute',
              top: '2px',
              right: '65px',
              ':hover': { 
                backgroundColor: 'rgba(12, 9, 10, .08)',
                color: '#FF0000' }
            }}
          >
            <Clear />
          </IconButton>
        }
        <Button 
          type='submit'
          sx={{ 
            borderRadius: '0 25px 25px 0',
            p: '10px',
            color: '#a71d31',
            ':hover': { 
              backgroundColor: 'rgba(12, 9, 10, .08)', 
              color: '#FF0000' }
          }}
        >
          <Search  />
        </Button>
    </Paper> 
  )
}

export default SearchBar