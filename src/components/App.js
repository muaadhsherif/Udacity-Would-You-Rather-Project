import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import Intro from './Intro'
import Home from './Home'
import NotFound from './NotFound'

export default class App extends Component {
	render() {
		//console.log(this.props.currentUser)
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Intro} />
					<Route exact path='/home' component={Home} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}
}
/* 
Intro
get users from db

Home
Questions: answered, not answered
*/
