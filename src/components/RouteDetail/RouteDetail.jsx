import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import Comments from './Comments';
import CommentInput from './CommentInput';
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

    const dispatch = useDispatch();
    const routeId = useParams().id;
    const routeDetail = useSelector(store => store.routes.routeDetailReducer)
    const routes = useSelector(store => store.routesReducer)

    useEffect(() => {
        console.log('in useEffect RouteDetail',routeId);
        dispatch({ type: 'SET_ROUTE_DETAIL', payload: {}})
        dispatch({
            type: 'FETCH_ROUTE_DETAIL',
            payload: routeId
        })
    },[routeId]);

// console.log('in routeDetail', routeDetail)

// const coordinates = {
//     longitude: routeDetail[0].viewLng,
//     latitude: Number(routeDetail.viewLat),
//     zoom: 8
//   }
//   console.log('2. in routeDetail', routeDetail[0])

  return (
    routeDetail.length > 0 &&
    <>
      <h2>Route Details</h2>
    <Box sx={{ width: '95%', margin: 'auto'}}>
      <Stack spacing={1}>
            <Item key={routeDetail.id} className='list-item'>
                <div>
                    <h4>{routeDetail[0].startPoint} To {routeDetail[0].endPoint}</h4>
                </div>
                <div className='detail-row'>
                    <span className='list-detail'>
                        {routeDetail[0].cityState}
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].distance}mi
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].time}hrs
                    </span>
                    <span className='list-detail'>
                        {routeDetail[0].difficulty}
                    </span>
                <span className='fav-icon-list-view'>
                {<StarBorderOutlinedIcon sx={{  }}/>}
                </span>
                </div>
            </Item> 
      </Stack>
    </Box>
    <div className='mapDiv'>
    <Map coordinates={ {
    longitude: routeDetail[0].viewLng,
    latitude: Number(routeDetail[0].viewLat),
    zoom: routeDetail[0].viewZoom
  }}/>
    </div>
    <div className='comments-section'>

    <Comments route={routeDetail[0]}/>
    <CommentInput route={routeDetail[0]}/>

    </div>
    </>
    );
}

