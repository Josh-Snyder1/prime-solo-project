import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ListItem from '../RouteViews/ListItem';
import Map from '../Map/Map'



function HomePage(props) {

  const topRoutes = useSelector((store) => store.routes.topRoutesReducer);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch ({type: 'FETCH_TOP_ROUTES'});
  }, []); 

  return (
    <div>
        <div>
        <h2>Top Routes</h2>
        {console.log('in top routes', topRoutes)}
        <ListItem routes={topRoutes} />
        </div>
        <div>
          <h2>Map View</h2>
        </div>
        <div>
          <Map />
        </div>
    </div>
  );
}

export default HomePage;