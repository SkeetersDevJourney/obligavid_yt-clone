import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";

import { VideoFeed } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

import TvPic  from '../assets/tv-presenter.svg' 
import TvLogo from '../assets/logo-tv.png'

const ObligaTV = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=tv`)
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
            <img src={TvLogo} alt='music logo' height='100%' />
          </Box>
          <Typography color='#fff' mt={1}>
            News, sports, and the rest! Catch all your favorite channels here!
          </Typography>

        </Stack>
        <Box marginLeft={{ xs: '0', md: '-175px' }} >
          <img src={TvPic} alt='#'
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

export default ObligaTV