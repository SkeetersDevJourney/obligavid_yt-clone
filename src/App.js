import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Backdrop } from '@mui/material'

import { 
  Navbar, 
  MainFeed, 
  Sidebar, 
  Help, 
  Feedback  
} from './components'

const App = () => {
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Home')
  
  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#0c090a', position: 'relative'}}>

        <Navbar showSidebarHandler={showSidebarHandler}/>
        
        { showSidebar && 
          <Sidebar 
            showSidebar={showSidebar}
            showSidebarHandler={showSidebarHandler}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
        }

        <Routes>
          <Route path='/' exact element={<MainFeed />}/>
          {/* <Route path='/video/:id' element={<VideoDetail />} /> */}
          {/* <Route path='/channel/:id' element={<ChannelDetail />} /> */}
          {/* <Route path='/search/:searchTerm' element={<SearchFeed />} /> */}
          <Route path='/help' element={<Help />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App