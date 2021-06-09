import { Component } from 'react'
import { connect } from 'react-redux'

class AnsweredQuestion extends Component {
	render() {
		return <div>this is an answered question</div>
	}
}
const mapStateToProps = (state) => ({
	userId: state.currentUserId,
	questions: state.questions,
})

export default connect(mapStateToProps)(AnsweredQuestion)
