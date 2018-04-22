import React, { PropTypes } from 'react';
import OwnerDashBoardForm from '../components/OwnerDashBoardForm.jsx';
import axios from 'axios';
import { browserHistory } from 'history';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
// import { Link } from 'react-router'; 

class OwnerDashBoardPage extends React.Component {

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
      <OwnerDashBoardForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default OwnerDashBoardPage;
