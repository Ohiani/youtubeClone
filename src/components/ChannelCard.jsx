import React from 'react'
import { CheckCircle } from '@mui/icons-material';
import { Box, CardMedia, Typography, CardContent } from '@mui/material';
import {Link} from 'react-router-dom';

import {  demoProfilePicture } from '../Utilities/constants';

const ChannelCard = ({channelDetails, marginTop}) => {

  console.log(channelDetails)

  return (
    <Box 
    sx={{
      boxShadow:'none', 
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',  
      width: { xs: '356px', md: '305px'},
      height: '326px',
      margin: 'auto',
      marginTop,
    }}>

        <Link to={`/channel/${channelDetails?.id?.channelId}`}>
          <CardContent sx={{display: 'flex', flexDirection:'column', justifyContent:'center', textAlign: 'center', color: '#fff' }}>
             <CardMedia 
             image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
             alt={channelDetails?.snippet?.title}
             sx={{borderRadius: '50%', mb: 2, border: '1px solid #e3e3e3', width: '180px', height: '180px'}}
             />
          <Typography variant='h6' color='#fff'>
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{color: 'gray', fontSize: 14, ml: '5px'}}/>
          </Typography>

          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}

          </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard