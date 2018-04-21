import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';

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
        ApprovedBy: 'Mr. Right'
      });
    }
    return products;
  }

export default class PropertyTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.items = getItems();
      this.state = {
        data: this.items,
      };
    }
  
    onUpdateRow = (row) => {
      alert("A NHON A XEEEE OOOOOO!!!!!!!")
      this.setState({
        data: this.items,
        selectArr : []
      });
    }

    render() {
      return (
        <PropertyTable
        //   onCellEdit={ this.onCellEdit }
        //   onAddRow={ this.onAddRow }
        //   onDeleteRow={ this.onDeleteRow }
        //   onAddSelectedRow={ this.onAddSelectedRow }
        onUpdateRow ={ this.onUpdateRow }
          { ...this.state } />
      );
    }
  }
  
  class PropertyTable extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  
    remote(remoteObj) {
      // Only cell editing, insert and delete row will be handled by remote store
    //   remoteObj.cellEdit = true;
      remoteObj.insertRow = true;
    //   remoteObj.dropRow = true;
      return remoteObj;
    }

    handleManageButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onUpdateRow();
    //   onClick();
    }
    ManageButton = (onClick) => {
      return (
        <InsertButton
          btnText='Manage Seleted Property'
          btnContextual='btn-success'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleManageButtonClick(onClick) }/>
      );
    }

    render() {
    //   const cellEditProp = {
    //     mode: 'dbclick'
    //   };
      const selectRow = {
        mode: 'checkbox',
        bgColor: '#4285F4',
        hideSelectColumn: true,
        clickToSelect: true,
      };

      return (
        <div>
          <BootstrapTable data={ this.props.data }
                        selectRow={ selectRow }
                        remote={ this.remote }
                        insertRow search pagination
                        // cellEdit={ cellEditProp }
                        options={ {
                        //   onCellEdit: this.props.onCellEdit,
                        //   onDeleteRow: this.props.onDeleteRow,
                        //   onAddRow: this.props.onAddRow,
                          onUpdateRow: this.onUpdateRow,
                          insertBtn: this.ManageButton,
                          expandBy: 'column',
                        //   deleteBtn: this.DeleteItemButton,
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
            width='5%'
          >
          ID
          </TableHeaderColumn>
          <TableHeaderColumn 
            isKey={ true }
            dataField='Name' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

            // editable={ { type: 'text', validator: this.itemNameValidator } }
          >
          Name
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Address' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

            // editable={ { type: 'select', options: { values: itemType } } }
          >
          Address
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='City' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          City
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Zip' 
            dataSort={ true } 
            dataAlign='center'
            width='5%'

          >
          Zipcode
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Size' 
            dataSort={ true } 
            dataAlign='center'
            width='5%'

          >
          Size
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='PropertyType' 
            dataSort={ true } 
            dataAlign='center'
            width='5%'

          >
          Property Type
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='IsPublic' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          Public
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='IsCommercial' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          Commercial
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Owner' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          Owner
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='rating' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          Average Rating
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='ApprovedBy' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'

          >
          Verried By
          </TableHeaderColumn>
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