import { useState, useEffect } from 'react'
import { Stack, Box, Typography} from '@mui/material'

import { VideoFeed, Categories } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const MainFeed = ({ 
  showSidebarHandler, 
  selectedCategory, 
  setSelectedCategory }) => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items));
    
    console.log(videos)
  }, [selectedCategory]) 
  
  return (
    <Stack>
      <Box>
        <Typography variant="h4" fontWeight="bold" my={2} ml={2} sx={{ color: "#fff" }}>
            {selectedCategory} 
        </Typography>
      </Box>

      <VideoFeed videos={videos} />
    </Stack>
  )
}

export default MainFeed