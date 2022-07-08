import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import {useSelector, useDispatch} from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

import './ListItem.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItem({routes}) {
    // const routes = useSelector((store) => store.routes);

    const history = useHistory();

  return (
    <Box sx={{ width: '95%', margin: 'auto' }}>
      <Stack spacing={1}>
        {routes.map(route => {
            console.log('in listItem map', route.startPoint);
        return( 
            <Item key={route.id} className='list-item' 
                sx={{ border: 1 }}
                onClick={() => history.push(`/routeDetail/${route.id}`)}    
            >
                <div>
                    <h4>{route.startPoint} To {route.endPoint}</h4>
                </div>
                <div className='detail-row'>
                    <span className='list-detail'>
                        {route.cityState}
                    </span>
                    <span className='list-detail'>
                        {route.distance}mi
                    </span>
                    <span className='list-detail'>
                        {route.time}hrs
                    </span>
                    <span className='list-detail'>
                        {route.difficulty}
                    </span>
                <span className='fav-icon-list-view'>
                {<StarBorderOutlinedIcon sx={{  }}/>}
                </span>
                </div>

            </Item>     
        )
        })}
      </Stack>
    </Box>
    );
}

// {route.route_start}{route.route_end}

// {routes.map(route => {
//     console.log('in listItem map', route.route_start);
// <Item>test</Item>     
// })}