import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';



function ListRoutes(props) {

  const store = useSelector((store) => store);
  const dispatch = useDispatch(); 


  useEffect(() => {
    dispatch ({type: 'FETCH_ROUTES'});
  }, []); 

  return (
    <div>
        <div>
        {/* <p>{store.routes}</p> */}
        </div>
    </div>
  );
}

export default ListRoutes;