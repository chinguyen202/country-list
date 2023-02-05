import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
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
          <HomeIcon sx={{ fontSize: '3rem' }} />
        </IconButton>
      </Link>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, fontSize: '2.5rem' }}
      >
        Country
      </Typography>
    </>
  );
}

export default Header;
