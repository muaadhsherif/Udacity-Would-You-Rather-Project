import { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/unAnswered.css'

class UnAnsweredQuestion extends Component {
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
					<div className='option'>
						<input type='radio' name='questchoosen' />
						A. <span className='opt_text'>{ques.optionOne.text}.</span>
					</div>
					<div className='option'>
						<input type='radio' name='questchoosen' />
						B. <span className='opt_text'>{ques.optionTwo.text}.</span>
					</div>
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

export default connect(mapStateToProps)(UnAnsweredQuestion)