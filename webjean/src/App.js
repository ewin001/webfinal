import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import HIS from'./History';
import   NAV from './Navbar';
import CAROU from './Carousel';
import HOME from './home';
import HAT from './Hat';
import JAC from './jacket';
import JEAN from './jean';
class App extends Component {
  render() {
    return (

  


      <div className="App">
       <div nav >
      <NAV/>
         </div>
       <div classname="rout">
      <Route exact path="/" component={HOME} />
      <Route path="/his" component={HIS} />   
      <Route path="/hat" component={HAT} />   
      <Route path="/jac" component={JAC} />   
      <Route path="/jean" component={JEAN} />   
      
      </div>      
       
   
<footer class="container-fluid Sticky-bottom">
<div class="d-flex justify-content-center">
<a href="https://www.instagram.com/milkinn_/" > <img class="img-foot1" src="instagram-logo.png" /> </a>
<a href="https://twitter.com/Sticker_HM?s=07"><img class="img-foot2" src="twitter-logo-button.png" /> </a>
<a href="https://www.facebook.com/mellownie.nun"><img class="img-foot3" src="facebook-logo-button.png" /></a>
</div>


</footer>
  

      </div>
      
    );
  }
}

export default App;
