// import styled from '@emotion/styled';
// import { Settings } from '@mui/icons-material';
// import {Button} from '@mui/material'
import './App.css';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import Sidebar from './components/Sidebar';
import Navbar from  './components/NavBar';
import { createTheme, Stack, ThemeProvider ,Box} from '@mui/material';
import {  useState } from 'react';
import AddPost from './components/AddPost';
import {useSelector} from 'react-redux'

function App() {
  // const GreenButton = styled(Button)(({theme})=>({ //custom component in MUI
  //   backgroundColor:theme.palette.primary.main,
  //   color:"white",
  //   "&:hover":{
  //       backgroundColor:theme.palette.primary.light
  //   }
  //  }))
  const  action = useSelector(state=>state.action);
  const[mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"}  color={"text.primary"}>
        <Navbar />
        <Stack className="App" direction='row' spacing={{xs:0,sm:1}}>
          {<Sidebar  mode={mode} setMode={setMode}  />}
          <Feed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
    
  );
}

export default App;
