import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="container">
      <h2>Register to get access to all features</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            Lorem ipsum
          </p>

        </div>
        <div className="grid-col grid-col_4" >
          <RegisterForm />
          <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
