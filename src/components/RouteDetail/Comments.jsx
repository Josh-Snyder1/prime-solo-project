import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function Comments(props) {

  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  return (
    <div>
      <h2>Comments Section</h2>
    </div>
  );
}

export default Comments;
