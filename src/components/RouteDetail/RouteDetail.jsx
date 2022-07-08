import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import './RouteDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory, useParams } from "react-router-dom";
import Map from '../Map/Map'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RouteDetail() {
    // const routes = useSelector((store) => store.routes);

    const dispatch = useDispatch();
    const routeId = useParams().id;
    const routeDetail = useSelector(store => store.routes.routeDetailReducer)


    useEffect(() => {
        console.log('in useEffect RouteDetail',routeId);
        dispatch({
            type: 'FETCH_ROUTE_DETAIL',
            payload: routeId
        })
    },[routeId]);

console.log('in routeDetail', routeDetail)


  return (
    routeDetail.length > 0 &&
    <>
      <h2>Route Details</h2>
    <Box sx={{ width: '95%', margin: 'auto'}}>
      <Stack spacing={1}>
            <Item key={routeDetail.id} className='list-item'>
                <div>
                    <h4>{routeDetail[0].route_start} To {routeDetail[0].route_end}</h4>
                </div>
                <div className='detail-row'>
                    <span className='list-detail'>
                        {routeDetail[0].route_city_state}
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].route_distance}mi
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].route_time}hrs
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].route_difficulty}
                    </span>
                <span className='fav-icon-list-view'>
                {<StarBorderOutlinedIcon sx={{  }}/>}
                </span>
                </div>
            </Item>     
      </Stack>
    </Box>
    <img src="./mapPlaceholder" alt='mapView'/>
    </>
    );
}