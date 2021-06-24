import { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Answered.css'

class AnsweredQuestion extends Component {
	render() {
		const ques = this.props.questions[this.props.quesId]
		return (
			<div className='q_container'>
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
					<span className='would_you_rather'>Would You Rather . . .</span>
					<p
						className='option'
						data-choosed={
							ques.optionOne.votes.includes(this.props.userId) && 'yes'
						}
					>
						A. <span>{ques.optionOne.text}.</span>
					</p>
					<p
						className='option'
						data-choosed={
							ques.optionTwo.votes.includes(this.props.userId) && 'yes'
						}
					>
						B. <span>{ques.optionTwo.text}.</span>
					</p>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
	users: state.users,
})

export default connect(mapStateToProps)(AnsweredQuestion)

/* Todo:
Here: 1.add the pull percentage next to each option
2. add the navbar here as well.
3. make the current user shown above (everywhere)

4.edit the unanswered q
*/
