import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


const VisitorDashBoardTable = ({
  onAddSelectedViewProperty,
  data
}) => (
  <div>
          <BootstrapTable data={ data }
                        selectRow={ {
                          mode: 'radio',
                          bgColor: 'pink',
                          clickToSelect: true,
                          hideSelectColumn: true,
                          onSelect: onAddSelectedViewProperty
                        } }
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
            dataField='ID'
            dataSort={ true }
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } }
            thStyle={ { whiteSpace: 'normal' } }
            filter={ { type: 'TextFilter' }}
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
            filter={ { type: 'TextFilter' }}
          >
          Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='Street'
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
            filter={ { type: 'TextFilter' }}
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
            filter={ { type: 'TextFilter' }}
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
            filter={ { type: 'TextFilter' }}
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
            dataField='IsPublic'
            dataSort={ true }
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } }
            thStyle={ { whiteSpace: 'normal' } }

          >
          Public
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='IsCommercial'
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
            filter={ { 
            type: 'NumberFilter', 
            delay: 1000, 
            numberComparators: [ '=', '>', '<=' ] 
          } }
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
            filter={ { 
            type: 'NumberFilter', 
            delay: 1000, 
            numberComparators: [ '=', '>', '<=' ] 
          } }
          >
          Average Rating
          </TableHeaderColumn>

        </BootstrapTable>
        <NotificationContainer/>
    </div>
);

VisitorDashBoardTable.propTypes = {
  onAddSelectedViewProperty: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};
export default VisitorDashBoardTable;
