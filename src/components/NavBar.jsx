import { Box, Stack, Typography } from "@mui/material";
import {Link} from 'react-router-dom';

import {image, logo} from '../Utilities/constants'
import SearchBar from "./SearchBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const NavBar = () => {
  return (
    <Stack direction='row' 
    alignItems='center' 
    p={2} 
    sx={{position:'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>

    <Link to='/' style={{display:'flex', alignItems:'center', }}>
      <img src={logo} alt="logo" height={45} /> 
      <Typography fontSize={{md: '24px', xs: '13px'}} sx={{color: '#fff', marginLeft: '10px', fontWeight: 'bold'}}>Stream Online videos</Typography>
    </Link>
      
      <SearchBar/>
      <Box display={{ xs: 'none', sm: 'block' }} sx={{justifyContent: 'center' , alignItems: 'center', cursor: 'pointer'}}>
      </Box>
    </Stack>
  )
}

export default NavBar