import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Unanswered extends Component {
	render() {
		return Object.entries(this.props.questions)
			.filter(
				([id, ques]) =>
					!(
						ques.optionOne.votes.includes(this.props.userId) ||
						ques.optionTwo.votes.includes(this.props.userId)
					),
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
					<div className='question color3'>
						<span className='would_you_rather'>
							Would You Rather . . .
						</span>
						<div className='option'>
							A. <span className='opt_text'>{ques.optionOne.text}.</span>
						</div>
						<div className='option'>
							B. <span className='opt_text'>{ques.optionTwo.text}.</span>
						</div>
						<Link
							onClick={() => this.props.sendQuesState('unanswered')}
							to={'/questions/' + id}
						>
							Vote Now
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

export default connect(mapStateToProps, mapDispatchToProps)(Unanswered)
