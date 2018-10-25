import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import ForgotPassword from './components/Auth/ForgotPassword/ForgotPassword';
import PrintData from './components/Invoice/Invoice';
import NotFound from './components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Router>
      <Switch>
    

      

      <Route exact path="/" component={Signin} />
      <Route path="/Signup" component={Signup} />
     <Route path="/ForgotPassword" component={ForgotPassword} />
     <Route path="/Invoice" component={PrintData} />
     <Route  component={NotFound} />
     </Switch>
  </Router>
      </div>
    );
  }
}

export default App;
