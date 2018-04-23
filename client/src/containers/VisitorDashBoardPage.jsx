import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router';
import VisitorDashboardTable from '../AdminTableManagement/VisitorDashboardTable';
import VisitorLogHistoryTable from '../AdminTableManagement/VisitorLogHistoryTable';

function getItems() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      const id = "Property " + i;
      products.push({
        ID: i,
        Name: id,
        Address: id + ' co dia chi laaaaaaa',
        City: 'Atlanta ' + i ,
        Zip: 11110,
        Size: i,
        PropertyType: 'la dat ne ' + i,
        IsPublic: i > 2,
        IsCommercial: i < 2,
        Owner: 'Nguyen Thi Buoi',
        rating: i / 0.5,
        visit: i
      });
    }
    return products;
  }


export default class VisitorDashBoardPage extends React.Component {




  constructor(props) {
    super(props);
    this.items = getItems();
    console.log(this.items);
    // set the initial component state
    this.state = {
      errors: {},
      data: this.items,
      openViewProperty: false,
      openViewHistory: false,
      selectViewProperty: null,
      selectViewHistory: null

    };

    this.handleCloseViewProperty = this.handleCloseViewProperty.bind(this);
    this.handleCloseViewProperty = this.handleCloseViewProperty.bind(this);

  }


  onViewProperty = (row) => {
      if (this.state.selectViewProperty !== null) {
        alert("View Property is working!!!!")

      }

    }

    onViewVisitHistory = (row) => {
      if (this.state.selectViewHistory !== null) {
        alert("View Visit History is working!!!")

      }
    }

    handleOpenViewProperty = () => {
       if (this.state.selectViewProperty !== null) {
        this.setState({
          openViewProperty: true,
        });
       }
    };

    handleOpenViewHistory = () => {
        if (this.state.selectViewHistory !== null) {
          this.setState({
            openViewHistory: true,
          });

       }
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
      />,

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
      />,

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

          Property Detail
          </Dialog>

      </div>

      <div className="button-line">
          <RaisedButton label="View History" onClick={this.handleOpenViewHistory} />

         <Dialog
          title="View Visit History"
          actions={actionsViewHistory}
          modal={false}
          open={this.state.openViewHistory}
          onRequestClose={this.handleCloseViewHistory}
        >

          My VIsit History
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

