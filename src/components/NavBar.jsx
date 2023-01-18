import { AppBar, Box, InputBase, styled, Toolbar,Badge, Avatar, Typography,Menu,MenuItem} from '@mui/material'
import {Anchor, Mail,Notifications} from '@mui/icons-material'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { SidebarActions } from '../redux-store/store'
const NavBar = () => {
  const[open,SetOpen] = useState(false);
  const dispatch = useDispatch();
  const Search = styled('div')(({theme})=>({
    background:"white",
    padding:'0 10px',
    borderRadius:theme.shape.borderRadius,
    width:"40%",
  }))

  const StyledToolbar = styled(Toolbar) ({
    display:'flex',
    justifyContent:'space-between'
  })

  const Icons = styled(Box) (({theme})=> ({
    display:'none',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
      display:'flex'
    }
  }))
  const UserBox = styled(Box) (({theme})=> ({
    display:'flex',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
      display:'none'
    }
  }))
 const handlesidebar =()=>{
  dispatch(SidebarActions.handleSidebar());
    dispatch(SidebarActions.changeAction());
 }
  return (
    <AppBar  sx={{marginBottom:'10px',position:'sticky'}}>
      <StyledToolbar>
       <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>MYSPACE</Typography>
       <Anchor sx={{display:{xs:'block',sm:'none'}}} onClick={handlesidebar}></Anchor>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
            <Badge badgeContent={4} color="error">
               <Mail/>
            </Badge>
            <Badge badgeContent={10} color="error">
               <Notifications/>
            </Badge>
            <Avatar src='./images/pic1.jpg' sx={{width:30,height:30}} onClick={()=>{SetOpen(true)}}> </Avatar>
        </Icons>
        <UserBox onClick={()=>{SetOpen(true)}}>
          <Avatar src='./images/pic2.jpg' sx={{width:30,height:30}}> </Avatar>
          <Typography variant='span'>Tamil</Typography>
        </UserBox>
      </StyledToolbar>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>{SetOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar