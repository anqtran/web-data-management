import React, { PropTypes, Component } from 'react';
import { Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import Login from '../containers/LoginPage.jsx';
import VisitorSignUp from '../containers/VisitorSignUpPage.jsx';
import OwnerSignUp from '../containers/OwnerSignUpPage.jsx';

import OwnerDashBoard from '../containers/OwnerDashBoardPage.jsx';
import OwnerAllOtherValidProperties from '../containers/OwnerAllOtherValidPropertiesPage.jsx';
import OwnerAddProperty from '../containers/AddPropertyPage.jsx';
import OwnerPropertyDetails from '../containers/OwnerPropertyDetailsPage.jsx';
import OwnerManageProperty from '../containers/OwnerManagePropertyPage.jsx';

import AdminDashBoard from '../containers/AdminDashBoardPage.jsx';
import AdminViewVisitorsList from '../containers/ViewVisitorsListPage.jsx';
import AdminViewOwnersList from '../containers/ViewOwnersListPage.jsx';
import AdminViewConfirmedProperties from '../containers/ViewConfirmedPropertiesPage.jsx';
import AdminViewUnconfirmedProperties from '../containers/ViewUnconfirmedPropertiesPage.jsx';
import AdminViewApprovedAnimalsandCrops from '../containers/ViewApprovedAnimalsandCropsPage.jsx';
import AdminViewPendingAnimalsandCrops from '../containers/ViewPendingAnimalsandCropsPage.jsx';

import VisitorDashBoard from '../containers/VisitorDashBoardPage.jsx';
import VisitorPropertyDetails from '../containers/VisitorPropertyDetailsPage.jsx';
// import Visitor
import VisitorVisitHistory from '../containers/VisitorVisitHistoryPage.jsx';


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
    <Route exact path="/" component={Login}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup/visitor" component={VisitorSignUp}/>
    <Route path="/signup/owner" component={OwnerSignUp}/>

    <Route path="/owner/dashboard" component={OwnerAddProperty}/>
    <Route path="/owner/allothervalidproperties" component={OwnerAllOtherValidProperties}/>
    <Route path="/owner/addproperty" component={OwnerAddProperty}/>
    <Route path="/owner/propertydetails" component={OwnerPropertyDetails}/>
    <Route path="/owner/manageproperty" component={OwnerManageProperty}/>


    <Route path="/admin/dashboard" component={AdminDashBoard}/>
    <Route path="/admin/viewvisitorslist" component={AdminViewVisitorsList}/>
    <Route path="/admin/viewownerslist" component={AdminViewOwnersList}/>
    <Route path="/admin/viewconfirmedproperties" component={AdminViewConfirmedProperties}/>
    <Route path="/admin/viewunconfirmedproperties" component={AdminViewUnconfirmedProperties}/>
    <Route path="/admin/viewapprovedanimalsandcrops" component={AdminViewApprovedAnimalsandCrops}/>
    <Route path="/admin/viewpendinganimalsandcrops" component={AdminViewPendingAnimalsandCrops}/>

    <Route path="/visitor/dashboard" component={VisitorDashBoard}/>
    <Route path="/visitor/confirmedpropertydetails" component={VisitorPropertyDetails}/>
    {/*<Route path="/visitor/loggedpropertydetails" component={VisitorLoggedPropertyDetails}/>*/}
    <Route path="/visitor/visithistory" component={VisitorVisitHistory}/>
  </div>

);

Base.propTypes = {
  // children: PropTypes.object.isRequired
};

export default Base;



 //