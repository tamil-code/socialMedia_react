import React from 'react'
import Post from './Post'
import {Box} from '@mui/material'
const Feed = () => {
  return (
    <Box  sx={{width:{xs:'390px',sm:'50%'}}} >
       <Post image='./images/pic4.jpg'  title='JD'/>
       <Post image='./images/pic3.jpg'  title='tamil'/>
       <Post image='./images/pic2.jpg' title='Ya its me'/>
       <Post image='./images/pic1.jpg'  title='The queen'/>
       
   
    </Box>
  )
}

export default Feed