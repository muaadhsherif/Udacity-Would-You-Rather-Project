import React, { Component } from 'react'
import Nav from './Nav.js'
import '../styles/AddQuestion.css'

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
								A. <input type='text' />
								<span className='opt_text'></span>
							</div>
							<div className='option'>
								B. <input type='text' />
								<span className='opt_text'></span>
							</div>
						</div>
					</div>

					<button className='sumbit_btn' onClick={() => {}}>
						Submit
					</button>
				</div>
			</>
		)
	}
}

export default AddQuestion
