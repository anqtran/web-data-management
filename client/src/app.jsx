import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import routes from './routes';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AddPropertyPage from './containers/AddPropertyPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import { render } from 'react-dom'


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

// console.log('routes => ',routes);
render((
  	
  	<BrowserRouter>    
  		<MuiThemeProvider muiTheme={getMuiTheme()}>
  			<App/>
  		</MuiThemeProvider>
  	</BrowserRouter>
  
  ), document.getElementById('react-app'));
