import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import {getAllVisitor} from '../helpers/DataPopulation';


export default class VisitorTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        select : null
      }
    };
      componentWillMount() {
      var self = this;
      getAllVisitor()
      .then(function(items) {
      items.forEach((item) => {
        if(!item.LoggedVisits) {
          item.LoggedVisits = 0;
        }
      })
        console.log(items);
        self.setState({
          select: null,
          data: items
        });
      });
      console.log(this.state.data);
    }




    onCellEdit = (row) => {
      console.log(row);
      // this.visitors.forEach((visitor) => {
      //   if (this.state.selectArr.includes(visitor) && visitor.visit !== 0) {
      //     visitor.visit = 0;
      //     console.log(visitor.bgColor);
      //   }
      // }); 
      this.setState({
        data: this.visitors
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
      if (this.state.select != row) {
        this.setState({
          select: row
        })
      } else {
        this.setState({
          select: null
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
        mode: 'radio',
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
            dataField='Username' isKey={ true } 
            dataSort={ true } 
            // editable={ false }
            dataAlign='center'
          >
          Username
          </TableHeaderColumn>

          <TableHeaderColumn 
            dataField='Email' 
            dataSort={ true } 
            dataAlign='center'
          >
          Email
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='LoggedVisits' 
            dataSort={ true }
            dataAlign='center'
            editable={ true }

          >
          Log Visit
          </TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }