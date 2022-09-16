import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import './index.css'
import {NavBar, Feeds, SearchFeed, VideoDetail, ChannelDetail} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
       <NavBar/>

      <Routes>
        <Route path='/' exact element={<Feeds/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App