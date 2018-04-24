import React, { PropTypes } from 'react';
import OwnerAllOtherValidPropertiesForm from '../components/OwnerAllOtherValidPropertiesForm.jsx';
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router'; 
class OwnerAllOtherValidPropertiesPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      name: ''
    };

  }

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
      <OwnerAllOtherValidPropertiesForm
        name={this.state.name}
      />
    );
  }

}

export default OwnerAllOtherValidPropertiesPage;
