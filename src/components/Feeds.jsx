import {useState, useEffect} from 'react';
import { Stack, Box, Typography } from '@mui/material';
import {SideBar, Videos} from './';

import { fetchFromAPI } from '../Utilities/fetchFromAPI';

const Feed = () => {


  const [SelectedCategory, setSelectedCategory] = useState('New')
  const [videos, setvideos] = useState([])

useEffect(()=>{
fetchFromAPI(`search?part=snippet&q=${SelectedCategory}`)
  .then((data)=> setvideos(data.items))
},[SelectedCategory])

  return (
    <Stack 
    sx={{flexDirection: {sm: 'column', md: 'row',} }}>
      
      <Box sx={{height: {sx: 'auto', md: '88vh'}, borderRight:'1px solid #3d3d3d', px: {sm: 0, md:2} }}>
        
        
        <SideBar SelectedCategory={SelectedCategory} setSelectedCategory={setSelectedCategory}/>
        
        
        <Typography variant='body2' className='copyright' sx={{mt:1.5, color: '#fff'}}>
          Copyright 2022 @Lucky Frank
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{
          color:'#fff'
        }}>
          {SelectedCategory} <span style={{color:'#f31503',}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed 