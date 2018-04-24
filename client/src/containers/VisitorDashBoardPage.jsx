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
import ViewDetailPropertyForm from '../AdminTableManagement/ViewDetailPropertyForm.jsx';
import {getDetailProperty, getAllProperties, getVisitHistory, getLogHistory } from '../helpers/DataPopulation';
import { unLogVisitHistory, logVisitHistory } from '../helpers/add';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

export default class VisitorDashBoardPage extends React.Component {


  constructor(props) {
    super(props);
    // this.items = getItems();
    // console.log(this.items);
    // set the initial component state
    this.state = {
      errors: {},
      Username: '',
      Email:'',
      data: [],
      visitHistory: [],
      detailProperty: {},
      animals: [],
      crops: [],
      rating: 0,
      openViewProperty: false,
      openViewHistory: false,
      selectViewProperty: null,
      selectViewDetailProperty: null,
      selectViewHistory: null,
      isAnimal: false,
      isCrop: false,
      logLabel: "Log Visit",
      logged: false

    };
    this.handleOpenViewProperty = this.handleOpenViewProperty.bind(this);
    this.handleCloseViewProperty = this.handleCloseViewProperty.bind(this);

    this.handleCloseViewHistory = this.handleCloseViewHistory.bind(this);
    this.handleOpenViewHistory = this.handleOpenViewHistory.bind(this);


    this.handleLogVisit = this.handleLogVisit.bind(this);
    this.handleViewDetailProperty = this.handleViewDetailProperty.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  componentWillMount() {
      var self = this;
      var location = window.location.href;
      var index = location.lastIndexOf('/');
      var Username = location.substring(index + 1);
      getAllProperties()
      .then(function(items) {
        console.log('items => ',items);
      items.forEach((item) => {
        if(!item.numberofVisit) {
          item.numberofVisit = 0;
        }
        if(!item.avgRating) {
          item.avgRating = 'N/A';
        }
      })
        self.setState({
          data: items,
          Username : Username
        });
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

    handleViewDetailProperty = () => {
      if (!this.state.selectViewHistory) {
        var self = this;
        getDetailProperty(this.state.selectViewHistory.Name)
        .then(function(items) {
          console.log('items => ',items);
          self.isTrueAnimal = false;
          self.isTrueCrop = false;


           self.newAnimals = items[1].slice();

          if (items[1].length != 0) {
            self.isTrueAnimal = true;
            
          }

           self.newCrops = items[2].slice();

          if (items[2].length != 0) {
            self.isTrueCrop = true;
            
          }

          self.isLog = false;
          self.newLogLabel = "Log Visit"
          if (items[0].avgRating) {
            items[0].avgRating = "N/A";
          } else {
            self.isLog = true;
            self.newLogLabel = "Un-Log Visit"
          }
          getLogHistory(self.state.Username)
      .then(function(items) {
        console.log('this.state.Username => ',self.state.Username);
        if (items) {
          self.setState({
            rating: items
          })
        } else {
          self.setState({
          rating: 0,
        });
        }
        
        console.log('this.state.data => ',self.state.rating);

      });
          self.setState({
            detailProperty: items,
            isAnimal: self.isTrueAnimal,
            isCrop: self.isTrueCrop,
            animals: self.newAnimals,
            crops: self.newCrops,
            logged: self.isLog,
            logLabel: self.newLogLabel
          });
      });
        

    
  }
}




    handleOpenViewProperty = () => {
       if (this.state.selectViewProperty !== null ) {
        var self = this;
        getDetailProperty(this.state.selectViewProperty.Name)
        .then(function(items) {
          console.log('items => ',items);
          self.isTrueAnimal = false;
          self.isTrueCrop = false;


           self.newAnimals = items[1].slice();

          if (items[1].length != 0) {
            self.isTrueAnimal = true;
            
          }

           self.newCrops = items[2].slice();

          if (items[2].length != 0) {
            self.isTrueCrop = true;
            
          }

     
          if (!items[0].avgRating) {
            items[0].avgRating = "N/A";
          } 
          getLogHistory(self.state.Username)
      .then(function(items1) {
        console.log('this.state.Username => ',self.state.Username);
        console.log('items1 => ',items1);
        if (items1.length > 0 ) {
          self.setState({
            rating: items1,
            logged: true,
            logLabel: "Un-Log Visit"
          })
        } else {
          self.setState({
          rating: 0,
          logged: false,
          logLabel: "Log Visit"
        });
        }
        
        console.log('this.state.data => ',self.state.rating);

      });
          self.setState({
            detailProperty: items[0],
            isAnimal: self.isTrueAnimal,
            isCrop: self.isTrueCrop,
            animals: items[2],
            crops: items[1],
            openViewProperty: true
          });
        console.log('self.state.detailProperty => ',self.state.detailProperty);
        console.log('self.state.isAnimal => ',self.state.isAnimal);
       console.log('self.state.isCrop => ',self.state.isCrop);


        });
        
        // this.setState({
        //   openViewProperty: true

        // });
       }
    };

    handleOpenViewHistory = () => {
      var self = this;
      getVisitHistory(this.state.Username)
      .then(function(items) {
        console.log('this.state.Username => ',self.state.Username);
        console.log('items.VisitDate => ',items.VisitDate);
        self.setState({
          visitHistory: items,
          openViewHistory: true
        });
        console.log('this.state.data => ',self.state.visitHistory);

      });

    };

    handleCloseViewProperty = () => {
       this.setState({openViewProperty: false});
    };

    handleCloseViewHistory = () => {
       this.setState({openViewHistory: false});
    };

    handleLogVisit = () => {
      if (this.state.logged ) {
        // deleteLogHistory();
        var self = this;
        unLogVisitHistory(this.state.Username, this.state.detailProperty.ID)
      .then(function(items) {
        console.log('this.state.Username => ',self.state.Username);
        self.setState({
          logged: false,
          logLabel: "Log Visit"

        });
        if (!self.state.selectViewDetailProperty ) {
          self.setState({
            selectViewDetailProperty: null,
            openViewProperty: false
          });
        } else {
          self.setState({
            selectViewProperty: null,
            openViewProperty: false

          });
        }

      });
        
      } else if ( this.state.rating != 0) {
        var self = this;
        logVisitHistory(this.state.Username, this.state.detailProperty.ID, this.state.rating)
      .then(function(items) {
        console.log('this.state.Username => ',self.state.Username);
        self.setState({
          logged: true,
          logLabel: "Un-Log Visit"

        });
        if (!self.state.selectViewDetailProperty ) {
          self.setState({
            selectViewDetailProperty: null,
            openViewProperty: false
          })
        } else {
          self.setState({
            selectViewProperty: null,
            openViewProperty: false
          })
        }
        
      });
        


      }

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

    onAddSelectedViewDetailProperty = (row) => {
      console.log(this.state.selectViewDetailProperty === row);
      if (this.state.selectViewDetailProperty === row) {
        this.setState({
          selectViewDetailProperty: null
        });
      } else {
        this.setState({
          selectViewDetailProperty: row
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


    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }

  /**
   * Render the component.
   */
  render() {
    const actionsViewProperty = [
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
          editing={!this.state.logged}
        />,
      <FlatButton
        label={this.state.logLabel}
        primary={true}
        onClick={this.handleLogVisit}
      />,
      <FlatButton
        label="Back"
        primary={true}
        onClick={this.handleCloseViewProperty}
      />

    ];

    const actionsViewHistory = [
      <FlatButton
        label="View Property Details"
        primary={true}
        onClick={this.handleViewDetailProperty}
      />,
      <FlatButton
        label="Back"
        primary={true}
        onClick={this.handleCloseViewHistory}
      />

    ];

    return (

        <Card className="container">

        Welcome Visitor
      <div>
        <h1>All public, validated properties: </h1>
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
          open={this.state.openViewProperty}
          onRequestClose={this.handleCloseViewProperty}
        >
          <ViewDetailPropertyForm
            isAnimal={ this.state.isAnimal }
            isCrop={ this.state.isCrop }
            data={ this.state.detailProperty}
            animals={ this.state.animals }
            crops={ this.state.crops }
            
          />
          </Dialog>

      </div>

      <div className="button-line">
          <RaisedButton label="View History" onClick={this.handleOpenViewHistory} />

         <Dialog
          title="My Visit History"
          actions={actionsViewHistory}
          open={this.state.openViewHistory}
          onRequestClose={this.handleCloseViewHistory}
        >

          <VisitorLogHistoryTable
            onAddSelectedViewHistory={ this.onAddSelectedViewHistory }
            data={ this.state.visitHistory}
          />
          </Dialog>

      </div>

  </Card>
    );
  
  }
}
