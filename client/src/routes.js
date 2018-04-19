import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import VisitorSignUpPage from './containers/VisitorSignUpPage.jsx';
import OwnerSignUpPage from './containers/OwnerSignUpPage.jsx';
<<<<<<< HEAD
=======
import AdminDashBoardPage from './containers/AdminDashBoardPage.jsx'
<<<<<<< HEAD
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
=======
import AddPropertyPage from './containers/AddPropertyPage.jsx';
>>>>>>> f78d949b119bc0dd65968b76cf8173a4d651f792

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
<<<<<<< HEAD
>>>>>>> 4a0ab87314b5b0d9c3df2241f13d7d09f02648ed
=======
    },
    {
      path:'/owner/addproperty',
      component: AddPropertyPage
>>>>>>> f78d949b119bc0dd65968b76cf8173a4d651f792
    }
  ]
};

export default routes;
