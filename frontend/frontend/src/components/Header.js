import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h4'>BlogsApp</Typography>
        <Box>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
