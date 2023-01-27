import { Link, useNavigate } from 'react-router-dom';
import { Stack, Slide, Box, Backdrop, IconButton, Divider, } from '@mui/material';
import { Menu } from '@mui/icons-material';


import { Categories } from './'
import logo from '../assets/logo.png'
import logoIcon from '../assets/logo-icon.png'
import { 
  sidebarBtnsPrimary, 
  sidebarBtnsSecondary, 
  sidebarBtnsMore, 
  sidebarBtnsInfo 
} from '../utils/constants';

const Sidebar = ({ 
  showSidebar, 
  showSidebarHandler, 
  selectedCategory, 
  setSelectedCategory 
}) => {

  const navigate = useNavigate();

  return (
    <Box  sx={{ position: 'fixed', top: 0, zIndex: 10 }}>
      <Backdrop 
        open={showSidebar}
        onClick={showSidebarHandler}
      />
      <Slide direction='right' in={showSidebar}>
        <Stack
          className='sidebar'
          p={1.5}
        >
          <Stack direction='row' alignItems='center' mt='2px'>
            <IconButton 
                onClick={showSidebarHandler}
                sx={{ 
                  color: '#fff', 
                  mr: {xs: '10px', md: '15px'},
                  ':hover': { 
                    backgroundColor: 'rgba(12, 9, 10, .08)',
                    color: '#a71d31' } }}
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
            className='sidebar-scroll'
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
                  navigate(process.env.PUBLIC_URL + '/');
                  setSelectedCategory(name)
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
                    navigate(process.env.PUBLIC_URL + `/${name.toLowerCase()}`);
                    showSidebarHandler();
                  }} 
                >
                  <span style={{ color: name=== selectedCategory ? '#0c090a' : '#a71d31', marginRight: '15px'}}>{icon}</span>
                  <span>{name}</span>
                </button>
              ))}
            </Stack>
            
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <Categories 
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </Box>

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
                    navigate(process.env.PUBLIC_URL + `/${name.toLowerCase()}`);
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