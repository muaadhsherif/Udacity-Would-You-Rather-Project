const initState = {
	users: [],
	currentUser: null,
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_INIT_USERS':
			return { ...state, users: action.users }

		case 'LOGIN':
			return { ...state, currentUserId: action.currentUserId }

		default:
			return { ...state, users: action.users }
	}
}

export default rootReducer
