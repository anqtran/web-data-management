import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import VisitorSignUpPage from './containers/VisitorSignUpPage.jsx';
import OwnerSignUpPage from './containers/OwnerSignUpPage.jsx';
<<<<<<< HEAD
=======
import AdminDashBoardPage from './containers/AdminDashBoardPage.jsx'
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: LoginPage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup/visitor',
      component: VisitorSignUpPage
    },
    {
      path:'signup/owner',
      component: OwnerSignUpPage
<<<<<<< HEAD
=======
    },
    {
      path:'/admin/dashboard',
      component: AdminDashBoardPage
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
    }
  ]
};

export default routes;
