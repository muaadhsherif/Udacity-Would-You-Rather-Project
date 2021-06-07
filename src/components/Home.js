import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { _getQuestions } from '../_DATA'
import '../styles/Home.css'

class Home extends Component {
	render() {
		if (!this.props.userId) return <Redirect to='/' />
		const questionsUI = this.props.questions ? (
			Object.entries(this.props.questions).map(([id, ques]) => (
				<div className='q_container' key={id}>
					<div className='author'>
						<img
							className='user_avatar color4'
							src={this.props.users[ques.authorId].avatarURL}
							alt={ques.author + "profile's photo"}
						/>
						<span className='color5'>
							{this.props.users[ques.authorId].name}
						</span>
					</div>
					<div className='question color3 center'>
						Would You Rather . . .
						<p className='bold'>
							<span className='color6'>A. </span>
							{ques.optionOne.text}
						</p>
						<p className='bold'>
							<span className='color6'>B. </span>
							{ques.optionTwo.text}
						</p>
					</div>
				</div>
			))
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
	users: state.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
