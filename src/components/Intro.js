import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _getUsers } from '../_DATA'
import '../styles/intro.css'
import { Link } from 'react-router-dom'

class Intro extends Component {
	render() {
		const usersUI = this.props.users ? (
			Object.entries(this.props.users).map(([id, user]) => (
				<div className='user color2' key={id}>
					<img
						className='user_avatar color4'
						src={user.avatarURL}
						alt={user.name + "profile's photo"}
					/>
					<p>{user.name}</p>
					<Link to='./user'>
						<button
							onClick={() => this.props.login(id)}
							className='color3'
						>
							Login
						</button>
					</Link>
				</div>
			))
		) : (
			<div className='center'>Loading...</div>
		)

		return <div className='container'>{usersUI}</div>
	}
}

const mapDispatchToProps = (dispatch) => ({
	getInitUsers: _getUsers().then((users) =>
		dispatch({
			type: 'GET_INIT_USERS',
			users,
		}),
	),
	login: (currentUserId) =>
		dispatch({
			type: 'LOGIN',
			currentUserId,
		}),
})

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
