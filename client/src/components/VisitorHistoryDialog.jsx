import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import VisitorVisitHistoryTable from './VisitorVisitHistoryTable';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class VisitorHistoryDialog extends React.Component {
  state = {
    open: false,
  };

  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [

      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        {/* <RaisedButton label="View Visit History" onClick={this.handleOpen} /> */}
        <Dialog
          title="Property Details"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <VisitorVisitHistoryTable 
        />
        </Dialog>
      </div>
    );
  }
}


this.state = {
    open: true
  };


const VisitorHistoryDialog = ({
    onViewProperty,
    onAddSelectedRow,
    dialogContent,
    // onSubmit,
    // onChange,
    errors,
    data
  }) => (
    
    <Card className="container" expandable = {true} >
      {/* <form action="/" onSubmit = {onSubmit}> */}
        {/* <h2 className="card-heading">Your Visit History</h2> */}
        {errors.summary && <p className="error-message">{errors.summary}</p>}
      <Dialog
          title="View Visit History"
          actions={dialogContent}
          modal={false}
          open={this.state.open}
          onRequestClose={dialogContent.handleClose}
        >
        My Visit History
        
      </Dialog>
    </Card>
  );
  
  VisitorHistoryDialog.propTypes = {
    onViewProperty: PropTypes.func.isRequired,
    onAddSelectedRow: PropTypes.func,
    dialogContent,
    // onSubmit: PropTypes.func.isRequired,
    // onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
  };
  
  export default VisitorHistoryDialog;
  