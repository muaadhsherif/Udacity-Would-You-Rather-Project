import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _getUsers } from '../_DATA'
import '../styles/intro.css'

class Intro extends Component {
	render() {
		const usersUI = this.props.users ? (
			Object.entries(this.props.users).map(([key, val]) => (
				<div className='user' key={key}>
					<img
						className='user_avatar'
						src={val.avatarURL}
						alt={val.name + "profile's photo"}
					/>
					<p>{val.name}</p>
					<button>Login</button>
				</div>
			))
		) : (
			<div className='center'>Loading...</div>
		)

		return <div class='container'>{usersUI}</div>
	}
}

const mapDispatchToProps = (dispatch) => ({
	getInitUsers: _getUsers().then((users) =>
		dispatch({
			type: 'GET_INIT_USERS',
			users,
		}),
	),
})

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
