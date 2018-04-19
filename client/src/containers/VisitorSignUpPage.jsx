import React, { PropTypes } from 'react';
import VisitorSignUpForm from '../components/VisitorSignUpForm.jsx';


class VisitorSignUpPage extends React.Component {

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
        name: '',
        password: '',
        confirmPassword: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
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
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    axios.post('/auth/visitorsignup', {
      user : this.state.user
    })
    .then(function (response) {
      console.log("response:", response);
    })
    .catch(function (error) {
      console.log("error:", error);
    });
  /**
   * Render the component.
   */
  render() {
    return (
      <VisitorSignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default VisitorSignUpPage;
