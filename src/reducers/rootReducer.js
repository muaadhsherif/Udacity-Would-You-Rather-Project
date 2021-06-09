const initState = {
	users: [],
	x: 'waiting',
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'GET_INIT_USERS':
			return { ...state, users: action.users, questions: null }

		case 'LOGIN':
			return { ...state, currentUserId: action.currentUserId }

		case 'GET_QUESTIONS':
			return { ...state, questions: action.questions }

		case 'QUESSTATE':
			return { ...state, currentQuestState: action.currentQuesState }

		default:
			return { ...state }
	}
}

export default rootReducer
