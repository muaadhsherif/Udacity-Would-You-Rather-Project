import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/Answered.css'

class Answered extends Component {
	render() {
		return Object.entries(this.props.questions)
			.filter(
				([id, ques]) =>
					ques.optionOne.votes.includes(this.props.userId) ||
					ques.optionTwo.votes.includes(this.props.userId),
			)
			.map(([id, ques]) => (
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
						<Link
							onClick={() => this.props.sendQuesState('answered')}
							to={'/questions/' + id}
						>
							View Vote
						</Link>
					</div>
				</div>
			))
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
	users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
	sendQuesState: (currentQuesState) =>
		dispatch({
			type: 'QUESSTATE',
			currentQuesState,
		}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Answered)
