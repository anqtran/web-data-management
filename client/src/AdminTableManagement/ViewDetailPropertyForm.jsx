import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Card, CardText } from 'material-ui/Card';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


const ViewDetailPropertyForm = ({
  data
}) => (
  <Card className="container">
    <form>
    <table>
      <tr>
        <td>Name :  </td>

        <td>data[0].Name  </td>
      </tr>
    </table>


    </form>
  </Card>
);


ViewDetailPropertyForm.propTypes = {
  data: PropTypes.array.isRequired
};

export default ViewDetailPropertyForm;
