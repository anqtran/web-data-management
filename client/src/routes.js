import React from 'react';
import { Route } from 'react-router-dom';
import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import VisitorSignUpPage from './containers/VisitorSignUpPage.jsx';
import OwnerSignUpPage from './containers/OwnerSignUpPage.jsx';
import AdminDashBoardPage from './containers/AdminDashBoardPage.jsx'
import AddPropertyPage from './containers/AddPropertyPage.jsx';


// const routes = {
//   // base component (wrapper for the whole application).
//   component: Base,
//   childRoutes: [

//     {
//       path: '/',
//       component: LoginPage
//     },

//     {
//       path: '/login',
//       component: LoginPage
//     },

//     {
//       path: '/signup/visitor',
//       component: VisitorSignUpPage
//     },
//     {
//       path:'signup/owner',
//       component: OwnerSignUpPage
//     },
//     {
//       path:'/admin/dashboard',
//       component: AdminDashBoardPage
//     },
//     {
//       path:'/owner/addproperty',
//       component: AddPropertyPage
//     }
//   ]
// };
const routes = () => (
  <div>
    <Route path='/login' exact component={LoginPage} />
  </div>
);

export default routes;
