import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';

import './Nav.css';

const options = [
  'My Profile',
  'Info',
  'About',
  'Logout',
];

const ITEM_HEIGHT = 48;

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const user = useSelector(store => store.user);

  const handleClick = (event) => {
    console.log('in handleClick')
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper className='nav' sx={{ bgcolor: '#2F4959', position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
    <div className='nav'>
      
    <Link to="/homePage">
      <h2 className="nav-title">Canoe & Kayak MN</h2>
    </Link>

      <div>
      <IconButton
        sx={{ position: 'fixed', top: 10, right: 0 }} elevation={3}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
                  <MenuItem>
            <Link className='navLink' to='/homePage' >Home</Link>
          </MenuItem>
          {user.id &&
          <MenuItem>
            <Link className='navLink' to='/myProfile' >My Profile</Link>
          </MenuItem>
          }
          {user.id &&
          <MenuItem>
            <Link className='navLink' to='/infoPage' >Info</Link>
          </MenuItem>
          }
          <MenuItem>
            <Link className='navLink' to='/aboutPage' >About</Link>
          </MenuItem>
          <MenuItem>
            {user.id ?
            <Link to='/landingPage'><LogOutButton className='navLink'/></Link>
            :
            <Link className='navLink' to='/landingPage'>Login/Register</Link> 
            }
          </MenuItem>
      </Menu>
      </div>
    </div>
    </Paper>
  );
}








// <div className="nav">
// <Link to="/homePage">
//   <h2 className="nav-title">Prime Solo Project</h2>
// </Link>
// <div>
//   {/* If no user is logged in, show these links */}
//   {!user.id && (
//     // If there's no user, show login/registration links
//     <Link className="navLink" to="/landingPage">
//       Login / Register
//     </Link>
//   )}

//   {/* If a user is logged in, show these links */}
//   {user.id && (
//     <>
//       <Link className="navLink" to="/homePage">
//         Home
//       </Link>

//       <Link className="navLink" to="/info">
//         Info Page
//       </Link>

//       <LogOutButton className="navLink" />
//     </>
//   )}

//   <Link className="navLink" to="/about">
//     About
//   </Link>
// </div>
// </div>