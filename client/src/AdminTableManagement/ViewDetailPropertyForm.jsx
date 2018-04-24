import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Card, CardText } from 'material-ui/Card';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';
import ToggleDisplay from 'react-toggle-display';



const ViewDetailPropertyForm = ({
  isAnimal,
  isCrop,
  data
}) => (
  <Card className="container">
    <form>
    <table>
      <tr>
        <td>Name:  </td>

        <td>   {data[0].Name}  </td>
      </tr>
      <tr>
        <td>Owner:  </td>

        <td>   {data[0].Name}  </td>
      </tr>
      <tr>
        <td>Owner Email:  </td>

        <td>   {data[0].Name}  </td>
      </tr>
      <tr>
        <td>Visits:  </td>

        <td>   {data[0].numberofVisit}  </td>
      </tr>
      <tr>
        <td>Address:  </td>

        <td>   {data[0].Street}  </td>
      </tr>
      <tr>
        <td>City:  </td>

        <td>   {data[0].City}  </td>
      </tr>
      <tr>
        <td>Zip:  </td>

        <td>   {data[0].Zip}  </td>
      </tr>
      <tr>
        <td>Size:  </td>

        <td>   {data[0].Size}  </td>
      </tr>
      <tr>
        <td>Avg. Rating:  </td>

        <td>   {data[0].avgRating}  </td>
      </tr>
      <tr>
        <td>Type:  </td>

        <td>   {data[0].PropertyType}  </td>
      </tr>
      <tr>
        <td>Public:  </td>

        <td>   {data[0].IsPublic}  </td>
      </tr>
      <tr>
        <td>Commercial:  </td>

        <td>   {data[0].IsCommercial}  </td>
      </tr>
      <tr>
        <td>ID:  </td>

        <td>   {data[0].ID}  </td>
      </tr>

      <ToggleDisplay show={isCrop}>
        <tr>
          <td> Crops:    </td>

          <td>   {data[0].ID}  </td>
        </tr>

      </ToggleDisplay>
      
      <ToggleDisplay show={isAnimal}>
        <tr>
          <td> Animals:    </td>

          <td>   {data[0].ID}  </td>
        </tr>

      </ToggleDisplay>


    </table>


    </form>
  </Card>
);


ViewDetailPropertyForm.propTypes = {
  isAnimal: PropTypes.bool.isRequired,
  isCrop: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
};

export default ViewDetailPropertyForm;
