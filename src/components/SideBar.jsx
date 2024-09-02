import { Stack } from '@mui/material';
import { categories } from '../utils/constants'

const SideBar = ({ selectedcategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
        <button className=
        'category-btn'
        onClick={() => setSelectedCategory(category.name)}
        style={{
          backgroundColor: category.name === selectedcategory && '#22d3ee',
          color: 'white'
        }} 
        key={category.name}
      >
        <span style={{ color: category.name === selectedcategory ? '#030313' : '#22d3ee', marginRight: '15px' }} >{category.icon}</span>
        <span style={{ opacity: categories.name === selectedcategory ? '1' : '0.8'}} >{category.name}</span>
      </button>
    ))}
  </Stack>
)

export default SideBar