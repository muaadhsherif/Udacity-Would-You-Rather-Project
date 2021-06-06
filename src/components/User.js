import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class User extends Component {
	render() {
		console.log(this.props.userId)
		return (
			<>
				<nav>
					<NavLink to='/'>Logout</NavLink>
					<NavLink to='/add'>New Question</NavLink>
					<NavLink to='/leaderboard'>Leaderboard</NavLink>
				</nav>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	userId: state.currentUserId,
})

export default connect(mapStateToProps)(User)
