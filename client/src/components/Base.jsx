import React, { PropTypes, Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import LoginPage from '../containers/LoginPage.jsx';
import VisitorSignUpPage from '../containers/VisitorSignUpPage.jsx';
import OwnerSignUpPage from '../containers/OwnerSignUpPage.jsx';
import AdminDashBoardPage from '../containers/AdminDashBoardPage.jsx';
import AddPropertyPage from '../containers/AddPropertyPage.jsx';
import ViewVisitorsList from '../containers/ViewVisitorsListPage.jsx';
import ViewOwnersList from '../containers/ViewOwnersListPage.jsx';
import ViewConfirmedProperties from '../containers/ViewConfirmedPropertiesPage.jsx';
import ViewUnconfirmedProperties from '../containers/ViewUnconfirmedPropertiesPage.jsx';
import ViewApprovedAnimalsandCrops from '../containers/ViewApprovedAnimalsandCropsPage.jsx';
import ViewPendingAnimalsandCrops from '../containers/ViewPendingAnimalsandCropsPage.jsx';
import VisitorPropertyDetails from '../containers/VisitorPropertyDetailsPage.jsx';


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
    <Route exact path="/" component={LoginPage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup/visitor" component={VisitorSignUpPage}/>
    <Route path="/signup/owner" component={OwnerSignUpPage}/>
    <Route path="/admin/dashboardpage" component={AdminDashBoardPage}/>
    <Route path="/owner/addproperty" component={AddPropertyPage}/>
    <Route path="/admin/viewvisitorslist" component={ViewVisitorsList}/>
    <Route path="/admin/viewownerslist" component={ViewOwnersList}/>
    <Route path="/admin/viewconfirmedproperties" component={ViewConfirmedProperties}/>
    <Route path="/admin/viewunconfirmedproperties" component={ViewUnconfirmedProperties}/>
    <Route path="/admin/viewapprovedanimalsandcrops" component={ViewApprovedAnimalsandCrops}/>
    <Route path="/admin/viewpendinganimalsandcrops" component={ViewPendingAnimalsandCrops}/>
    <Route path="/visitor/propertydetails" component={VisitorPropertyDetails}/>
  </div>
  
);

Base.propTypes = {
  // children: PropTypes.object.isRequired
};

export default Base;



 // 