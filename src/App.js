import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import { 
  Navbar, 
  MainFeed, 
  Sidebar,
  SearchFeed,

  Premium,
  ObligaTunes,
  ObligaTV,
  ObligaKids,

  Settings, 
  Help, 
  Feedback  
} from './components'

const App = () => {
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('New')
  
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
          <Route path='/' exact element={
            <MainFeed 
              showSidebarHandler={showSidebarHandler}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}/>
          }/>
          {/* <Route path='/video/:id' element={<VideoDetail />} /> */}
          {/* <Route path='/channel/:id' element={<ChannelDetail />} /> */}
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/obligatunes' element={<ObligaTunes />} />
          <Route path='/obligatv' element={<ObligaTV />} />
          <Route path='/obligaKids' element={<ObligaKids />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/help' element={<Help />} />
          <Route path='/feedback' element={<Feedback />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App