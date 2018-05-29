import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { link } from 'react-router-dom';
import HIS from './History';
import NAV from './Navbar';
import CAROU from './Carousel';

class HOME extends Component {
  render() {
    return (




      <div className="HOME">
      <div class="bgimg-3">
  <div class="caption">
  <iframe src="https://www.youtube.com/embed/3DDpCWkoW80?autoplay=1&showinfo=0&controls=0&loop=1&playlist=3DDpCWkoW80&rel=0" frameborder="0" ></iframe>
  </div>
</div>


<div class="bgimg-2">
  <div class="caption"> 
  <CAROU />
  </div>
</div>


<div class="bgimg-1">
  <div class="caption">
   
  <img class="img-timeline" src="timeline.png" />
  </div>
</div>



        

        <p className="App-intro">
        

          


        
         
        </p>



      </div>

    );
  }
}

export default HOME;
