import React, { PropTypes } from 'react';
import OwnerManagePropertyForm from '../components/OwnerManagePropertyForm.jsx';
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router'; 
class OwnerManagePropertyPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      disabled: false,
      user: {
        email: '',
        password: ''
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
        commercial:'0',
        owner: 'farmowner'
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeproperty = this.changeproperty.bind(this);
    this.changeSelectField  = this.changeSelectField.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    var self = this;
    event.preventDefault();
    axios.post('/auth/OwnerManageProperty', {
      user : this.state.user
    })
    .then(function (res) {
      // window.location.href="/thankyou"
      console.log('res => ',res);
      if (res.data.Error) {
        console.log('res.data.errors => ',res.data.errors);
        self.setState({
         errors: res.data.errors
        });
      } else {
        //if success
        // TO-DO need to check and route the role
        const user = res.data.user;
        const type = user.UserType;
        const username = user.Username;
        self.setState({redirect:true});
        console.log('self.props => ',self.props);
        if (type == "OWNER") {
        }  
      }
    })
  }

  /**
   * Change the user object.
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
   * Render the component.
   */
  render() {
        return (
      <OwnerManagePropertyForm
        onSubmit={this.processForm}
        selectFieldOnChange ={this.changeSelectField}
        disabled = {this.state.disabled}
        onChange={this.changeproperty}
        errors={this.state.errors}
        user={this.state.user}
        property ={this.state.property}
      />
    );
  }

}

export default OwnerManagePropertyPage;
