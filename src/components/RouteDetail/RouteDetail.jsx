import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

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
    const user = useSelector(store => store.user)
    const favorites = useSelector((store) => store.favorites.favoritesReducer.map(route => {return route.id}));

    useEffect(() => {
        console.log('in useEffect RouteDetail',routeId);
        dispatch({ type: 'SET_ROUTE_DETAIL', payload: {}})
        dispatch({
            type: 'FETCH_ROUTE_DETAIL',
            payload: routeId
        })
    },[routeId]);

    function toggleFavorites(routeId) {
        console.log('in toggleFavorites')
        if (favorites.indexOf(routeId) >= 0){
            dispatch({type: 'DELETE_FAVORITE', routeId})
        }
        else {
            dispatch({ type: 'ADD_FAVORITE', routeId })
        }
    }

// console.log('in routeDetail', routeDetail)

// const coordinates = {
//     longitude: routeDetail[0].viewLng,
//     latitude: Number(routeDetail.viewLat),
//     zoom: 8
//   }
//   console.log('2. in routeDetail', routeDetail[0])

  return (
    routeDetail.length > 0 &&
    <div className='routeDetails'>
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
                    {!user.id ? 
                    //return nothing if user not logged in
                    <></>
                    :
                    favorites.indexOf(routeDetail[0].id) >= 0 ?
                    //return yellow star icon if user has route in favorites list
                        <StarIcon 
                            sx={{color: '#EFC752' }}
                            onClick={() => {toggleFavorites(routeDetail[0].id)}}
                        />
                        :
                        //return plain star icon if user did  not favorite route
                        <StarIcon 
                            onClick={() => {toggleFavorites(routeDetail[0].id)}}
                        />
                }
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
    <div className='routeInfo'>
        <b>Start Point Info: </b> {routeDetail[0].startInfo}
        <br/>
        <b>End Point Info: </b> {routeDetail[0].endInfo}
    </div>
    {/* <div className='routeImages'>
    <img src="https://i.imgur.com/0GXy2Sj.jpg" alt="hayRiver" width='300px'/>
    </div> */}
    <div className='commentSection'>
    <h2>Comments</h2>
    <Comments route={routeDetail[0]}/>
    <CommentInput route={routeDetail[0]}/>

    </div>
    </div>
    );
}

