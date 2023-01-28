import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";

import { VideoFeed } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

import KidsPic  from '../assets/family.svg' 
import KidsLogo from '../assets/logo-kids.png'

const ObligaKids = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=kids`)
      .then(data => setVideos(data.items));
    
    console.log(videos)
  }, []) 

  return (
    <Box sx={{
      width: '100%',
      marginX: 'auto',
      maxWidth: '1500px'
    }}>
      <Stack 
        direction={{ xs: 'column', md: 'row' }} 
        alignItems='center' 
        justifyContent='center' 
        textAlign={{ xs: 'center', md: 'left' }} 
        py={3}
        sx={{
        width: '100%',
        overflow: 'hidden',
        // backgroundColor: '#fff'
      }}>
        <Stack 
          position='relative' 
          zIndex='10' 
          ml={{ xs: '20px',md: '0' }}
          p={2}
          sx={{
            backgroundColor: 'rgba(50,50,50,.5)',
            borderRadius: '15px'
          }}
        >
          <Box height={{ xs: '40px', md: '50px', lg: '70px' }}>
            <img src={KidsLogo} alt='music logo' height='100%' />
          </Box>
          <Typography color='#fff' mt={1}>
            Educational and fun videos selected with care specifically for your little ones!
          </Typography>

        </Stack>
        <Box marginLeft={{ xs: '0', md: '-175px' }} >
          <img src={KidsPic} alt='#'
            style={{
             
              width: '50vw',
              maxWidth: '600px'
            }}
          />
        </Box>
        
      </Stack>

      <VideoFeed videos={videos} />
    </Box>
  )
}

export default ObligaKids