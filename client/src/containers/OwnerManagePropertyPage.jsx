import React, { PropTypes } from 'react';
import OwnerManagePropertyForm from '../components/OwnerManagePropertyForm.jsx';
import axios from 'axios';
// import { Redirect } from 'react-router';
// import { Router } from 'react-router';
import { browserHistory } from 'history';
// import { Link } from 'react-router';
import { getPropertyItems } from '../helpers/DataPopulation'; 
import Chip from 'material-ui/Chip';
class OwnerManagePropertyPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      animals:["animals1", "animals2", "animals3"],
      crops: ["crop1", "crop2", "crop3"],
      errors: {},
      disabled: false,
      user: {
        email: '',
        password: ''
      },
    cropsChipData: [],
    animalsChipData: [],
      property: {
        ID: '',
        Name: '',
        Street: '',
        City:'',
        Zip:'',
        Size:'',
        PropertyType: '',
        animal:'',
        crop:'',
        IsPublic:'',
        IsCommercial:'',
        Owner: ''
      }
    };

    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeproperty = this.changeproperty.bind(this);
    this.selectFieldOnChange  = this.selectFieldOnChange.bind(this);
    this.renderCropsChip  = this.renderCropsChip.bind(this);
    this.addItemProperty  = this.addItemProperty.bind(this);
    this.deleteProperty  = this.deleteProperty.bind(this);
    this.saveProperty  = this.saveProperty.bind(this);
  }


componentWillMount() {
      var location = window.location.href;
      var index = location.lastIndexOf('/')
      var id = location.substring(index + 1);
      console.log("My id  = ", id)
      this.state.property.ID = id
      var self = this;
      console.log('this.state.property.ID => ',this.state.property.ID);
      getPropertyItems(this.state.property.ID)
      .then(function(returnItems) {
        let property =  returnItems[1];
        let farmItems = returnItems[0];
        let ItemsName = [];
        var countX = 0
        for (var x of Object.values(returnItems[2])) {
          ItemsName[countX] = {}
          ItemsName[countX]['key'] = countX;
          ItemsName[countX++]['label'] = x.ItemName;
        }
        console.log('ItemsName => ', ItemsName);
        let animals = farmItems[0];
        let crops = [];
        let disabled = false;
      if(property['PropertyType'] == 'FARM') {
          disabled = false;
          crops = farmItems[1].concat(farmItems[2]);
      } else {
          disabled = true;
        if(property['PropertyType'] == 'GARDEN') {
          crops = farmItems[1];
        } else {
          crops = farmItems[2];
        }
      }  
      console.log('property => ',property);
        self.setState( {
          data: farmItems,
          disabled: disabled,
          animals: animals,
          crops: crops,
          property: returnItems[1],
          cropsChipData: ItemsName
        })
        console.log('self.state => ',self.state);
      })
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
    console.log('field => ',field);
    const property = this.state.property;
    property[field] = event.target.value;
        this.setState({
        property
    });
  }

  addItemProperty(e, index, value, item) {
    e.preventDefault();
    console.log(this.state)
    var self = this;
    var has = false;
    for (var x of self.state.cropsChipData) {
        console.log(x);
        if (item == x.label) {
          console.log("has = true")
          has = true;
        }
    }
    if (!has) {
      console.log("got into has")
      var temp = self.state.cropsChipData
      x = Object.keys(temp).length
      console.log("ebore:" + temp)
      temp.push({ 'key' : x, 'label': item })
      console.log("after:" + temp)
      this.setState({
        cropsChipData: temp
      })
    }
  }

 
 deleteProperty(e, index, value) {
    e.preventDefault();
    axios.get(`/populate/deleteProperty/${this.state.property.ID}`);
      var pathArray = window.location.pathname.split( '/' );
      var name = decodeURIComponent(pathArray[4]);
      window.location.replace("http://localhost:3000/dashboard/owner/" +  name);
  }


   saveProperty(e, index, value) {
    e.preventDefault();

  }

  selectFieldOnChange(event, index, value, field) {
    const property = this.state.property;
    console.log('field => ',field);
    property[field] = value;
    console.log('property => ',property);
    console.log('property[field] => ',property[field]);
    const farmItems = this.state.data;
    if(property['PropertyType'] == 'FARM') {
        this.state.disabled = false;
        this.state.crops = farmItems[1].concat(farmItems[2]);
    } else {
        this.state.disabled = true;
        property.animal = '';
      if(property['PropertyType'] == 'GARDEN') {
        this.state.crops = farmItems[1];
      } else {
        this.state.crops = farmItems[2];
      }
    }

    this.setState({
        property : property
      });
    console.log('this.state => ',this.state);
  }




handleRequestDelete(key){
    let chipData = this.state.cropsChipData;
    console.log('chipData => ',chipData);
    const chipToDelete = chipData.map((chip) => chip.key).indexOf(key);
    chipData.splice(chipToDelete, 1);
    this.setState({cropsChipData: chipData});
  };



renderCropsChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }




  /**
   * Render the component.
   */
  render() {
        return (
      <OwnerManagePropertyForm
        animalsChipData = {this.state.animalsChipData}
        cropsChipData = {this.state.cropsChipData}
        animalsChipData = {this.state.animalsChipData}
        onSubmit={this.processForm}
        selectFieldOnChange ={this.selectFieldOnChange}
        disabled = {this.state.disabled}
        onChange={this.changeproperty}
        errors={this.state.errors}
        user={this.state.user}
        property ={this.state.property}
        styles = {this.styles}
        renderCropsChip = {this.renderCropsChip}
        animals = {this.state.animals}
        crops = {this.state.crops}
        addItemProperty = {this.addItemProperty}
        deleteProperty = {this.deleteProperty}
        saveProperty = {this.saveProperty}
      />
    );
  }

}

export default OwnerManagePropertyPage;
