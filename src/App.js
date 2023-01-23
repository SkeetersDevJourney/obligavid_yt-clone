import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import { Navbar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: 'blue'}}>
        <Navbar />
        <Routes>
          {/* <Route to='/' exact element={<MainFeed />}/>
          <Route to='/video/:id' element={<VideoDetail />}/>
          <Route to='/channel/:id' element={<ChannelDetail />}/>
          <Route to='/search/:searchTerm' element={<SearchFeed />}/> */}
          <Route />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App