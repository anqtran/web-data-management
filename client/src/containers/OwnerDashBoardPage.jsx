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
      name:'',
      }
    };


componentWillMount() {
      var location = window.location.href;
      var index = location.lastIndexOf('/');
      var name = location.substring(index + 1);

      this.setState({
        name : name
      });
}

  /**
   * Render the component.
   */
  render() {
        return (
      <OwnerDashBoardForm
        errors={this.state.errors}
        name={this.state.name}
      />
    );  }

}

export default OwnerDashBoardPage;
