import notesReducer from "./notesReducer";
import { combineReducers } from "redux";
import visibilityFilter from "./visibilityReducer";

// const initialState = {
// 	notes: []
// };

const reducers = combineReducers({
	notes: notesReducer,
	visibility: visibilityFilter
});

// function rootReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case ADD_NOTE:
// 			return {
// 				// ...state, // If other state properties exist, they must be copied down and not modified
// 				notes: [
// 					...state.notes,
// 					{
// 						title: action.title,
// 						content: action.content
// 					}
// 				]
// 			};

// 		case REMOVE_NOTE:
// 			return {
// 				notes: state.notes.filter((note, index) => index != action.id)
// 			};

// 		default:
// 			return state;
// 	}
// }

export default reducers;
