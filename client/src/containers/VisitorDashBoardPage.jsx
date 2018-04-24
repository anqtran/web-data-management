import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'history';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import VisitorDashboardTable from '../AdminTableManagement/VisitorDashboardTable';
import VisitorLogHistoryTable from '../AdminTableManagement/VisitorLogHistoryTable';
import { getAllProperties } from '../helpers/DataPopulation';


export default class VisitorDashBoardPage extends React.Component {


  constructor(props) {
    super(props);
    // this.items = getItems();
    // console.log(this.items);
    // set the initial component state
    this.state = {
      errors: {},
      username:{},
      data: [],
      openViewProperty: false,
      openViewHistory: false,
      selectViewProperty: null,
      selectViewHistory: null

    };

    this.handleCloseViewProperty = this.handleCloseViewProperty.bind(this);
    this.handleCloseViewHistory = this.handleCloseViewHistory.bind(this);

  }

  componentWillMount() {
      var self = this;
      var location = window.location.href;
      var index = location.lastIndexOf('/');
      var email = location.substring(index + 1);
      getAllProperties()
      .then(function(items) {
        console.log('items => ',items);
        self.setState({
          data: items
        });
              console.log('this.state.data => ',this.state.data);

      })
      console.log('this.state.data => ',this.state.data);
  }

  onViewProperty = (row) => {
      if (this.state.selectViewProperty !== null) {
        console.log("View Property is working!!!!")

      }

    }

    onViewVisitHistory = (row) => {
      if (this.state.selectViewHistory !== null) {
        console.log("View Visit History is working!!!")

      }
    };

    handleOpenViewProperty = () => {
       if (this.state.selectViewProperty !== null) {
        this.setState({
          openViewProperty: true,
        });
       }
    };

    handleOpenViewHistory = () => {
          this.setState({
            openViewHistory: true,
          });
    };

    handleCloseViewProperty = () => {
       this.setState({openViewProperty: false});
    };

    handleCloseViewHistory = () => {
       this.setState({openViewHistory: false});
    };


    onAddSelectedViewProperty = (row) => {
      console.log(this.state.selectViewProperty === row);
      if (this.state.selectViewProperty === row) {
        this.setState({
          selectViewProperty: null
        });
      } else {
        this.setState({
          selectViewProperty: row
        });
      }
    }

    onAddSelectedViewHistory = (row) => {
      console.log(this.state.selectViewHistory === row);
      if (this.state.selectViewHistory === row) {
        this.setState({
          selectViewHistory: null
        });
      } else {
        this.setState({
          selectViewHistory: row
        });
      }
    }


  /**
   * Render the component.
   */
  render() {
    const actionsViewProperty = [
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

    const actionsViewHistory = [
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

    return (

        <Card className="container">

        Welcome Visitor
      <div>
        All public, validated properties:
        <VisitorDashboardTable
          onAddSelectedViewProperty={ this.onAddSelectedViewProperty }
          data={ this.state.data}
        />
      </div>


      <div className="button-line">
          <RaisedButton label="View Property" onClick={this.handleOpenViewProperty} />
         <Dialog
          title="Property Detail"
          actions={actionsViewProperty}
          modal={false}
          open={this.state.openViewProperty}
          onRequestClose={this.handleCloseViewProperty}
        >

          </Dialog>

      </div>

      <div className="button-line">
          <RaisedButton label="View History" onClick={this.handleOpenViewHistory} />

         <Dialog
          title="My Visit History"
          actions={actionsViewHistory}
          modal={false}
          open={this.state.openViewHistory}
          onRequestClose={this.handleCloseViewHistory}
        >

          <VisitorLogHistoryTable
            onAddSelectedViewHistory={ this.onAddSelectedViewHistory }
            data={ this.state.data}
          />
          </Dialog>

      </div>

  </Card>
    );
  
  }
}
