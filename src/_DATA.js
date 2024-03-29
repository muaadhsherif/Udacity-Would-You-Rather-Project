let users = {
	sarahedo: {
		id: 'sarahedo',
		name: 'Sarah Edo',
		avatarURL:
			'https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png',
		answers: {
			'8xf0y6ziyjabvozdd253nd': 'optionOne',
			'6ni6ok3ym7mf1p33lnez': 'optionTwo',
			am8ehyc8byjqgar0jgpub9: 'optionTwo',
			loxhs1bqm25b708cmbf3g: 'optionTwo',
		},
		questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
	},
	tylermcginnis: {
		id: 'tylermcginnis',
		name: 'Tyler McGinnis',
		avatarURL:
			'https://cdn-icons-png.flaticon.com/512/149/149071.png',
		answers: {
			vthrdm985a262al8qx3do: 'optionOne',
			xj352vofupe1dqz9emx13r: 'optionTwo',
		},
		questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
	},
	johndoe: {
		id: 'johndoe',
		name: 'John Doe',
		avatarURL:
			'https://thumbs.dreamstime.com/b/unknown-person-icon-anonymous-pictogram-isolated-white-background-vector-sign-illustration-146954608.jpg',
		answers: {
			xj352vofupe1dqz9emx13r: 'optionOne',
			vthrdm985a262al8qx3do: 'optionTwo',
			'6ni6ok3ym7mf1p33lnez': 'optionTwo',
		},
		questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
	},
}

let questions = {
	'8xf0y6ziyjabvozdd253nd': {
		id: '8xf0y6ziyjabvozdd253nd',
		authorId: 'sarahedo',
		timestamp: 1467166872634,
		optionOne: {
			votes: ['sarahedo'],
			text: 'have horrible short term memory',
		},
		optionTwo: {
			votes: [],
			text: 'have horrible long term memory',
		},
	},
	'6ni6ok3ym7mf1p33lnez': {
		id: '6ni6ok3ym7mf1p33lnez',
		authorId: 'johndoe',
		timestamp: 1468479767190,
		optionOne: {
			votes: [],
			text: 'become a superhero',
		},
		optionTwo: {
			votes: ['johndoe', 'sarahedo'],
			text: 'become a supervillain',
		},
	},
	loxhs1bqm25b708cmbf3g: {
		id: 'loxhs1bqm25b708cmbf3g',
		authorId: 'tylermcginnis',
		timestamp: 1482579767190,
		optionOne: {
			votes: [],
			text: 'be a front-end developer',
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'be a back-end developer',
		},
	},

	am8ehyc8byjqgar0jgpub9: {
		id: 'am8ehyc8byjqgar0jgpub9',
		authorId: 'sarahedo',
		timestamp: 1488579767190,
		optionOne: {
			votes: [],
			text: 'be telekinetic',
		},
		optionTwo: {
			votes: ['sarahedo'],
			text: 'be telepathic',
		},
	},
	vthrdm985a262al8qx3do: {
		id: 'vthrdm985a262al8qx3do',
		authorId: 'tylermcginnis',
		timestamp: 1489579767190,
		optionOne: {
			votes: ['tylermcginnis'],
			text: 'find $50 yourself',
		},
		optionTwo: {
			votes: ['johndoe'],
			text: 'have your best friend find $500',
		},
	},
	xj352vofupe1dqz9emx13r: {
		id: 'xj352vofupe1dqz9emx13r',
		authorId: 'johndoe',
		timestamp: 1493579767190,
		optionOne: {
			votes: ['johndoe'],
			text: 'write JavaScript',
		},
		optionTwo: {
			votes: ['tylermcginnis'],
			text: 'write Swift',
		},
	},
}

function generateUID() {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	)
}

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000)
	})
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...questions }), 1000)
	})
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		authorId: author,
		optionOne: {
			votes: [],
			text: optionOneText,
		},
		optionTwo: {
			votes: [],
			text: optionTwoText,
		},
	}
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const authedUser = question.author
		const formattedQuestion = formatQuestion(question)

		setTimeout(() => {
			questions = {
				[formattedQuestion.id]: formattedQuestion,
				...questions,
			}

			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([
						formattedQuestion.id,
					]),
				},
			}

			res(formattedQuestion)
		}, 1000)
	})
}

export function _saveQuestionAnswer(authedUser, qid, answer) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer,
					},
				},
			}

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser]),
					},
				},
			}

			res()
		}, 500)
	})
}
