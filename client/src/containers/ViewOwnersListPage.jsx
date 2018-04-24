import React, { PropTypes } from 'react';
import ViewOwnersListForm from '../components/ViewOwnersListForm.jsx';
import axios from 'axios';
import { browserHistory } from 'history';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
// import { Link } from 'react-router'; 

class ViewOwnersListPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {

    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      }
    };


componentWillMount() {

}

  /**
   * Render the component.
   */
  render() {
        return (
      <ViewOwnersListForm
        errors={this.state.errors}
      />
    );
  }

}

export default ViewOwnersListPage;
