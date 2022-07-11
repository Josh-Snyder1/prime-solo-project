import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ListItem from '../RouteViews/ListItem';

function MyFavorites() {

  const favorites = useSelector((store) => store.favorites.favoritesReducer);
  const dispatch = useDispatch(); 
  

  useEffect(() => {
    dispatch ({type: 'FETCH_FAVORITES'});
    console.log('in useEffect fetch')
  }, []); 
console.log('in MyFavorites', favorites)
  return (
    <div>
        <div>
        <h2>Favorite Routes</h2>
        <ListItem routes={favorites} />
        </div>
    </div>
  );
}

export default MyFavorites;