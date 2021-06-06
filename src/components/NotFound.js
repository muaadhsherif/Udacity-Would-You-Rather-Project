import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<h2>404 - Page Not Found!</h2>
				<h1>
					<Link to='/'>Go Home</Link>
				</h1>
			</div>
		)
	}
}
