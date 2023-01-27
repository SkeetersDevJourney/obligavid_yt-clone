import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'

import { 
  Navbar, 
  MainFeed,
  Sidebar,
  SearchFeed,
  VideoDetails,
  ChannelDetails,

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

        <Navbar 
          showSidebarHandler={showSidebarHandler}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}  
        />
        
        { showSidebar && 
          <Sidebar 
            showSidebar={showSidebar}
            showSidebarHandler={showSidebarHandler}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
        }

        <Routes>
          <Route path={process.env.PUBLIC_URL + '/'} exact element={
            <MainFeed 
              showSidebarHandler={showSidebarHandler}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}/>
          }/>
          <Route path={process.env.PUBLIC_URL + '/video/:id'} element={<VideoDetails />} />
          <Route path={process.env.PUBLIC_URL + '/channel/:id'} element={<ChannelDetails />} />
          <Route path={process.env.PUBLIC_URL + '/search/:searchTerm'} element={<SearchFeed selectedCategory={selectedCategory}/>} />
          <Route path={process.env.PUBLIC_URL + '/premium'} element={<Premium />} />
          <Route path={process.env.PUBLIC_URL + '/obligatunes'} element={<ObligaTunes />} />
          <Route path={process.env.PUBLIC_URL + '/obligatv'} element={<ObligaTV />} />
          <Route path={process.env.PUBLIC_URL + '/obligaKids'} element={<ObligaKids />} />
          <Route path={process.env.PUBLIC_URL + '/settings'} element={<Settings />} />
          <Route path={process.env.PUBLIC_URL + '/help'} element={<Help />} />
          <Route path={process.env.PUBLIC_URL + '/feedback'} element={<Feedback />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App