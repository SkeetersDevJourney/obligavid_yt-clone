import { Stack, Box } from '@mui/material'

import { Sidebar, VideoFeed, Categories } from './'

const MainFeed = ({ showSidebarHandler, selectedCategory, setSelectedCategory }) => {

  
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

      <VideoFeed />
    </Stack>
  )
}

export default MainFeed