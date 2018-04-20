import React, { PropTypes, Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import LoginPage from '../containers/LoginPage.jsx'
import VisitorSignUpPage from '../containers/VisitorSignUpPage.jsx'


console.log(' GOT HERE');
const Base = ({ children }) => (
  // console.log(children);
  <div>
    <div className="top-bar">
      
      <div className="top-bar-left">
        <NavLink to="/">Atlanta Gardens, Farms, and Orchards</NavLink>
      </div>

      
      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup/visitor"> Visitor Sign up</Link>
        <Link to="/signup/owner"> Owner Sign up</Link>
      </div>
    </div>
  
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup/owner" component={VisitorSignUpPage}/>
  </div>
  
);

Base.propTypes = {
  // children: PropTypes.object.isRequired
};

export default Base;



 // 