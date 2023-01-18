import React, { useState } from 'react'
import { Tooltip, IconButton, Fab,Modal,Box,Typography,Avatar,styled,TextField,Stack,Button} from '@mui/material'
import { Add,EmojiEmotions,PermMedia,VideoCameraBack,PersonAdd,Send} from '@mui/icons-material'

const AddPost = () => {
    const[open,setOpen] = useState(false);
    const UserBox = styled(Box)({
        display:'flex',
        flexDirection:'row',
        gap:'10px',
        margin:'5px 0 16px 0',
        alignItems:'center'
    })
    return (
        <div>
            <Tooltip title="Add a post" sx={{ position: 'fixed', bottom: '25px', left: { xs: '42%', sm: '25px' } }} onClick={()=>{setOpen(true)}}>
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <Add />
                    </Fab>
                </IconButton>
            </Tooltip>

            <Modal
                open={open}
                onClose={()=>{setOpen(false)}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
               sx={{display:'flex',justifyContent:'center',alignItems:'center'}}
            >
                <Box   borderRadius={5} p={5} sx={{width:{xs:'250px',sm:'400px'},height:'280px'} } bgcolor={"background.default"} color={"text.primary"}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color='gray' textAlign='center'>
                       Create a post
                    </Typography>
                    <UserBox>
                        <Avatar src='./images/pic4.jpg' sx={{width:30,height:30}}> </Avatar>
                        <Typography variant='span' fontWeight='bold'>Tamil</Typography>
                    </UserBox>
                    <TextField
                        id="standard-multiline-static"
                        label="wite a post..."
                        multiline
                        rows={3}
                       sx={{width:'100%'}}
                        variant="standard"
                    />
                    <Stack direction='row' mt={2} gap={2}>
                        <EmojiEmotions color='primary'/>
                        <PermMedia color='secondary'/>
                        <VideoCameraBack color='success'/>
                        <PersonAdd color='error'/>
                    </Stack>
                    <Button variant="contained" sx={{marginTop:'3rem' ,width:'100%'}}  endIcon={<Send/>}>Post</Button>

                </Box>
            </Modal>
        </div>
    )
}

export default AddPost