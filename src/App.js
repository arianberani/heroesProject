import React from 'react';
import './App.scss';
import './components/Navbar'
import Navbar from './components/Navbar';
import Language from './components/Language';
import Rooms from './components/Rooms';
import Moreinfo from './components/Moreinfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

function App() {
	return ( <Router >
		<div className = "App" >
		<div className = "backimg" >
		<div className = "layer" >
		<Language />
		<Navbar />
		</div> 
		</div > 
		<Switch >
		<Route exact path = "/" >
		<Rooms />
		</Route> <Route path = "/heros/:slug"
		component = {
			Moreinfo
		}/> </Switch > 
		</div> </Router >
	);
}

export default App;