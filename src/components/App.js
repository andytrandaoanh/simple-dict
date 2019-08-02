import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchAppBar from './menu/appbar';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
				<SearchAppBar />      
			</BrowserRouter>
    	</div>
	)
}


export default App;
