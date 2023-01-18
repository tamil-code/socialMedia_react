
import styled from '@emotion/styled';
import { Typography, Avatar, AvatarGroup, ImageList, ImageListItem,List,ListItem,ListItemAvatar,ListItemText,Divider} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const RightBar = () => {
  const itemData = [

    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',

    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',

    },
    // {
    //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    //   title: 'Basketball',
    // },
    // {
    //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    //   title: 'Fern',
    // },

  ];
  const RightBarText = styled(Typography) ({
    fontWeight:'100',
    textAlign:'start',
    marginLeft:'16px'
  })
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '25%' }} >
      <Box position='fixed' sx={{margin:"0 1rem 0 0"}}>
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'flex-start',alignItems:'center'}}>
          <Typography variant='h6' fontWeight={100} alignSelf='flex-start' ml={2}>Online friends</Typography>
          <AvatarGroup total={5}>
            <Avatar alt="Remy Sharp" src="./images/pic1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
        <Box>
          <RightBarText variant='h6'>Latest Photos</RightBarText>
          <ImageList

            variant="quilted"
            cols={2}
            rowHeight={100}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={1} rows={ 1}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

        <Box>
          <RightBarText variant='h6'>Latest Conversations</RightBarText>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Malavika" src="/" />
              </ListItemAvatar>
              <ListItemText
                primary="How are you?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Malavika mohanan
                    </Typography>
                    {" — Are you interested in working as a teacher in juvenile"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Alagam perumal" src="" />
              </ListItemAvatar>
              <ListItemText
                primary="come to  office now"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Alagam perumal
                    </Typography>
                    {" — We cant stand you JD.please resign from this college!"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>

    </Box>
  )
}

export default RightBar