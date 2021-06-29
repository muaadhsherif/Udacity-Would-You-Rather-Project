import { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/UnansweredQuestion.css'
import { _saveQuestionAnswer } from '../_DATA'

class UnAnsweredQuestion extends Component {
	render() {
		let choosenOptionId = 'optionOne'
		const ques = this.props.questions[this.props.quesId]
		return (
			<div className='unAnsweredQ'>
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
						<span className='would_you_rather'>
							Would You Rather . . .
						</span>
						<div className='option'>
							<input
								defaultChecked
								type='radio'
								name='questchoosen'
								onClick={(e) =>
									(choosenOptionId =
										e.target.attributes['data-opt-id'].value)
								}
								data-opt-id='optionOne'
							/>
							A. <span className='opt_text'>{ques.optionOne.text}.</span>
						</div>
						<div className='option'>
							<input
								type='radio'
								name='questchoosen'
								onClick={(e) =>
									(choosenOptionId =
										e.target.attributes['data-opt-id'].value)
								}
								data-opt-id='optionTwo'
							/>
							B. <span className='opt_text'>{ques.optionTwo.text}.</span>
						</div>
					</div>
				</div>
				{
					<button
						className='sumbit_btn'
						onClick={() => {
							_saveQuestionAnswer(
								this.props.userId,
								this.props.quesId,
								choosenOptionId,
							)
							window.history.go(-1)
						}}
					>
						Submit
					</button>
				}
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
