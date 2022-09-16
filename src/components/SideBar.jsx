import React from 'react'

import { Stack } from '@mui/material'
import { categories } from '../Utilities/constants'

const SideBar = ({SelectedCategory, setSelectedCategory}) => {


  return (
    <Stack direction='row'
    sx={{
        overflowY: 'auto',
        height:{sx: 'auto', md: '95%'},
        flexDirection: {md:'column'}
    }}>
        {categories.map((item, i)=>
        (
            <button key={i}
            className='category-btn'
            onClick={()=>setSelectedCategory(item.name)}
            style={{
                background: item.name === SelectedCategory && '#FC1503', color: '#fff'
            }}
            >
            <span
             style={{
                color: item.name === SelectedCategory ? '#fff': 'red', 
                marginRight: '15px'
            }}>{item.icon}</span>
            <span style={{opacity: item.name === SelectedCategory ? '1': '0.8'}}>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar