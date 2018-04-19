import React, { PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AddPropertyForm from '../components/AddPropertyForm.jsx';

const styles = {
  customWidth: {
    width: 150,
  },
};


class AddPropertyPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      property: {
        propertyName: '',
        streetAddress: '',
        city:'',
        zip:'',
        acres:'',
        propType: "Farm",
        animal:'',
        crop:'',
        public:'0',
        commercial:'0', 
        propType: 'Garden'
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeproperty = this.changeproperty.bind(this);
    this.changeSelectField  = this.changeSelectField.bind(this);
  }

  /**
   * Change the property object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeproperty(event) {
    const field = event.target.name;
    const property = this.state.property;
    property[field] = event.target.value;
        this.setState({
      property
    });
  }

  changeSelectField(event, index, value, field) {
    const property = this.state.property;
    console.log('field => ',field);
    property[field] = value;
    console.log('property => ',property);
    console.log('property[field] => ',property[field]);
    this.setState({
      property : property
    });
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    axios.post('/auth/signup', {
      property : this.state.property
    })
    .then(function (response) {
      console.log("response:", response);
    })
    .catch(function (error) {
      console.log("error:", error);
    });

  }

  /**
   * Render the component.
   */
  render() {
    return (

      <AddPropertyForm
        onSubmit={this.processForm}
        onChange={this.changeproperty}
        selectFieldOnChange ={this.changeSelectField}
        errors={this.state.errors}
        property={this.state.property}
      />
    );
  }

}

export default AddPropertyPage;
