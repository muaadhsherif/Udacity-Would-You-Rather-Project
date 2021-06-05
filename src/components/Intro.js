import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _getUsers } from '../_DATA'

class Intro extends Component {
	render() {
		const users = this.props.users ? (
			<div>test</div>
		) : (
			<div>failed to find</div>
		)

		return <div>{users}</div>
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
