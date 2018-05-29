
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import HIS from'./History';
class  NAV extends Component {
    render() {
      return (
        <div className = "mynav" >
<nav class="navbar1 fixed-top ">
          <div class="container-fluid">
       
         
             
              <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-left">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <Link to="/" class="navbar-brand" href="#"><img class="img-logo" src="LOGO denim.png" /></Link>
          
          </ul>  
                <ul class="nav navbar-right">
                
                  <li><Link to="/his" >HISTORY</Link></li>
                  <li><Link to="/hat" >HAT</Link></li>
                  <li><Link to="/jac">JACKET</Link></li>
                  <li><Link to ="/jean">JEANS</Link></li>

                  <input class="form" type="search" placeholder="search" aria-label/>
                 <img class="img-search" src="search.png" />
                  <img class="img-login" src="login.png" />
                </ul>
              
            </div>
          </div>
        </nav>
        </div>
         );
        }
      }
      
      export default NAV;