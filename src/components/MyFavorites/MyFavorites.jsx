import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ListItem from '../RouteViews/ListItem';

function MyFavorites({routes}) {

  const store = useSelector((store) => store);
  const dispatch = useDispatch(); 
  

  useEffect(() => {
    dispatch ({type: 'FETCH_FAVORITES'});
  }, []); 

  return (
    <div>
        <div>
        <h2>Favorite Routes</h2>
        <ListItem routes={routes} />
        </div>
    </div>
  );
}

export default MyFavorites;