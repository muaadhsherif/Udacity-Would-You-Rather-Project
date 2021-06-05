const initState = {
	users: [],
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_INIT_USERS':
			return { ...state, users: action.users }

		case 'x':
			return 'x'

		default:
			return { ...state, users: action.users }
	}
}

export default rootReducer
