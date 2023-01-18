import React, { Fragment } from 'react'
import { Card,CardHeader,Avatar,IconButton,CardMedia,CardContent,Typography,CardActions,Checkbox } from '@mui/material'
import {MoreVert,Favorite,Share,FavoriteBorder} from '@mui/icons-material'
const Post = ({image,title,thumbnail}) => {
  return (
    <Fragment>
       <Card sx={{marginBottom:'15px'}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: 'red',position:'static'}} aria-label="profile">V</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title={title}
        subheader="today"
      />
      <CardMedia
        component="img"
        height="450"
        image={image} 
        alt="Megna "
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           this is app is creted by tamil bharathi
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />

        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Fragment>
  )
}

export default Post