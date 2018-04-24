import React, { PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import OwnerSignUpForm from '../components/OwnerSignUpForm.jsx';
import { getFarmItems } from '../helpers/DataPopulation';
import {addOwner} from '../helpers/add';
const styles = {
  customWidth: {
    width: 150,
  },
};


class OwnerSignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);


    this.state = {
      errors: {},
      disabled: false,
      animals:[],
      crops: [],
      data:[],
      user: {
        email: '',
        name: '',
        password: '',
        confirmPassword:'',
        usertype: 'OWNER'
      },
      property: {
        propertyName: '',
        streetAddress: '',
        city:'',
        zip:'',
        acres:'',
        propType: "FARM",
        animal:'',
        crop:'',
        public:'0',
        commercial:'0'
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.changeSelectField  = this.changeSelectField.bind(this);
    this.propertyOnChange = this.propertyOnChange.bind(this);
  }

  componentWillMount() {
      var self = this;
      getFarmItems()
      .then(function(items) {
        self.setState( {
          data: items,
          animals: items[0],
          crops: items[1].concat(items[2])
        })
      })
  }
  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
        this.setState({
      user
    });
  }

  propertyOnChange(event) {
    const field = event.target.name;
    const property = this.state.property;
    property[field] = event.target.value;
        this.setState({
      property
    });
  }


  changeSelectField(event, index, value, field) {
    const property = this.state.property;
    property[field] = value;
    let isDisabled = false;
    const farmItems = this.state.data;
    if(property['propType'] == 'FARM') {
        isDisabled = false;
        this.state.crops = farmItems[1].concat(farmItems[2]);
    } else {
        isDisabled = true;
        property.animal = '';
      if(property['propType'] == 'GARDEN') {
        this.state.crops = farmItems[1];
      } else {
        this.state.crops = farmItems[2];
      }
    }
    this.setState({
        disabled : isDisabled,
        property : property
      });
    console.log("Disable status: ", this.state.disabled);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    var self = this;
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    console.log(' processForm go here ');
    addOwner(this.state.property, this.state.user)
      .then(function(res) {
        console.log('res => ',res);
        if(res.Error) {
          self.setState({
          errors: res.errors
       });
        } else {
          console.log('ADD SUCCESSSSSS');
          window.location.replace("http://localhost:3000/");
        }
      })
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <OwnerSignUpForm
        propertyOnChange = {this.propertyOnChange}
        onSubmit={this.processForm}
        onChange={this.changeUser}
        selectFieldOnChange ={this.changeSelectField}
        errors={this.state.errors}
        user={this.state.user}
        disabled = {this.state.disabled}
        property={this.state.property}
        animals = {this.state.animals}
        crops = {this.state.crops}
      />
    );
  }

}

export default OwnerSignUpPage;
