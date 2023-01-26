import React from 'react';
import {Link} from 'react-router-dom';

import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';


import {  demoVideoUrl,  demoChannelUrl } from '../Utilities/constants';

const VideoCard = ({video:{id:{videoId}, snippet}}) => {



  return (
    <Card sx={{width:{md: '310px', xs: '365px'}, outline: 'none', borderRadius: '0px', border: '0px' }}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia
        image={snippet?.thumbnails?.high?.url}
        height= '200px'
        alt={snippet?.title}
        sx={{width:{md: '100%', xs:'100%'}, height:{md: '170px', xs: '170px'}}}
        />
      </Link>
    
      <CardContent sx={{backgroundColor: '#1e1e1e', height:{md: '50px', xs: '40px'} }}>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography variant='subtitle'
          fontWeight='bold' color='#fff'
          >
            {snippet?.title.slice(0, 30)}...
          </Typography>
        </Link>
        <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography variant='subtitle2' fontSize='10px'
           color='gray'
          >
            {snippet?.description.slice(0, 61)}...
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}`: demoChannelUrl}>
          <Typography variant='subtitle2'
          fontWeight='bold' color='gray'
          >
            {snippet?.channelTitle}
            <CheckCircle sx={{ml:'5px', fontSize: 12, color: 'gray'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard