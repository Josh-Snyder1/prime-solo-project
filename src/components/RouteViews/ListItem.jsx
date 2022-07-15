import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
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

    useEffect(() => {
        dispatch ({type: 'FETCH_FAVORITES'});
      }, []);

    const history = useHistory();
    const dispatch = useDispatch();
    const favorites = useSelector((store) => store.favorites.favoritesReducer.map(route => {return route.id}));
    const user = useSelector((store) => store.user)

    function toggleFavorites(routeId) {
        console.log('in toggleFavorites')
        if (favorites.indexOf(routeId) >= 0){
            dispatch({type: 'DELETE_FAVORITE', routeId})
        }
        else {
            dispatch({ type: 'ADD_FAVORITE', routeId })
        }
    }
    console.log('in ListItem favorites are', favorites)
  return (
    <Box sx={{ width: '95%', margin: 'auto' }}>
      <Stack spacing={1}>
        {routes.map(route => {
            console.log('in listItem map', route.startPoint);
        return( 
            <Item key={route.id} className='list-item' 
                sx={{ border: 2 }}
            >
                <div>
                    <h4 className='route-header-clickable'
                    onClick={() => history.push(`/routeDetail/${route.id}`)}
                    >{route.startPoint} To {route.endPoint}</h4>
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

                {!user.id ? 
                    //return nothing if user not logged in
                    <></>
                    :
                    favorites.indexOf(route.id) >= 0 ?
                    //return yellow star icon if user has route in favorites list
                        <StarIcon 
                            sx={{color: '#EFC752' }}
                            onClick={() => {toggleFavorites(route.id)}}
                        />
                        :
                        //return plain star icon if user did  not favorite route
                        <StarIcon
                            sx={{color: '#1E4959'}} 
                            onClick={() => {toggleFavorites(route.id)}}
                        />
                }
                </span>
                </div>

            </Item>    
        )
    })
        }
      </Stack>
    </Box>
    );
}

// {route.route_start}{route.route_end}

// {routes.map(route => {
//     console.log('in listItem map', route.route_start);
// <Item>test</Item>     
// })}