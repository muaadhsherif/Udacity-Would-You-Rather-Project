import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { _getQuestions } from '../_DATA'
import Answered from './Answered'
import UnAnswered from './Unanswered'
import '../styles/Home.css'

class Home extends Component {
	state = {
		answered: 'answered',
	}

	toggleQues = (e) => this.setState({ answered: e.target.value })

	render() {
		if (!this.props.userId) return <Redirect to='/' />

		const questionsUI = this.props.questions ? (
			this.state.answered === 'answered' ? (
				<Answered />
			) : (
				this.state.answered === 'unanswered' && <UnAnswered />
			)
		) : (
			<h1 className='loading'>loading...</h1>
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
				<div className='toggle_ques'>
					<button
						className='color2 bold'
						value='answered'
						onClick={(e) => this.toggleQues(e)}
					>
						Answered Questions
					</button>
					<button
						className='color2 bold'
						value='unanswered'
						onClick={(e) => this.toggleQues(e)}
					>
						Unanswered Questions
					</button>
				</div>
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
