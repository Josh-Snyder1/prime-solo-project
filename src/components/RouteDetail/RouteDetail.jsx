import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory, useParams } from "react-router-dom";

import './ListItem.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItem({route}) {
    // const routes = useSelector((store) => store.routes);

    const dispatch = useDispatch();
    const routeId = useParams().id;
    const routeDetail = useSelector(store => store.routeDetailReducer)


    useEffect(() => {
        console.log('in useEffect RouteDetail',routeId);
        dispatchEvent({
            type: 'FETCH_ROUTE_DETAILS',
            payload: routeId
        })
    },[routeId]);

  return (
    <Box sx={{ width: '95%', margin: 'auto' }}>
      <Stack spacing={1}>
        return( 
            <Item key={routeDetail.id} className='list-item' 
                sx={{ }}>
                <div>
                    <h4>{routeDetail.route_start} To {routeDetail.route_end}</h4>
                </div>
                <div className='detail-row'>
                    <span className='list-detail'>
                        {routeDetail.route_city_state}
                    </span>
                    <span className='list-detail'>
                        {routeDetail.route_distance}mi
                    </span>
                    <span className='list-detail'>
                        {routeDetail.route_time}hrs
                    </span>
                    <span className='list-detail'>
                        {routeDetail.route_difficulty}
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