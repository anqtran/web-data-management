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
        <NavLink to="/">Database Web Management</NavLink>
      </div>


      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup/visitor"> Visitor Sign up</Link>
        <Link to="/signup/owner"> Member Sign up</Link>

      </div>
    </div>
    <Route exact path="/" component={Login}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup/visitor" component={VisitorSignUp}/>
    <Route path="/signup/owner" component={OwnerSignUp}/>

    <Route exact path="/dashboard/owner/:username" component={OwnerDashBoard}/>
    <Route path="/dashboard/owner/allothervalidproperties/:name" component={OwnerAllOtherValidProperties}/>
    <Route path="/owner/addproperty" component={OwnerAddProperty}/>
    <Route path="/owner/propertydetails" component={OwnerPropertyDetails}/>
    <Route exact path="/dashboard/owner/manageproperty/:username/:id" component={OwnerManageProperty}/>


    <Route exact path="/dashboard/admin/:username" component={AdminDashBoard}/>
    <Route  path="/dashboard/admin/:username/viewvisitorslist" component={AdminViewVisitorsList}/>
    <Route  path="/dashboard/admin/:username/viewownerslist" component={AdminViewOwnersList}/>
    <Route  path="/dashboard/admin/:username/viewconfirmedproperties" component={AdminViewConfirmedProperties}/>
    <Route  path="/dashboard/admin/:username/viewunconfirmedproperties" component={AdminViewUnconfirmedProperties}/>
    <Route  path="/dashboard/admin/:username/viewapprovedanimalsandcrops" component={AdminViewApprovedAnimalsandCrops}/>
    <Route  path="/dashboard/admin/:username/viewpendinganimalsandcrops" component={AdminViewPendingAnimalsandCrops}/>

    <Route path="/dashboard/visitor" component={VisitorDashBoard}/>
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