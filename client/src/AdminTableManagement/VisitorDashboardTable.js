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
            dataField='visit'
            dataSort={ true }
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } }
            thStyle={ { whiteSpace: 'normal' } }

          >
          Visits
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField='rating'
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

VisitorDashBoardTable.propTypes = {
  onAddSelectedViewProperty: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};
export default VisitorDashBoardTable;
