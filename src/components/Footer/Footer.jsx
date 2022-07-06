import './Footer.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
    <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Collection" icon={<LibraryMusicIcon />}/>
            <BottomNavigationAction label="Wishlist" icon={<FavoriteIcon />}/>
            <BottomNavigationAction label="Browse" icon={<SearchIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

