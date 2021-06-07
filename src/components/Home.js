import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { _getQuestions } from '../_DATA'
import '../styles/Home.css'

class Home extends Component {
	render() {
		if (!this.props.userId) return <Redirect to='/' />
		const questionsUI = this.props.questions ? (
			<div>{console.log(this.props.questions)}</div>
		) : (
			<h1 className='loading'>loading...{}</h1>
		)

		return (
			<>
				<nav>
					<NavLink to='/home' activeClassName='selected'>
						Home
					</NavLink>
					<NavLink to='/add' activeClassName='selected'>
						New Question
					</NavLink>
					<NavLink to='/leaderboard' activeClassName='selected'>
						Leaderboard
					</NavLink>
					<NavLink
						exact
						to='/'
						activeClassName='selected'
						onClick={() => this.logOut}
					>
						Log Out
					</NavLink>
				</nav>
				{questionsUI}
			</>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	getQuestions: _getQuestions().then((questions) =>
		dispatch({
			type: 'GET_QUESTIONS',
			questions,
		}),
	),
})

const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
