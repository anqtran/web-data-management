import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';

function getItems() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      const id = "startId" + i;
      products.push({
        name: id,
        type: id + '@yahoo.com',
      });
    }
    return products;
  }

export default class ApprovedItemsTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.items = getItems();
      this.state = {
        data: this.items,
        selectArr: []
      };
    }
  
    // onCellEdit = (row, fieldName, value) => {
    //   const { data } = this.state;
    //   let rowIdx;
    //   const targetRow = data.find((owner, i) => {
    //     if (owner.username === row.username) {
    //       rowIdx = i;
    //       return true;
    //     }
    //     return false;
    //   });
    //   if (targetRow) {
    //     targetRow[fieldName] = value;
    //     data[rowIdx] = targetRow;
    //     this.setState({ data });
    //   }
    // }
  
      onAddRow = (row) => {
        let check = true;
        this.items.forEach((item) => {
          if (item.name === row.name ) {
            check = false;
            return;
          }
        })
        if (check) {
          this.items.push(row);
          this.setState({
            data: this.items
          });
        } else {
          NotificationManager.warning('There exists this farm item!', 'Warning', 3000);
        }
      }
  
    onDeleteRow = (row) => {
      this.items = this.items.filter((product) => {
        return !this.state.selectArr.includes(product);
      });
      this.setState({
        data: this.items,
        selectArr : []
      });
    }
  
    onAddSelectedRow = (row) => {
      if (this.state.selectArr.includes(row)) {
        let newArr = this.state.selectArr.filter((product) => {
          return product !== row;
        });
        this.setState({
          selectArr: newArr
        });
      } else {
        this.state.selectArr.push(row);
        this.setState({
          selectArr: this.state.selectArr
        });
      }
    }

    render() {
      return (
        <ApprovedItemsTable
          onCellEdit={ this.onCellEdit }
          onAddRow={ this.onAddRow }
          onDeleteRow={ this.onDeleteRow }
          onAddSelectedRow={ this.onAddSelectedRow }
          { ...this.state } />
      );
    }
  }
  
  class ApprovedItemsTable extends React.Component {
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
    
    itemNameValidator(value, row) {
      const response = { isValid: true, notification: { type: 'success', msg: '', title: ''} };
      if (!value) {
        response.isValid = false;
        response.notification.type = 'warning';
        response.notification.msg = 'Value must be inserted';
        response.notification.title = 'Requested Value';
      } 
      return response;
    }

    handleInsertButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      // this.props.onAddRow(this.props.selectArr);
      onClick();
    }
    InsertItemButton = (onClick) => {
      return (
        <InsertButton
          btnText='Add New Item'
          btnContextual='btn-success'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleInsertButtonClick(onClick) }/>
      );
    }

    handleDeleteButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onDeleteRow(this.props.selectArr);
      // onClick();
    }
    DeleteItemButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Delete Item'
          btnContextual='btn-danger'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleDeleteButtonClick(onClick) }/>
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
        clickToSelectAndEditCell: true,
        onSelect: this.props.onAddSelectedRow
      };
      let itemType = ['Animal', 'Fruit', 'Nut', 'Flower', 'Vegetable'];

      return (
        <div>
          <BootstrapTable data={ this.props.data }
                        selectRow={ selectRow }
                        remote={ this.remote }
                        insertRow deleteRow search pagination
                        // cellEdit={ cellEditProp }
                        options={ {
                        //   onCellEdit: this.props.onCellEdit,
                          onDeleteRow: this.props.onDeleteRow,
                          onAddRow: this.props.onAddRow,
                          insertBtn: this.InsertItemButton,
                          deleteBtn: this.DeleteItemButton,
                          clearSearch:true
                        } } 
                        version='4'
        >
          <TableHeaderColumn 
            isKey={ true }
            dataField='name' 
            dataSort={ true } 
            dataAlign='center'
            editable={ { type: 'text', validator: this.itemNameValidator } }
          >
          Name
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='type' 
            dataSort={ true } 
            dataAlign='center'
            editable={ { type: 'select', options: { values: itemType } } }
          >
          Type
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