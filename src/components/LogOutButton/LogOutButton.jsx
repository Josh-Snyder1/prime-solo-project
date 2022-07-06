import React from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from "react-router-dom";

function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    dispatch({ type: 'LOGOUT' })
    history.push('/landingPage')
  };

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={logout}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
