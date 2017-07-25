import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Selector from './Selector';
import Results from './Results';

function App () {
	return (
	  <Router>
		  <div className="container">

		  	<Switch>
		  		<Route exact path='/' component={Selector} />
		  		<Route path='/countries' component={Results} />
		  		<Route render={() => <p>Not Found</p>} />
		  	</Switch>
		  	
		  </div> 
	  </Router> 
	)
}

export default App;