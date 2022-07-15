import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useParams, HashRouter as Router, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import ListRoutes from '../ListRoutes/ListRoutes';
import ListItem from '../RouteViews/ListItem';



function AllRoutes() {

  const routes = useSelector((store) => store.routes.routesReducer);
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch ({type: 'FETCH_ROUTES'});
  }, []); 

  return (
    <div>
        <div>
        <h2 className='pageHeader'>All Routes</h2>
          <ListItem key={routes.id} routes={routes}/>
        </div>
    </div>
  );
}

export default AllRoutes;

