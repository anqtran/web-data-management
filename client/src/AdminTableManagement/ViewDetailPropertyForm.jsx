import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { BootstrapTable, TableHeaderColumn, InsertButton, DeleteButton  } from 'react-bootstrap-table';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import 'react-notifications/lib/notifications.css';


const ViewDetailPropertyForm = ({
  data
}) => (
  <Card className="container">
    <form>
      <h3> Name: ${data.Name}</h3>
      <h3> Owner: ${data.Owner}</h3>
      <h3> Owner Email: ${data.Email}</h3>
      <h3> Visits: ${data.Visit}</h3>
      <h3> Address: ${data.Street}</h3>
      <h3> City: ${data.City}</h3>
      <h3> Zip: ${data.Zip}</h3>
      <h3> Size (acres): ${data.Size}</h3>
      <h3> Avg. Rating: ${data.Rating}</h3>
      <h3> Type: ${data.Type}</h3>
      <h3> Public: ${data.Public}</h3>
      <h3> Commercial: ${data.Commercial}</h3>
      <h3> ID: ${data.ID}</h3>
      <form oninput="cropList.value=data.crops == '' ? 'Crops: ' + data.crops  ">
        <output name="cropList"></output>
      </form>
      <form oninput="animalList.value=data.animals == '' ? 'Animals: ' + data.animal  ">
        <output name="animalList"></output>
      </form>

    </form>
  </Card>
);


ViewDetailPropertyForm.propTypes = {
  data: PropTypes.object.isRequired
};

export default ViewDetailPropertyForm;
