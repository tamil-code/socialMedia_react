import React from 'react'
import { Container,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Switch} from '@mui/material'
import {Home,Article,Groups,Storefront,Group,Settings,AccountBox,DarkMode} from '@mui/icons-material'
import { Box } from '@mui/system'
import {useSelector} from 'react-redux'
import styles from './sidebar.module.css'

const Sidebar = ({mode,setMode}) => {
  const control = useSelector(state=>state.control);
  const handlerSwitch = ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  console.log(control);
  return (
    <Box className={styles['wrapper']} sx={{width:{sm:'25%'}}}>
    <Container  sx={{display:{sm:'block' } ,width:{xs:'auto',sm:'25%',lg:'25%'}}} className={styles[control]} >
    <Box sx={{position:{xs:'relative',sm:'fixed'},left:{sm:'20px'}}}>
      <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DarkMode/>
              </ListItemIcon>
             <Switch onChange={handlerSwitch}/>
            </ListItemButton>
          </ListItem>

          </List>
        </Box>
    </Container>
    </Box>
  )
}

export default Sidebar