import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/App.css'
import Intro from './Intro'
import User from './User'

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path='/' component={Intro} />
				<Route exact path='/user' component={User} />
			</BrowserRouter>
		)
	}
}

/* 
Intro
get users from db

*/
