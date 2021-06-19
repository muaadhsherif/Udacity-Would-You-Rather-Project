import { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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
					<p className='option'>
						A. <span>{ques.optionOne.text}.</span>
					</p>
					<p className='option'>
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
withRouter(AnsweredQuestion)
export default connect(mapStateToProps)(AnsweredQuestion)
