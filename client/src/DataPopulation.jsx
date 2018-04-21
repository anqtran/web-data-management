import React, {PropTypes} from 'react';
import axios from 'axios';

//get table data for owner dashboard
export function getOwnerProperties() {
 //  console.log('this.state.user => ',this.state.user);
	// axios.get('/populate/getOwnerProperties', {
	// 	user : this.state.user
	// })
// 	.then(function (res) {
//     }
// })
}

export function getFarmItems(Username) {
  axios.get('/populate/getFarmItems', {
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

