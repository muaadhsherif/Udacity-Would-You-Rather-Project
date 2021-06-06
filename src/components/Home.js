import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/user.css'

class Home extends Component {
	render() {
		console.log(this.props.userId)
		return (
			<>
				<nav>
					<NavLink to='/add'>New Question</NavLink>
					<NavLink to='/leaderboard'>Leaderboard</NavLink>
					<NavLink to='/'>Logout</NavLink>
				</nav>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	userId: state.currentUserId,
})

export default connect(mapStateToProps)(Home)
