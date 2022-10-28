import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Typography, Box, Stack } from '@mui/material';
import {Videos} from './'

import { fetchFromAPI } from '../Utilities/fetchFromAPI';
import { CheckCircle, ThumbUpOffAltOutlined } from '@mui/icons-material';



const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items));
    },[id]);

    if (!videoDetail?.snippet) return 'Loading....'
    const {snippet: {title, channelId, channelTitle}, statistics:{ viewCount, likeCount}} = videoDetail;

  return (

    
    
    <Box minHeight='95vh'>
     
     <Stack direction={{xs: 'column', md: 'row'}}>
      <Box flex={1} mb={5}>
        <Box sx={{ width: '100%', position: 'sticky', top: '80px', p:'6px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
          className='react-player' controls/>
          <Typography variant={{sm: 'h6', md:'h1'}} p={2} fontWeight='bold' color='#fff'>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color: '#fff'}} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='gray'>
                {channelTitle}
                <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
              </Typography>
            </Link>
             <Stack>
              <Stack direction='row' sx={{display: 'flex', justifyContent: 'center', alignItems:'center'  }}>
              <Typography pr='5px' variant={{sm:'subtitle2', md:'body1'}} sx={{opacity: '0.7'}}>{parseInt(likeCount).toLocaleString()} Likes</Typography> <ThumbUpOffAltOutlined sx={{sm:{fontSize:'15px'}, md:{fontSize:'20px'}}}/>
              </Stack>

              <Stack>
              <Typography variant={{sm:'subtitle2', md:'body1'}} sx={{opacity: '0.7'}}> {parseInt(viewCount).toLocaleString()}  Views</Typography>
              </Stack>
              
             </Stack>
          </Stack>
        </Box>
      </Box>
     <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
        <Videos videos={videos} direction='column'/>
     </Box>
     </Stack>


    </Box>
  )
}

export default VideoDetail