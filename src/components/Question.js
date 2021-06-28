import { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import UnAnsweredQuestion from './UnAnsweredQuestion'
import Nav from './Nav.js'
class Question extends Component {
	render() {
		return this.props.quesState === 'answered' ? (
			<>
				<Nav />
				<AnsweredQuestion quesId={this.props.match.params.quesId} />
			</>
		) : (
			<>
				<Nav />
				<UnAnsweredQuestion quesId={this.props.match.params.quesId} />
			</>
		)
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
	quesState: state.currentQuestState,
})
export default connect(mapStateToProps)(Question)
