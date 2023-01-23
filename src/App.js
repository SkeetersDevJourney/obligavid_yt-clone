import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import { Navbar, MainFeed } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#0c090a'}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<MainFeed />}/>
          {/* <Route to='/video/:id' element={<VideoDetail />}/>
          <Route to='/channel/:id' element={<ChannelDetail />}/>
          <Route to='/search/:searchTerm' element={<SearchFeed />}/> */}
          <Route />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App