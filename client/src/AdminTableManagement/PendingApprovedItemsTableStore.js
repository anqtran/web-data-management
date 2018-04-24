import React from "react";
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';
import { getFarmItems } from '../helpers/DataPopulation';
import {getApprovedItems, getPendingItems} from '../helpers/DataPopulation.js';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';



export default class PendingApprovedItemsTableStore extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        select:null,
        isApproved: false,
        farmItems: []
      }
    };
  
  
    componentWillMount() {
      var self = this;
      var location = window.location.href;
      var isApproved = location.includes('approved');
      console.log("IMPORTANT " + isApproved);
      var index = location.lastIndexOf('/');
      getFarmItems()
      .then(function(items) {
        self.setState( {
          farmItems: items[1].concat(items[2]).concat(items[0])
        })
      })
      if (isApproved) {
      getApprovedItems()
      .then(function(items) {
      items.forEach((item) => {

      })
        self.setState({
          data: items
        });

      })
      } else {
      getPendingItems()
      .then(function(items) {
        console.log(' pendinggg=> ');
      items.forEach((item) => {
      })
      console.log('items => ',items);
        self.setState({
          select: null,
          data: items,
          isApproved: isApproved
        });
      }) 
      console.log('data => ',self.state.data);
      }
    }
  
      onAddRow = (row) => {
        this.items = this.items.filter((item) => {
            return !row.includes(item);
        });
        this.setState({
            data: this.items
          });
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
        <PendingApprovedItemsTable
        //   onCellEdit={ this.onCellEdit }
          onAddRow={ this.onAddRow }
          onDeleteRow={ this.onDeleteRow }
          onAddSelectedRow={ this.onAddSelectedRow }
          { ...this.state } />
      );
    }
  }
  
  class PendingApprovedItemsTable extends React.Component {
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
    
    
    handleInsertButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        // console.log('This is my custom function for InserButton click event');
        // console.log(this.props.selectArr);
        this.props.onAddRow(this.props.selectArr);
        // onClick();
      }
    ApproveButton = (onClick) => {
        return (
          <InsertButton
            btnText='Approve Item'
            btnContextual='btn-success'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => this.handleInsertButtonClick(onClick) }/>
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
    //   let itemType = ['Animal', 'Fruit', 'Nut', 'Flower', 'Vegetable'];
    // handleInsertButtonClick = (onClick) => {
    //     // Custom your onClick event here,
    //     // it's not necessary to implement this function if you have no any process before onClick
    //     console.log('This is my custom function for InserButton click event');

    //     onClick();
    //   }
    
      return (
        <div>

          <BootstrapTable data={ this.props.data }
                        selectRow={ selectRow }
                        remote={ this.remote }
                        insertRow 
                        deleteRow search pagination
                        // cellEdit={ cellEditProp }
                        options={ {
                        //   onCellEdit: this.props.onCellEdit,
                          insertBtn: this.ApproveButton,
                          onAddRow: this.props.onAddRow,
                          onDeleteRow: this.props.onDeleteRow,
                          clearSearch:true
                        } } 
                        version='4'
          >
          <TableHeaderColumn 
            isKey={ true }
            dataField='Name' 
            dataSort={ true } 
            dataAlign='center'
            // editable={ { type: 'text', validator: this.itemNameValidator } }
          >
          Name
          </TableHeaderColumn>
          <TableHeaderColumn 
            dataField='Type' 
            dataSort={ true } 
            dataAlign='center'
            // editable={ { type: 'select', options: { values: itemType } } }
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
          {/* <NotificationContainer/> */}
        </div>
      );
    }
}
