import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  console.log(searchTerm)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm('');

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
    }
  }
  return (
    <Paper 
    component='form'
    onSubmit = {handleSubmit} 
    sx={{
        borderRadius: 2,
        border: '0px solid #e3e3e3',
        backgroundColor: 'black',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '5px',

        width:{xs: '12rem', md: 'auto'},
    }}>
        <input 
         className='search-bar'
         placeholder='Search...'
         sx={{color: '#fff', paddingLeft:'10px'}}
         value={searchTerm}
         onChange = {(e) => setSearchTerm(e.target.value)}/>

         <IconButton type='submit' sx={{p: '5px', color: '#e3e3e3'}}>
            <Search/>
         </IconButton>
    </Paper>
  )
}

export default SearchBar