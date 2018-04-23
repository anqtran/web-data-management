import React, { PropTypes } from 'react'; import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const ViewVisitorsListForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
   <Card className="container">

        Welcome ${user}


      <div className="button-line">
          <RaisedButton label="View Visitor List" onClick={this.handleOpenViewVisiterList} />
         <Dialog
          title="All Visitors in System"
          actions={actionsViewVisterList}
          modal={false}
          open={this.state.openViewVisiterList}
          onRequestClose={this.handleCloseViewVisiterList}
        >

        </Dialog>

      </div>

      <div className="button-line">
          <RaisedButton label="View History" onClick={this.handleOpenViewHistory} />

         <Dialog
          title="My Visit History"
          actions={actionsViewHistory}
          modal={false}
          open={this.state.openViewHistory}
          onRequestClose={this.handleCloseViewHistory}
        >

          <VisitorLogHistoryTable
            onAddSelectedViewHistory={ this.onAddSelectedViewHistory }
            data={ this.state.data}
          />
          </Dialog>

      </div>

  </Card>
);

ViewVisitorsListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ViewVisitorsListForm;
