import React, { PropTypes } from 'react';
import ViewVisitorsListForm from '../components/ViewVisitorsListForm.jsx';
import axios from 'axios';
import { browserHistory } from 'history';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
// import { Link } from 'react-router'; 

class ViewVisitorsListPage extends React.Component {

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
      <ViewVisitorsListForm
        errors={this.state.errors}
      />
    );
  }

}

export default ViewVisitorsListPage;
