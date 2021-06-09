import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import '../styles/App.css'
import Intro from './Intro'
import Home from './Home'
import NotFound from './NotFound'
import Question from './Question'

class App extends Component {
	render() {
		//console.log(this.props.currentUser)
		return (
			<BrowserRouter>
				<Route
					render={() => {
						if (!this.props.userId) return <Redirect to='/' />
					}}
				/>
				<Switch>
					<Route exact path='/' component={Intro} />
					<Route exact path='/home' component={Home} />
					<Route exact path='/questions/:questId' component={Question} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		)
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
})

export default connect(mapStateToProps)(App)
/* 
Intro
get users from db

Home
Questions: answered, not answered
*/
