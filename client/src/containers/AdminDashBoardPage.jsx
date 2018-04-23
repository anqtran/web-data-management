import React, { PropTypes } from 'react';
import AdminDashBoardForm from '../components/AdminDashBoardForm.jsx';


class AdminDashBoard extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      select: null,
      openViewUserList: false,
      disableLog: false
    };

    // this.processForm = this.processForm.bind(this);
    // this.changeUser = this.changeUser.bind(this);
  }



  handleDeleteUser = () => {
    if (select !== null) {


      this.setState({select: null});
    }
  };

  handleDeleteLogHistory = () => {
    if (selete !== null) {


      this.setState({select: null});
    }
  };

  handleOpenViewUserList = () => {
    this.setState({
      select: null,
      openViewUserList: true
    });

  };

  handleCloseViewUserList = () => {
    this.setState({
      select: null,
      openViewUserList: false
    });

  };


onAddSelectedUser = (row) => {
      console.log(this.state.select === row);
      if (this.state.select === row) {
        this.setState({
          select: null
        });
      } else {
        this.setState({
          select: row
        });
      }
    }
  /**
   * Render the component.
   */
  render() {
    const actionsViewUserList = [
      <FlatButton
        label="Delete Visitor Account"
        primary={true}
        onClick={this.handleDeleteUser}

      />,
      <FlatButton
        label="Delete Log History"
        primary={true}
        onClick={this.handleDeleteLogHistory}
        disable={this.state.disableLog}
      />,
      <FlatButton
        label="Back"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseViewHistory}
      />

    ];


    return (
      <Card className="container">

        Welcome ${user}


      <div className="button-line">
          <RaisedButton
            label="View Visitor List"
            onClick={() => {
              console.log('onClick');
              this.setState({disableLog : true});
              this.handleOpenViewUserList;
            }}
          />
         <Dialog
          title="All Visitors in System"
          actions={actionsViewUserList}
          modal={false}
          open={this.state.openViewUserList}
          onRequestClose={this.handleCloseViewUserList}
        >
          <BootstrapTable data={ this.state.data }
                        selectRow={ {
                          mode: 'radio',
                          bgColor: 'pink',
                          clickToSelect: true,
                          hideSelectColumn: true,
                          onSelect: this.onAddSelectedUser
                        } }
                        search pagination
                        options={ {
                          expandBy: 'column',
                          clearSearch:true
                        } }
                        hover height='100%'

                        version='4'
        >
          <TableHeaderColumn
            dataField='username' isKey={ true }
            dataSort={ true }
            // editable={ false }
            dataAlign='center'
          >
          Username
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='email'
            dataSort={ true }
            // editable={ false }
            dataAlign='center'
          >
          Email
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='visit'
            dataSort={ true }
            dataAlign='center'
          >
          Logged Visit
          </TableHeaderColumn>
        </BootstrapTable>
        </Dialog>

      </div>



      <div className="button-line">
          <RaisedButton
            label="View Owner List"
            onClick={() => {
              console.log('onClick');
              this.setState({disableLog : false});
              this.handleOpenViewUserList;
               }}
          />
         <Dialog
          title="All Visitors in System"
          actions={actionsViewUserList}
          modal={false}
          open={this.state.openViewUserList}
          onRequestClose={this.handleCloseViewUserList}
        >
          <BootstrapTable data={ this.state.data }
                        selectRow={ {
                          mode: 'radio',
                          bgColor: 'pink',
                          clickToSelect: true,
                          hideSelectColumn: true,
                          onSelect: this.onAddSelectedUser
                        } }
                        search pagination
                        options={ {
                          expandBy: 'column',
                          clearSearch:true
                        } }
                        hover height='100%'

                        version='4'
        >
          <TableHeaderColumn
            dataField='username' isKey={ true }
            dataSort={ true }
            // editable={ false }
            dataAlign='center'
          >
          Username
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='email'
            dataSort={ true }
            // editable={ false }
            dataAlign='center'
          >
          Email
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='numProp'
            dataSort={ true }
            dataAlign='center'
          >
          Number of Properties
          </TableHeaderColumn>
        </BootstrapTable>
        </Dialog>

      </div>






  </Card>
    );
  }

}

export default AdminDashBoard;
