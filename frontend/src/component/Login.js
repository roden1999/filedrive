import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import 'font-awesome/css/font-awesome.min.css';

import { apihost } from '../apihost';
import UserContext from './context/UserContext';
import { Link, Redirect } from 'react-router-dom';

const Login = (props) => {
  const { isLogin, setIsLogin } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const container = document.getElementById('container');

  const signUpButton = () => {
    // container.classList("right-panel-active");
    document.getElementById("container").classList.add("right-panel-active");
  }

  const signInButton = () => {
    // container.classList("right-panel-active");
    document.getElementById("container").classList.remove("right-panel-active");
  }

  const onSubmit = () => {
    
  }

  return (
    <div style={{
      fontFamily: `'Montserrat', sans-serif`,
      background: '#f6f5f7',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: '100vh',
      margin: '-20px 0 50px',
    }}>
      <h1>This site are still under construction!</h1>
      <h1>You can check my other deployed projects</h1>
      <a href="https://rodenmontoya.herokuapp.com/"><h1>{'> Here <'}</h1></a>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fav fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fav fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fav fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span> */}
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              {/* <a href="#">Forgot your password?</a> */}
              <button onClick={onSubmit}>Sign In</button>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info.</p>
              <button className="ghost" id="signIn" onClick={signInButton}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;
