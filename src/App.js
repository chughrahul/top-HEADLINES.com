import React from 'react';
import './App.css';
import List from './list.js';
import Details from './details.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './header.js';
import Footer from './footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function News() {
  return (
    <div className="fullBody">
      <Header/>
      <Router>
        <div>
          <Route path="/" exact component={List}/>
          <Route path="/details/:id" component={Details}/>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default News;