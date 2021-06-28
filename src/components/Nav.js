import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
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
					onClick={() => this.logOut}
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
