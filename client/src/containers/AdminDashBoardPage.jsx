import React, { PropTypes } from 'react';
import AdminDashBoardForm from '../components/AdminDashBoardForm.jsx';
import {FlatButton, Card} from 'material-ui/RaisedButton';

class AdminDashBoard extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      name:'',
      }
  }

componentWillMount() {
      var location = window.location.href;
      var index = location.lastIndexOf('/');
      var name = location.substring(index + 1);

      this.setState({
        name : name
      });
}



  render() {
    return (
      <AdminDashBoardForm
        errors={this.state.errors}
        name={this.state.name}
      />
    );
  }

}
export default AdminDashBoard;

