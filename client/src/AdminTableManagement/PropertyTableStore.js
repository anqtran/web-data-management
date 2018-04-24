import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import OwnerSignUpForm from '../components/OwnerSignUpForm.jsx';
import {getUnconfirmedProperties, getConfirmedProperties} from '../helpers/DataPopulation.js';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


export default class PropertyTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        select:null,
        IsConfirmed: false
      }
    };
  
    componentWillMount() {
      var self = this;
      var location = window.location.href;
      var isUnconfirmed = location.includes('unconfirmed');
      console.log("IMPORTANT " + isUnconfirmed);
      var index = location.lastIndexOf('/');
      // var Username = location.substring(index + 1);
      // var pathArray = window.location.pathname.split( '/' );
      // console.log('pathArray.length',pathArray.length);
      // var isOther = true;
      if (isUnconfirmed) {
      getUnconfirmedProperties()
      .then(function(items) {
      items.forEach((item) => {
        if(!item.numberofVisit) {
          item.numberofVisit = 0;
        }
        if(!item.avgRating) {
          item.avgRating = 'N/A';
        }
        if(item.ApprovedBy) {
          item.ApprovedBy = 1;
        } else {
          item.ApprovedBy = 0;
        }
      })
        self.setState({
          select: null,
          data: items,
          Username : Username,
          IsConfirmed: isUnconfirmed
        });

      })
      } else {
      getConfirmedProperties()
      .then(function(items) {
      items.forEach((item) => {
        if(!item.numberofVisit) {
          item.numberofVisit = 0;
        }
        if(!item.avgRating) {
          item.avgRating = 'N/A';
        }
      })
        self.setState({
          select: null,
          data: items,
          Username : Username,
          IsConfirmed: isUnconfirmed
        });
      })        
      }
    }

    onManageProperty = (row) => {
      var id = this.state.select;
      console.log(id);
      if (this.state.select !== null) {
          var location = window.location.href;
           var index = location.lastIndexOf('/');
        var name = location.substring(index + 1);
        window.location.replace("http://localhost:3000/dashboard/owner/manageproperty/" + name + "/" + id);
      } else {
        NotificationManager.warning('You have not selected a property');
      }
    }

    onAddProperty = (row) => {
      console.log("Running");
      window.location.replace("http://localhost:3000/owner/addproperty");
    }

    onAddSelectedRow = (row) => {
      console.log("onAddSelectedRow called", this.state.select === row);
      if (this.state.select === row) {
        this.setState({
          select: null
        });
      } else {
        this.setState({
          select: row.ID
        });
      }
      console.log('select => ',row.ID);
    }

    render() {
      console.log('this.state => ',this.state);
      return (
        <OwnerTable
          onAddSelectedRow={ this.onAddSelectedRow }
          onManageProperty ={ this.onManageProperty }
          onAddProperty={ this.onAddProperty }
          onViewVisitHistory ={ this.onViewVisitHistory }
          { ...this.state } />
      );
    }
  }
  
class OwnerTable extends React.Component {
  
    remote(remoteObj) {
      remoteObj.insertRow = true;
      remoteObj.dropRow = true;
      return remoteObj;
    }

    handleAddPropertyButtonClick = (onClick) => {
      this.props.onAddProperty();
    //   onClick();
    }
    AddPropertyButton = (onClick) => {
      return (
        <InsertButton
          hidden = {!this.props.IsOther}
          btnText='Add Property'
          btnContextual='btn-success'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleAddPropertyButtonClick(onClick) }/>
      );
    }

    handleManagePropertyButtonClick = (onClick) => {

      this.props.onManageProperty();
    //   onClick();
    }
    ManagePropertyButton = (onClick) => {
      return (
        <DeleteButton
         hidden = {!this.props.IsOther}
          btnText='Manage Property'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleManagePropertyButtonClick(onClick) }
          />
      );
    }

    render() {
      const selectRow = {
        mode: 'radio',
        bgColor: '#4285F4',
        hideSelectColumn: true,
        clickToSelect: true,
        onSelect: this.props.onAddSelectedRow

      };
      console.log("Renderinggg");
      return (
        <div>
          <BootstrapTable data={ this.props.data }
                        selectRow={ selectRow }
                        remote={ this.remote }
                        insertRow deleteRow search pagination
                        options={ {
                        onManageProperty: this.props.onManageProperty,
                        onAddProperty: this.props.onAddProperty,
                          insertBtn: this.AddPropertyButton,
                          expandBy: 'column',
                          deleteBtn: this.ManagePropertyButton,
                          clearSearch:true
                        } } 
                        hover height='100%'
                        printable
                        version='4'
        >
          <TableHeaderColumn 
            dataField='ID' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }
          >
          ID
          </TableHeaderColumn>
          <TableHeaderColumn 
            isKey={ true }
            dataField='Name' 
            dataSort={ true } 
            dataAlign='center'
            width='15%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Name
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='street' 
            dataSort={ true } 
            dataAlign='center'
            width='20%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Address
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='City' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          City
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Zip' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Zipcode
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Size' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Size
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='PropertyType' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Type
          </TableHeaderColumn>

          <TableHeaderColumn 
          hidden = {!this.props.IsOther}
            dataField='ApprovedBy' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Is Valid
          </TableHeaderColumn>

          <TableHeaderColumn 
            dataField='isPublic' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }
          >
          Public
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='isCommercial' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Commercial
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='numberofVisit' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Visits
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='avgRating' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Average Rating
          </TableHeaderColumn>
        </BootstrapTable>
        <NotificationContainer/>
        </div>
        
      );
    }
  }