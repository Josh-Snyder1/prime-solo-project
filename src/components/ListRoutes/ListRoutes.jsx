import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import ListRoutes from '../ListRoutes/ListRoutes';


function ListRoutes(props) {

  const store = useSelector((store) => store);
  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch ({type: 'FETCH_ROUTES'});
  }, []); 

  return (
    <div>
        <div>
        <h2>All Routes</h2>
        {store.routes}
        </div>
    </div>
  );
}

export default ListRoutes;