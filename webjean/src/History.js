import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAV from './Navbar';
class HIS extends Component {
  render() {
    return (

      <div className="HIS">
         
        <p className="App-intro">
      
      
     <div class="bgimg-1">
  <div class="caption">
   
  <img class="img-1" src="box.png" />
  </div>
</div>
<div class="bgimg-2">
  <div class="caption">

  <img class="img-timeline" src="HisGroup 1.png" />
    
  <img class="img-timeline" src="HisGroup 2.png" />
  </div>

</div>


<div class="bgimg-1">
  <div class="caption">
   
  <img class="img-timeline" src="HisGroup 3.png" />
  </div>
</div>

        </p>
   </div>
      
    );
  }
}

export default HIS;
