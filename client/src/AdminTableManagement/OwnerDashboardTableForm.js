import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link, Redirect } from 'react-router';
import OwnerSignUpForm from '../components/OwnerSignUpForm.jsx';

import {getOwnerProperties} from '../helpers/DataPopulation.js';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


export default class OwnerDashboardTableForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        select:null
      }
      // this.items = getOwnerProperties('orchardowner');
      // console.log('this.items => ',this.items);
      // this.state = {
      //   select: null,
      //   data:[]
      // }
      // console.log('this.state.data => ',this.state.data);
    };
  
    componentWillMount() {
      var self = this;
      console.log("Mouting")
      getOwnerProperties('orchardowner')
      .then(function(items) {
        console.log("Items:" + JSON.stringify(items))
        self.setState( {
          select: null,
          data: items
        })
      })
      // // this.s = getOwnerProperties("orchardowner");
      // // console.log('s => ', getOwnerProperties("orchardowner"));
      // this.setState({
      //   data: this.s
      //   });
      // console.log('tdrt: ',this.state.data);
    }

    // componentWillUnmount() {

    // }

    onManageProperty = (row) => {
      if (this.state.select !== null) {
        alert("View Property is working!!!!")
      }
    }

    onAddProperty = (row) => {
      console.log("Running");
      // console.log('this.state.data => ',this.state.data);
      // console.log("Props:", this.props)
      if (this.state.select !== null) {
        alert("View Visit History is working!!!")
        
      }
    }

    onAddSelectedRow = (row) => {
      console.log(this.state.select === row);
      if (this.state.select === row) {
        this.setState({
          select: null
        });
      } else {
        this.setState({
          select: row
        });
      }
    }

    render() {
      console.log('this.state => ',this.state);
      return (
        <OwnerTable
        //   onCellEdit={ this.onCellEdit }
        //   onAddRow={ this.onAddRow }
        //   onDeleteRow={ this.onDeleteRow }
          onAddSelectedRow={ this.onAddSelectedRow }
          onManageProperty ={ this.onManageProperty }
          onAddProperty={ this.onAddProperty }
          onViewVisitHistory ={ this.onViewVisitHistory }
          { ...this.state } />
      );
    }
  }
  
  class OwnerTable extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  
    remote(remoteObj) {
      // Only cell editing, insert and delete row will be handled by remote store
    //   remoteObj.cellEdit = true;
      remoteObj.insertRow = true;
      remoteObj.dropRow = true;
      return remoteObj;
    }

    handleAddPropertyButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onAddProperty();
    //   onClick();
    }
    AddPropertyButton = (onClick) => {
      return (
        <InsertButton
          btnText='Add Property'
          btnContextual='btn-success'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleAddPropertyButtonClick(onClick) }/>
      );
    }

    handleManagePropertyButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onManageProperty();
    //   onClick();
    }
    ManagePropertyButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Manage Property'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleManagePropertyButtonClick(onClick) }/>
      );
    }

    render() {
    //   const cellEditProp = {
    //     mode: 'dbclick'
    //   };
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
                        // cellEdit={ cellEditProp }
                        options={ {
                        //   onCellEdit: this.props.onCellEdit,
                        //   onDeleteRow: this.props.onDeleteRow,
                        //   onAddRow: this.props.onAddRow,
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

            // editable={ { type: 'text', validator: this.itemNameValidator } }
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

            // editable={ { type: 'select', options: { values: itemType } } }
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
          {/* <TableHeaderColumn 
            dataField='Owner' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Owner
          </TableHeaderColumn> */}
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
          {/* <TableHeaderColumn 
            dataField='ApprovedBy' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Verried By
          </TableHeaderColumn> */}
          {/* <TableHeaderColumn 
            dataField='numProp' 
            dataSort={ true }
            dataAlign='center'
          >
          Number of Properties
          </TableHeaderColumn> */}
        </BootstrapTable>
        <NotificationContainer/>
        </div>
        
      );
    }
  }