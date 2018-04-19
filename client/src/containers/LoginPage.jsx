import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Router } from 'react-router';
import { browserHistory } from 'history';
import { Link } from 'react-router'; 
class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    var self = this;
    event.preventDefault();
    axios.post('/auth/login', {
      user : this.state.user
    })
    .then(function (res) {
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        self.setState({
         errors: res.data.errors
        });
      } else {
        //if success
        // TO-DO need to check and route the role
        const user = res.data.user;
        const type = user.UserType;
        const username = user.Username;
        self.setState({redirect:true});
        console.log('self.props => ',self.props);
        // if (type == "OWNER") {
        //   return <Redirect to='/somewhere'/>;
        // }        

      }
    })
   

    //axios
    // create a string for an HTTP body message

    // const email = encodeURIComponent(this.state.user.email);
    // const password = encodeURIComponent(this.state.user.password);
    // const formData = `email=${email}&password=${password}`;

    // // create an AJAX request
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', '/auth/login');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // xhr.resType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     // success

    //     // change the component-container state
    //     this.setState({
    //       errors: {}
    //     });

    //     console.log('The form is valid');
    //   } else {
    //     // failure

    //     // change the component state
    //     const errors = xhr.response.errors ? xhr.response.errors : {};
    //     errors.summary = xhr.response.message;

    //     this.setState({
    //       errors
    //     });
    //   }
    // });
    // xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
        return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
