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
    {data[1]}
      <h3> Name: {data[0].Name} </h3> 
      <h3> Owner: {data[0].Name}</h3>
      <h3> Owner Email: {data[0].Name}</h3>
      <h3> Visits: {data[0].numberofVisit}</h3>
      <h3> Address: {data[0].Street}</h3>
      <h3> City: {data[0].City}</h3>
      <h3> Zip: {data[0].Zip}</h3>
      <h3> Size (acres): {data[0].Size}</h3>
      <h3> Avg. Rating: {data[0].avgRating}</h3>
      <h3> Type: {data[0].PropertyType}</h3>
      <h3> Public: {data[0].IsPublic}</h3>
      <h3> Commercial: {data[0].IsCommercial}</h3>
      <h3> ID: {data[0].ID}</h3>
      <form oninput="cropList.value=data[2] !== '' ? '':'Crops: ' + data[2]  ">
        <output name="cropList"></output>
      </form>
      <form oninput="animalList.value=data[1] !== '' ? '':'Animals: ' + data[1]  ">
        <output name="animalList"></output>
      </form>

    </form>
  </Card>
);


ViewDetailPropertyForm.propTypes = {
  data: PropTypes.array.isRequired
};

export default ViewDetailPropertyForm;
