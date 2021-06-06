import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import '../styles/Home.css'

class Home extends Component {
	render() {
		if (!this.props.userId) return <Redirect to='/' />
		return (
			<>
				<nav>
					<NavLink to='/home' activeClassName='selected'>
						Home
					</NavLink>
					<NavLink to='/add' activeClassName='selected'>
						New Question
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
				</nav>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	userId: state.currentUserId,
})

export default connect(mapStateToProps)(Home)
