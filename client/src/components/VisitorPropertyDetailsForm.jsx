import React, { PropTypes } from 'react'; 
import { Link } from 'react-router';
import { Card, CardText, CardHeader, CardTitle } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';



const VisitorPropertyDetailsForm = ({
  onSubmit,
  onChange,
  errors,
  property
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading"> {property.Name} Details</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      {/*field-line?*/}
      {/*<div className="field-line"> */}
        <CardTitle>Name: </CardTitle>
        <CardTitle>Owner: </CardTitle>
        <CardTitle>Owner Email: </CardTitle>
        <CardTitle>Visits: </CardTitle>
        <CardTitle>Address: </CardTitle>
        <CardTitle>City: </CardTitle>
        <CardTitle>Zip: </CardTitle>
        <CardTitle>Size (acres): </CardTitle>
        <CardTitle>Avg. Rating: </CardTitle>
        <CardTitle>Type: </CardTitle>
        <CardTitle>Public: </CardTitle>
        <CardTitle>Commercial: </CardTitle>
        <CardTitle>ID: </CardTitle>
        <CardTitle>Crops: </CardTitle>
        {/*<cardText>Animals: </CardText>*/}
      {/*</div>*/}

      <div className="button-line">
        <RaisedButton type="logvisit" label="Log Visit" primary 
                      href="./dashboard"/>
      </div>

      <div className="button-line">
        <RaisedButton type="back" label="Back" primary 
                      href="./dashboard"/>
      </div>

    </form>
  </Card>
);

VisitorPropertyDetailsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default VisitorPropertyDetailsForm;


// import React from 'react';
// import Dialog from 'material-ui/Dialog';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';

// /**
//  * Dialog with action buttons. The actions are passed in as an array of React objects,
//  * in this example [FlatButtons](/#/components/flat-button).
//  *
//  * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
//  */
// export default class VisitorPropertyDetailsFormButton extends React.Component {
//   state = {
//     open: false,
//   };

//   handleOpen = () => {
//     this.setState({open: true});
//   };

//   handleClose = () => {
//     this.setState({open: false});
//   };

//   render() {
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onClick={this.handleClose}
//       />,
//       <FlatButton
//         label="Submit"
//         primary={true}
//         keyboardFocused={true}
//         onClick={this.handleClose}
//       />,
//     ];

//     return (
//       <div>
//         <RaisedButton label="Dialog" onClick={this.handleOpen} />
//         <Dialog
//           title="Dialog With Actions"
//           actions={actions}
//           modal={false}
//           open={this.state.open}
//           onRequestClose={this.handleClose}
//         >
//           The actions in this window were passed in as an array of React objects.
//         </Dialog>
//       </div>
//     );
//   }
// }