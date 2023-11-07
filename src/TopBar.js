import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Python Dependency Analyser
        </Typography>
        <Button color="inherit" href="https://github.com/your-repo">
          GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
