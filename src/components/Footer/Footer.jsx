import './Footer.css';

import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import RowingOutlinedIcon from '@mui/icons-material/RowingOutlined';
import { useDispatch, useSelector } from 'react-redux';

// multer image upload

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const user = useSelector(store => store.user);

  return (
    <>
    <Box sx={{ width: 500 }}>
        <Paper sx={{ bgcolor: '#72A1A6',position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="All Routes" onClick={() => {history.push('/allRoutes')}}  icon={<RowingOutlinedIcon />}/>
            <BottomNavigationAction label="My Favorites" onClick={() => {history.push('/myFavorites')}} icon={<StarBorderOutlinedIcon />}/>
            <BottomNavigationAction label="Add Route" onClick={() => {history.push('/addRoute')}} icon={<AddCircleIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}

