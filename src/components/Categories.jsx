import { Stack } from "@mui/material";

import { categories } from '../utils/constants';

const Categories = ({ selectedCategory, setSelectedCategory, direction }) => {
  return (
    <Stack 
      direction={direction} 
      className='categories-scroll'
      sx={{
        overflowX: 'auto',
      }}>
      { categories.map(({name, icon}) => (
        <button 
          className={
            name === selectedCategory 
            ? 'sidebar-btn selected'
            : 'sidebar-btn' 
          }
          key={name} 
          onClick={() => {
            setSelectedCategory(name);
          }}
        >
          <span style={{ marginRight: '15px'}}>{icon}</span>
          <span>{name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Categories
