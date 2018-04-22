import React from "react";
import { BootstrapTable, TableHeaderColumn, DeleteButton } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



function getOwners() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      const id = "startId" + i;
      products.push({
        username: id,
        email: id + '@yahoo.com',
        numProp: Math.floor((Math.random() * 2000) + 1)
      });
    }
    return products;
  }

export default class OwnerTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.owners = getOwners();
      this.state = {
        data: this.owners,
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
  
    // onAddRow = (row) => {
    //   this.owners.push(row);
    //   this.setState({
    //     data: this.owners
    //   });
    // }
  
    onDeleteRow = (row) => {
      this.owners = this.owners.filter((product) => {
        return !this.state.selectArr.includes(product);
      });
      this.setState({
        data: this.owners,
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
        <OwnerTable
        //   onCellEdit={ this.onCellEdit }
        //   onAddRow={ this.onAddRow }
          onDeleteRow={ this.onDeleteRow }
          onAddSelectedRow={ this.onAddSelectedRow }
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
    //   remoteObj.insertRow = true;
      remoteObj.dropRow = true;
      return remoteObj;
    }
    
    handleDeleteOwnerButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      // this.props.onDeleteRow(this.props.selectArr);
      onClick();
    }
    DeleteOwnerButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Delete Onwer'
          btnContextual='btn-danger'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleDeleteOwnerButtonClick(onClick) }/>
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
      return (
        <BootstrapTable data={ this.props.data }
                        selectRow={ selectRow }
                        remote={ this.remote }
                        // insertRow 
                        deleteRow search pagination
                        // cellEdit={ cellEditProp }
                        options={ {
                        //   onCellEdit: this.props.onCellEdit,
                          onDeleteRow: this.props.onDeleteRow,
                          deleteBtn: this.DeleteOwnerButton,
                        //   onAddRow: this.props.onAddRow,
                          clearSearch:true
                        } } 
                        version='4'
        >
          <TableHeaderColumn 
            dataField='username' isKey={ true } 
            dataSort={ true } 
            dataAlign='center'
          >
          Username
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='email' 
            dataSort={ true } 
            dataAlign='center'
          >
          Email
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='numProp' 
            dataSort={ true }
            dataAlign='center'
          >
          Number of Properties
          </TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }