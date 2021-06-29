import { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/AnsweredQuestion.css'
import Percentage from './Percentage'

class AnsweredQuestion extends Component {
	render() {
		const ques = this.props.questions[this.props.quesId]
		const opt1VotesNum = ques.optionOne.votes.length
		const opt2VotesNum = ques.optionTwo.votes.length
		const totalVotes = opt1VotesNum + opt2VotesNum
		const opt1VotesPerc = (opt1VotesNum / totalVotes) * 100
		const opt2VotesPerc = (opt2VotesNum / totalVotes) * 100
		const progressPerc = document.getElementsByClassName(
			'progress_percentage',
		)

		setTimeout(() => {
			if (progressPerc.length)
				progressPerc[0].style.animationPlayState = 'paused'
		}, opt1VotesPerc * 35)

		setTimeout(() => {
			if (progressPerc.length)
				progressPerc[1].style.animationPlayState = 'paused'
		}, opt2VotesPerc * 35)

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
					<div
						className='option'
						data-choosed={
							ques.optionOne.votes.includes(this.props.userId) && 'yes'
						}
					>
						<div>
							A. <span className='opt_text'>{ques.optionOne.text}.</span>
						</div>
						<div className='progress_info'>
							<span className='progress_percentage'>
								<span className='percentage_number'>
									<Percentage max={opt1VotesPerc} />%
								</span>
							</span>
							<div className='number'>
								<span>{opt1VotesNum}</span>
								<span>___</span> <span>{totalVotes + ' '}</span>
							</div>
						</div>
					</div>
					<div
						className='option'
						data-choosed={
							ques.optionTwo.votes.includes(this.props.userId) && 'yes'
						}
					>
						B. <span className='opt_text'>{ques.optionTwo.text}.</span>
						<div className='progress_info'>
							<span className='progress_percentage'>
								<span className='percentage_number'>
									<Percentage max={opt2VotesPerc} />%
								</span>
							</span>
							<div className='number'>
								<span>{opt2VotesNum}</span>
								<span>___</span> <span>{totalVotes + ' '}</span>
							</div>
						</div>
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

export default connect(mapStateToProps)(AnsweredQuestion)

/* Todo:
Here: 1.add the pull percentage next to each option [Done]
2. add the navbar here as well. [Done]
3. make the current user shown above (every where) [Done]

4.edit the unanswered q
5. save the answer user chooses.
6.Refresh page so it automatically will be shown as answered

*Add New Question

*LeaderBoard
*/
