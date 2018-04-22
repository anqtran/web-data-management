import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ViewVisitHistoryTableForm from '../AdminTableManagement/ViewVisitHistoryTableForm';


import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


const VisitorVisitHistoryForm = ({
  onViewProperty,
  onAddSelectedRow,

  // onSubmit,
  // onChange,
  errors,
  data
}) => (
  
  <Card className="container" expandable = {true} >
    {/* <form action="/" onSubmit = {onSubmit}> */}
      <h2 className="card-heading">Your Visit History</h2>
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <BootstrapTable data={ data }
                        selectRow={ {
                          mode: 'radio',
                          bgColor: '#4285F4',
                          hideSelectColumn: true,
                          clickToSelect: true,
                          onSelect: onAddSelectedRow
                    
                        }}
                        search pagination
                        options={ {
                          expandBy: 'column',
                          clearSearch:true
                        } } 
                        hover height='100%'
                        printable
                        version='4'
        >

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
            dataField='Date' 
            dataSort={ true } 
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }
          >
          Date Logged
          </TableHeaderColumn>
        
          <TableHeaderColumn 
            dataField='rating' 
            dataSort={ true } 
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } } 
            thStyle={ { whiteSpace: 'normal' } }

          >
          Rating
          </TableHeaderColumn>
        </BootstrapTable>

      <div className="button-line">
        <RaisedButton 
          type="view_property_details" 
          label="View Property Details" primary 
          onClick={onViewProperty}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back" primary         
                      href="./DashBoard"/>
      </div>
    {/* </form> */}
  </Card>
);

VisitorVisitHistoryForm.propTypes = {
  onViewProperty: PropTypes.func.isRequired,
  onAddSelectedRow: PropTypes.func,

  // onSubmit: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
};

export default VisitorVisitHistoryForm;
