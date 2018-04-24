import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


const VisitorLogHistoryTable = ({
  onAddSelectedViewHistory,
  data
}) => (
  <div>
          <BootstrapTable data={ data }
                        selectRow={ {
                          mode: 'radio',
                          bgColor: 'pink',
                          clickToSelect: true,
                          hideSelectColumn: true,
                          onSelect: onAddSelectedViewHistory
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
            dataField='VisitDate'
            dataSort={ true }
            dataAlign='center'
            width='10%'
            tdStyle={ { whiteSpace: 'normal' } }
            thStyle={ { whiteSpace: 'normal' } }

          >
          Date Logged
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField='Rating'
            dataSort={ true }
            dataAlign='center'
            width='8%'
            tdStyle={ { whiteSpace: 'normal' } }
            thStyle={ { whiteSpace: 'normal' } }

          >
          Rating
          </TableHeaderColumn>

        </BootstrapTable>
        <NotificationContainer/>
    </div>
);

VisitorLogHistoryTable.propTypes = {
  onAddSelectedViewHistory: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};


export default VisitorLogHistoryTable;
