import React from 'react';
import { Route } from 'react-router-dom';
import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import VisitorSignUpPage from './containers/VisitorSignUpPage.jsx';
import OwnerSignUpPage from './containers/OwnerSignUpPage.jsx';
import AdminDashBoardPage from './containers/AdminDashBoardPage.jsx'
import AddPropertyPage from './containers/AddPropertyPage.jsx';



var layoutAssignments = {
  '/': Base,
  '/signup': Base,
  '/signup/owner': Base,
  '/login': Base,
}

var layoutPicker = function(props){
  var Layout = layoutAssignments[props.location.pathname];
  return Layout ? <Layout/> : <pre>bad route</pre>;
};

const App = () => (
  	<div>
  		<Route path="*" render={layoutPicker}/>
  	</div>
);

export default App;
