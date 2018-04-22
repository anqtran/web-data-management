import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';



function getVisitors() {
    const products = [];
    for (let i = 0; i < 12; i++) {
      const id = "startId" + i;
      products.push({
        username: id,
        email: id + '@yahoo.com',
        visit: Math.floor((Math.random() * 2000) + 1)
      });
    }
    return products;
  }

export default class VisitorTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.visitors = getVisitors();
      this.state = {
        data: this.visitors,
        selectArr: []

      };
    }
  
    // onCellEdit = (row, fieldName, value) => {
    //     console.log(row);
    //   const { data } = this.state;
    //   let rowIdx;
    //   const targetRow = data.find((vis, i) => {
    //     if (vis.username === row.username) {
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
    //   this.visitors.push(row);
    //   this.setState({
    //     data: this.visitors
    //   });
    // }
    
    onCellEdit = (row) => {
      this.visitors.forEach((visitor) => {
        if (this.state.selectArr.includes(visitor) && visitor.visit !== 0) {
          visitor.visit = 0;
          console.log(visitor.bgColor);
        }
      }); 
      this.setState({
        data: this.visitors,
      });
    }

    onDeleteRow = (row) => {
      this.visitors = this.visitors.filter((product) => {
        return !this.state.selectArr.includes(product);
      });
      this.setState({
        data: this.visitors,
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
        <VisitorTable
          onCellEdit={ this.onCellEdit }
          // onAddRow={ this.onAddRow }
          onDeleteRow={ this.onDeleteRow }
          onAddSelectedRow={ this.onAddSelectedRow }
          { ...this.state } />
      );
    }
  }
  
  class VisitorTable extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  
    remote(remoteObj) {
      // Only cell editing, insert and delete row will be handled by remote store
      // remoteObj.cellEdit = true;
      // remoteObj.insertRow = true;
      remoteObj.dropRow = true;
      return remoteObj;
    }
    
    handleDeleteVisitorButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onDeleteRow(this.props.selectArr);
      // onClick();
    }
    DeleteVistorButton = (onClick) => {
      return (
        <DeleteButton
          btnText='Delete Visitor'
          btnContextual='btn-danger'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleDeleteVisitorButtonClick(onClick) }/>
      );
    }

    handleDeleteLogVisitorButtonClick = (onClick) => {
      // Custom your onClick event here,
      // it's not necessary to implement this function if you have no any process before onClick
      // console.log('This is my custom function for InserButton click event');
      // console.log(this.props.selectArr);
      this.props.onCellEdit(this.props.selectArr);
      // onClick();
    }
    DeleteLogVistorButton = (onClick) => {
      return (
        <InsertButton
          btnText='Delete Log Visitor'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={ () => this.handleDeleteLogVisitorButtonClick(onClick) }/>
      );
    }

    render() {
      // const cellEditProp = {
      //   mode: 'dbclick'
      // };
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
                        insertRow deleteRow search pagination
                        // cellEdit={ cellEditProp }
                        options={ {
                          onCellEdit: this.props.onCellEdit,
                          onDeleteRow: this.props.onDeleteRow,
                          insertBtn: this.DeleteLogVistorButton,
                          deleteBtn: this.DeleteVistorButton,
                          // onAddRow: this.props.onAddRow,
                          clearSearch:true
                        } } 
                        version='4'
        >
          <TableHeaderColumn 
            dataField='username' isKey={ true } 
            dataSort={ true } 
            // editable={ false }
            dataAlign='center'
          >
          Username
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='email' 
            dataSort={ true } 
            // editable={ false }
            dataAlign='center'
          >
          Email
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='visit' 
            dataSort={ true }
            dataAlign='center'
          >
          Log Visit
          </TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }