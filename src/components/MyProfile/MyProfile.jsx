import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function MyProfile() {

    const user = useSelector((store) => store.user);

  return (
    <div className="container">
      <div>
        <h1>My Profile</h1>
        <h2>Welcome, {user.username}, userid: {user.id}!</h2>
      </div>
    </div>
  );
}

export default MyProfile;
