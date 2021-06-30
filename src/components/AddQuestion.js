import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav.js'
import '../styles/AddQuestion.css'
import { _saveQuestion } from '../_DATA.js'

class AddQuestion extends Component {
	render() {
		return (
			<>
				<Nav />
				<div className='add_question'>
					<div className='q_container'>
						<div className='question color3'>
							<span className='would_you_rather'>
								Would You Rather . . .
							</span>
							<div className='option'>
								A. <input type='text' id='opt1' />
								<span className='opt_text'></span>
							</div>
							<div className='option'>
								B. <input type='text' id='opt2' />
								<span className='opt_text'></span>
							</div>
						</div>
					</div>

					<button
						className='sumbit_btn'
						onClick={() =>
							_saveQuestion({
								optionOneText: document.getElementById('opt1').value,
								optionTwoText: document.getElementById('opt2').value,
								author: this.props.authorId,
							})
						}
					>
						Submit
					</button>
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => ({ authorId: state.currentUserId })

export default connect(mapStateToProps)(AddQuestion)