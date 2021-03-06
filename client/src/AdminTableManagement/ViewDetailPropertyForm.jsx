import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Card, CardText } from 'material-ui/Card';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';
import ToggleDisplay from 'react-toggle-display';
import RaisedButton from 'material-ui/RaisedButton';



const ViewDetailPropertyForm = ({
  isAnimal,
  isCrop,
  data,
  animals,
  crops
}) => (
  

  <Card className="container">
    <form>
    <table>
      <tr>
        <td>Name:  </td>

        <td>   {data.Name}  </td>
      </tr>
      <tr>
        <td>Owner:  </td>

        <td>   {data.Owner}  </td>
      </tr>
      <tr>
        <td>Owner Email:  </td>

        <td>   {data.Name}  </td>
      </tr>
      <tr>
        <td>Visits:  </td>

        <td>   {data.numberofVisit}  </td>
      </tr>
      <tr>
        <td>Address:  </td>

        <td>   {data.Street}  </td>
      </tr>
      <tr>
        <td>City:  </td>

        <td>   {data.City}  </td>
      </tr>
      <tr>
        <td>Zip:  </td>

        <td>   {data.Zip}  </td>
      </tr>
      <tr>
        <td>Size:  </td>

        <td>   {data.Size}  </td>
      </tr>
      <tr>
        <td>Avg. Rating:  </td>

        <td>   {data.avgRating}  </td>
      </tr>
      <tr>
        <td>Type:  </td>

        <td>   {data.PropertyType}  </td>
      </tr>
      <tr>
        <td>Public:  </td>

        <td>   {data.IsPublic}  </td>
      </tr>
      <tr>
        <td>Commercial:  </td>

        <td>   {data.IsCommercial}  </td>
      </tr>
      <tr>
        <td>ID:  </td>

        <td>   {data.ID}  </td>
      </tr>


      <tr>
      <ToggleDisplay show={isCrop}>
        <tr>
          <td> Crops:    </td>

          <td>   {JSON.stringify(crops)}  </td>
        </tr>

      </ToggleDisplay>
      </tr>

      <tr>
      <ToggleDisplay show={isAnimal}>
        <tr>
          <td> Animals:    </td>

          <td>   {JSON.stringify(animals)}  </td>
        </tr>

      </ToggleDisplay>
      </tr>




      
    </table>


    </form>
  </Card>
);


ViewDetailPropertyForm.propTypes = {
  isAnimal: PropTypes.bool.isRequired,
  isCrop: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  animals: PropTypes.array.isRequired,
  crops: PropTypes.array.isRequired
};

export default ViewDetailPropertyForm;
