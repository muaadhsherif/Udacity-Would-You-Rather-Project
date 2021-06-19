import { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'

class Question extends Component {
	render() {
		return this.props.quesState === 'answered' ? (
			<AnsweredQuestion quesId={this.props.match.params.quesId} />
		) : (
			<div>this is an unanswered question</div>
		)
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
	quesState: state.currentQuestState,
})
export default connect(mapStateToProps)(Question)
