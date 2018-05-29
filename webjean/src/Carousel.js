
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import HIS from'./History';
class  CAROU extends Component {
    render() {
      return (
        

<div id="myCarousel" class="carousel slide" data-ride="carousel">

<div class="carousel-inner " >
  <div class="item active">
  <div class="d-flex justify-content-center">  
  <Link to="/his" ><img class="img-banner" src="history.png" /></Link>
  </div>
  </div>
  <div class="item">
  <div class="d-flex justify-content-center">
  <Link to="/hat" > <img class="img-banner" src="hat.png" /></Link>
  </div>
</div>
<div class="item">
  <div class="d-flex justify-content-center">
  <Link to="/jac" ><img class="img-banner" src="jacket.png" /></Link>
  </div>
</div>
<div class="item">
<div class="d-flex justify-content-center">
<Link to="/jean" > <img class="img-banner" src="jeans.png" /></Link>
  </div>
  </div>

 
  </div>



<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>

      
      );
     }
      }
      
      export default CAROU ;