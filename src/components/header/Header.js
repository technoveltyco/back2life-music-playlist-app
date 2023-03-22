import React from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css'
import Navbar from '../Navbar';
import appLogo from '../../images/app_logo_nbg.jpg'

function Header(props) {
    return (
      <div className="topnav flex-container" >
        <div className="image h-12 w-auto lg:block">
          
          <img src={appLogo} alt="Back2Life app logo"/>
         
        </div>
         
        <div className="header-nav"> 
          <ul>          
           <Navbar/> 
           {/* <li><a className="active" href="#live">Live</a></li>
            <li><a href="#music">Music</a></li>
            <li><a href="#charts">Charts</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#features">Featurtes</a></li>           */}
          </ul>
        </div>

        <div className="login-container">
    
            <input type="text" placeholder="Username" name="username"></input>
            <input type="text" placeholder="Password" name="psw"></input>
            <button type="submit">Login</button>
    
          </div>

     </div>

    );
  }
  
  export default Header;
