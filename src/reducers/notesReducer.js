import { ADD_NOTE, REMOVE_NOTE } from "../actions/actions";

// Only the piece of state needed will be passed down to the reducer
function notesReducer(notes = [], action) {
	switch (action.type) {
		case ADD_NOTE:
			return [
				...notes,
				{
					title: action.title,
					content: action.content
				}
			];

		case REMOVE_NOTE:
			return notes.filter((note, index) => index != action.id);

		default:
			return notes;
	}
}

export default notesReducer;
