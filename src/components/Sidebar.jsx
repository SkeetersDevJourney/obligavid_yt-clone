import { Link } from 'react-router-dom';
import { Stack, Slide, Box, Backdrop, IconButton, Divider, } from '@mui/material';
import { Menu } from '@mui/icons-material';

import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'
import { sidebarBtnsPrimary, sidebarBtnsSecondary, sidebarBtnsMore, sidebarBtnsInfo } from '../utils/constants'

const Sidebar = ({ 
  showSidebar, 
  showSidebarHandler, 
  selectedCategory, 
  setSelectedCategory }) => {

  return (
    <Box>

      <Backdrop 
        open={showSidebar}
        onClick={showSidebarHandler}
      />

      <Slide direction='right' in={showSidebar}>
        <Stack
          p={1.5}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            // overflowY: 'scroll',
            width: '250px',
            height: '95vh',
            backgroundColor: '#0c090a',
            borderRadius: '0px 0px 25px 0px'
          }}
        >
          <Stack direction='row' alignItems='center' mt='2px'>
            <IconButton 
                onClick={showSidebarHandler}
                sx={{ 
                  color: '#fff', 
                  mr: {xs: '10px', md: '15px'},
                  ':hover': { 
                    backgroundColor: 'rgba(12, 9, 10, .08)',
                    color: '#FF0000' } }}
                >
                <Menu />
              </IconButton>
              <Link 
                to='/'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img className='logo-icon' src={logoIcon} alt='logo icon' height={30} />
                <img className='logo' src={logo} alt='logo' height={30} />
              </Link>
          </Stack>

          <Stack 
            divider={
              <Divider sx={{ backgroundColor: 'rgb(255, 255, 255, .6)', margin: '10px 0px'}}/>
            }
            mt={2.5}
          >
            
            <Stack>
            { sidebarBtnsPrimary.map(({ name, icon }) => (
              <button 
                className={
                  name === selectedCategory 
                  ? 'sidebar-btn selected'
                  : 'sidebar-btn' 
                }
                key={name} 
                onClick={() => {
                  setSelectedCategory(name);
                  showSidebarHandler();
                }}
              >
                <span style={{  marginRight: '15px'}}>{icon}</span>
                <span>{name}</span>
              </button>
            )) }
            </Stack>

            <Stack>
              { sidebarBtnsSecondary.map(({name, icon}) => (
                <button 
                  className={
                    name === selectedCategory 
                    ? 'sidebar-btn selected'
                    : 'sidebar-btn' 
                  }
                  key={name}  
                  onClick={() => {
                    setSelectedCategory(name);
                    showSidebarHandler();
                  }}
                >
                  <span style={{ marginRight: '15px'}}>{icon}</span>
                  <span>{name}</span>
                </button>
              ))}
            </Stack>

            <Stack>
              { sidebarBtnsMore.map(({name, icon}) => (
                <button 
                  className={
                    name === selectedCategory 
                    ? 'sidebar-btn selected'
                    : 'sidebar-btn' 
                  }
                  key={name} 
                  onClick={() => {
                    setSelectedCategory(name);
                    showSidebarHandler();
                  }} 
                >
                  <span style={{ color: name=== selectedCategory ? '#0c090a' : '#FF0000', marginRight: '15px'}}>{icon}</span>
                  <span>{name}</span>
                </button>
              ))}
            </Stack>

            <Stack>
              { sidebarBtnsInfo.map(({name, icon}) => (
                <button 
                  className={
                    name === selectedCategory 
                    ? 'sidebar-btn selected'
                    : 'sidebar-btn' 
                  }
                  key={name} 
                  onClick={() => {
                    setSelectedCategory(name);
                    showSidebarHandler();
                  }}
                >
                  <span style={{ marginRight: '15px'}}>{icon}</span>
                  <span>{name}</span>
                </button>
              ))}
            </Stack>
          </Stack>
          

        </Stack>
      </Slide>
    </Box>
  )
}

export default Sidebar