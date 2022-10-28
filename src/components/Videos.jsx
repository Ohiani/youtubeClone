import React from 'react';
import { Box, Stack } from '@mui/material';
import {VideoCard, ChannelCard} from './';

const Videos = ({videos, direction}) => {

  return(
    
    <Stack direction={direction || 'row'} flexWrap= 'wrap' justifyContent="center" gap={1.5}>
        {videos?.map((item, i) => (
            <Box key={i}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetails={item}/>}
            </Box>)
        )}

    </Stack>
  )
}

export default Videos