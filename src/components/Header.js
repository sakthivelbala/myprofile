import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

const Header = (props) => {

  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar sx={{backgroundColor: '#555455'}}>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            SAKTHIVEL BALAKRISHNAN
        </Typography>
        <Avatar src='/assets/profile.jpg' sx={{ width: 56, height: 56 }}/>
      </Toolbar>
    </AppBar>
  </Box>
}

export default Header