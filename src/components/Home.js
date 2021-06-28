import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _getQuestions } from '../_DATA'
import Answered from './Answered'
import UnAnswered from './Unanswered'
import '../styles/Home.css'
import Nav from './Nav.js'

class Home extends Component {
	state = {
		answered: 'unanswered',
	}

	toggleQues = (e) => {
		document.querySelector('.active').classList.remove('active')
		e.target.classList.add('active')
		this.setState({ answered: e.target.id })
	}

	render() {
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
				{
					<Nav
						userName={this.props.userName}
						userAvatarURL={this.props.userAvatarURL}
					/>
				}
				<div className='toggle_ques'>
					<button
						className='color2 bold'
						id='answered'
						onClick={(e) => this.toggleQues(e)}
					>
						Answered Questions
					</button>
					<button
						className='color2 bold active'
						id='unanswered'
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

const mapStateToProps = (state) => {
	return {
		userId: state.currentUserId,
		questions: state.questions,
		userName: state.users[state.currentUserId].name,
		userAvatarURL: state.users[state.currentUserId].avatarURL,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
