import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _getUsers } from '../_DATA'
import '../styles/Intro.css'
import { Link } from 'react-router-dom'

class Intro extends Component {
	render() {
		const usersUI = this.props.users ? (
			Object.entries(this.props.users).map(([id, user]) => (
				<div className='user color2 center' key={id}>
					<img
						className='user_avatar color4'
						src={user.avatarURL}
						alt={user.name + "profile's photo"}
					/>
					<p>{user.name}</p>
					<Link to='./home'>
						<button
							onClick={() => this.props.logIn(id)}
							className='color3'
						>
							Log In
						</button>
					</Link>
				</div>
			))
		) : (
			<h1 className='loading'>Loading...{console.log('loading')}</h1>
		)

		return (
			<div>
				<h1>Please Log In</h1>
				<div className='container'>{usersUI}</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	getInitUsers: _getUsers().then((users) =>
		dispatch({
			type: 'GET_INIT_USERS',
			users,
		}),
	),
	logIn: (currentUserId) =>
		dispatch({
			type: 'LOGIN',
			currentUserId,
		}),
})

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
