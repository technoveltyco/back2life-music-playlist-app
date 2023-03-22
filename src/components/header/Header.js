import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css'

function Header(props) {
    return (
      <div class="topnav flex-container" >
        <div class="imag">
          
          <img src="app_logo_bbg.png" alt="logo"/>
         
        </div>
         
        <div class="ulc"> 
          <ul>          
            <li><a class="active" href="#live">Live</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#charts">Charts</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#features">Featurtes</a></li>          
          </ul>
        </div>

        <div class="login-container">
    
            <input type="text" placeholder="Username" name="username"></input>
            <input type="text" placeholder="Password" name="psw"></input>
            <button type="submit">Login</button>
    
          </div>

     </div>

    );
  }
  
  export default Header;
