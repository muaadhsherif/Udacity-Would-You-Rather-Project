import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
	render() {
		return (
			<nav>
				<div className='current_user'>
					<img
						className='user_avatar'
						src={this.props.userAvatarURL}
						alt={'Current User: ' + this.props.userName}
					/>
					<span>{this.props.userName}</span>
				</div>
				<NavLink to='/home' activeClassName='selected'>
					Home
				</NavLink>
				<NavLink to='/leaderboard' activeClassName='selected'>
					Leaderboard
				</NavLink>
				<NavLink
					exact
					to='/'
					activeClassName='selected'
					onClick={() => {
						localStorage.lastLocation = ''
					}}
				>
					Log Out
				</NavLink>
				<NavLink to='/add' activeClassName='selected' className='newQues'>
					<span className='plus'>+</span>
					<span>New Question</span>
				</NavLink>
			</nav>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userName: state.users[state.currentUserId].name,
		userAvatarURL: state.users[state.currentUserId].avatarURL,
	}
}

export default connect(mapStateToProps)(Nav)
