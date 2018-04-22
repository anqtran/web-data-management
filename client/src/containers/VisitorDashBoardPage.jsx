import React, { PropTypes } from 'react';
// import VisitorDashBoardForm from '../components/VisitorDashBoardForm.jsx';
import VisitorDashboardTable from '../AdminTableManagement/VisitorDashboardTable';
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router'; 

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';


class VisitorDashBoardPage extends React.Component {

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
      },
      selectDashBoard: null,
      selectHistory: null,
      openVisitHistory: false,
      openPropertyDetail: false,
      data: []
    };

    this.handleViewProperty = this.handleViewProperty.bind(this);
    this.handleCloseViewHistory = this.handleCloseViewHistory.bind(this);
    // this.handleLogVisit = this.handleLogVisit.bind(this);
    // this.handleCloseViewProperty = this.handleCloseViewProperty.bind(this);
    this.onSelectedRowDashboard = this.onSelectedRowDashboard.bind(this);
    // this.processForm = this.processForm.bind(this);
    // this.changeUser = this.changeUser.bind(this);
  }

  // /**
  //  * Process the form.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  // processForm(event) {
  //   // prevent default action. in this case, action is the form submission event
  //   var self = this;
  //   event.preventDefault();
  //   axios.post('/auth/VisitorDashBoard', {
  //     user : this.state.user
  //   })
  //   .then(function (res) {
  //     // window.location.href="/thankyou"
  //     console.log('res => ',res);
  //     if (res.data.Error) {
  //       console.log('res.data.errors => ',res.data.errors);
  //       self.setState({
  //        errors: res.data.errors
  //       });
  //     } else {
  //       //if success
  //       // TO-DO need to check and route the role
  //       const user = res.data.user;
  //       const type = user.UserType;
  //       const username = user.Username;
  //       self.setState({redirect:true});
  //       console.log('self.props => ',self.props);
  //       if (type == "OWNER") {
  //       }  
  //     }
  //   })
  // }

  // /**
  //  * Change the user object.
  //  *
  //  * @param {object} event - the JavaScript event object
  //  */
  // changeUser(event) {
  //   const field = event.target.name;
  //   const user = this.state.user;
  //   user[field] = event.target.value;

  //   this.setState({
  //     user
  //   });
  // }

  handleViewProperty = () => {
    if (selectDashBoard !== null) {
      this.setState({openPropertyDetail: true});
    }
  };
  
  handleCloseViewHistory = () => {
    this.setState({openPropertyDetail: false});
  };

  handleViewHistory = () => {
    if (selectHistory !== null) {
      this.setState({openVisitHistory: true});
    }
  };

  handleCloseViewHistory = () => {
    this.setState({openVisitHistory: false});
  };

  onSelectedRowDashboard = (row) => {
          console.log(this.state.selectDashBoard === row);
          if (this.state.selectDashBoard === row) {
            this.setState({
              selectDashBoard: null
            });
          } else {
            this.setState({
              selectDashBoard: row
            });
          }
        }

        onSelectedRowVisitHistory = (row) => {
          console.log(this.state.selectHistory === row);
          if (this.state.selectHistory === row) {
            this.setState({
              selectHistory: null
            });
          } else {
            this.setState({
              selectHistory: row
            });
          }
        }

  /**
   * Render the component.
   */
  render() {
    const actionsHistory = [
      <FlatButton
        label="View Property Details"
        primary={true}
        onClick={this.handleViewProperty}
      />,
      <FlatButton
        label="Back"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseViewHistory}
      />
    ];

    const actionsDetailProperty = [
      <FlatButton
        label="Log Visit"
        primary={true}
        onClick={this.handleLogVisit}
      />,
      <FlatButton
        label="Back"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseViewProperty}
      />
    ];

        return (

          <Card className="container">
                    console.log('aaaaa');

          <form >
            <h2 className="card-heading">Welcome Visitor1</h2>
      
            {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}
            <VisitorDashboardTable 
              onSelectedRowDashboard={ this.onSelectedRowDashboard }
              // errors={ this.errors }
              data= { this.state.data}
              // selectRowDashBoard={ this.selectRowDashboard }
            />
            <div>
              <RaisedButton label="View Property Detail" onClick={this.handleViewProperty} />
              <Dialog
                title="My Visit History"
                actions={actionsHistory}
                modal={false}
                open={this.state.openPropertyDetail}
                onRequestClose={this.handleCloseViewHistory}
              >
                {/* <VisitorHistoryTable 
              
                /> */}
              </Dialog>
            </div>

            <div>
              <RaisedButton label="View Visit History" onClick={this.handleViewHistory} />
              <Dialog
                title="Property Detail Information"
                actions={actionsDetailProperty}
                modal={false}
                open={this.state.openVisitHistory}
                onRequestClose={this.handleCloseViewHistory}
              >
                Detail Information HERE!!!!!!!!!!!!!!!!!!!!!!


              </Dialog>
            </div>
            
          </form>
        </Card>
    );
  }

}

export default VisitorDashBoardPage;
