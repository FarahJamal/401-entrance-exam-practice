import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';


const Login = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  
  return ( 
    !isAuthenticated && 
<button onClick={() => loginWithRedirect()}>Log In</button>);
};

export default Login;
