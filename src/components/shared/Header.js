import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Link>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Country
      </Typography>
    </>
  );
}

export default Header;
