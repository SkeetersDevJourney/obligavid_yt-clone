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
    console.log(`sending request for ${selectedCategory} videos`)

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
      .then(() => console.log(videos))
  }, [selectedCategory]) 
  
  return (
    <Stack>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Categories 
          showSidebarHandler={showSidebarHandler}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          direction='row'
        />
      </Box>

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