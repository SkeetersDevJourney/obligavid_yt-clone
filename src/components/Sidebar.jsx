import { Stack, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Sidebar = ({setShowSidebar, showSidebar}) => {

  const showSidebarHandler = () => {
    setShowSidebar(!showSidebar);
  }

  return (
    <Stack
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        overflowY: 'scroll',
        width: '240px',
        height: '100vh',
        backgroundColor: 'blue'
      }}
    >
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
    </Stack>
  )
}

export default Sidebar