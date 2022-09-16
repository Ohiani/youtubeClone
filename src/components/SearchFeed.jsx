import {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import {Videos} from './';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../Utilities/fetchFromAPI';

const SearchFeed = () => {
  const {searchTerm} = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm])
  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex:2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{
          color:'#fff'
        }}>
      Search results for: <span style={{color:'#f31503',}}>{searchTerm}</span> videos
      </Typography>

      <Box p='2' sx={{display: 'flex'}}>
        <Box sx={{mr:{sm: '90px'}}} />
      
      <Videos videos={videos}/>
      </Box>

    </Box>
  )
}

export default SearchFeed