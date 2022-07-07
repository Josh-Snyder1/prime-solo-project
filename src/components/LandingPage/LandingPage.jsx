import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './LandingPage.css';
import LoginForm from '../LoginForm/LoginForm'

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/register');
  };

  return (
    <div className="container">
      <h2>Welcome</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Lorem ipsum
          </p>

        </div>
        <div className="grid-col grid-col_4" >
          <LoginForm />
          <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
