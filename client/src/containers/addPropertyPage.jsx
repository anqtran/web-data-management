import React, { PropTypes } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AddPropertyForm from '../components/AddPropertyForm.jsx';
import { getFarmItems } from '../helpers/DataPopulation';
import {addProperty} from '../helpers/add';
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
      animals:[],
      crops: [],
      data:[],
      errors: {},
      disabled: false,
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
        commercial:'0',
        owner: 'farmowner'
      }
    };
    // console.log('this.state.data => ',this.state.data);
    this.processForm = this.processForm.bind(this);
    this.changeproperty = this.changeproperty.bind(this);
    this.changeSelectField  = this.changeSelectField.bind(this);
  }

  componentWillMount() {
      var self = this;
      getFarmItems()
      .then(function(items) {
        console.log("Items:" + JSON.stringify(items))
        self.setState( {
          data: items,
          animals: items[0],
          crops: items[1].concat(items[2])
        })
      console.log('items IMPORTANTTTT => ',self.state.data);

      })
      // console.log("data mouted",self.state.data);
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
    const farmItems = this.state.data;
    if(property['propType'] == 'FARM') {
        this.state.disabled = false;
        this.state.crops = farmItems[1].concat(farmItems[2]);
    } else {
        this.state.disabled = true;
        property.animal = '';
      if(property['propType'] == 'GARDEN') {
        this.state.crops = farmItems[1];
      } else {
        this.state.crops = farmItems[2];
      }
    }
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
    var self = this;
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    console.log('this.state.property => ',this.state.property);
    addProperty(this.state.property)
      .then(function(res) {
        console.log('res => ',res);
        if(res.Error) {
          console.log('res.data.errors => ',res.errors);
          self.setState({
          errors: res.errors
       });
        } else {
          console.log('ADD SUCCESSSSSS');
        }
      })
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
        disabled = {this.state.disabled}
        errors={this.state.errors}
        property={this.state.property}
        animals = {this.state.animals}
        crops = {this.state.crops}
      />
    );
  }

}

export default AddPropertyPage;
