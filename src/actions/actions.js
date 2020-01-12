export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ARCHIVED = "SHOW_ARCHIVED";
export const SHOW_IMPORTANT = "SHOW_IMPORTANT";

export function addNote(title, content) {
	return {
		type: ADD_NOTE,
		title,
		content
	};
}

export function removeNote(id) {
	return { type: REMOVE_NOTE, id: id };
}

// export function showArchived() {
// 	return {
// 		type: SHOW_ARCHIVED,
// 		visibility: SHOW_ARCHIVED
// 	};
// }

// export function showAll() {
// 	return {
// 		type: SHOW_ALL,
// 		visibility: SHOW_ALL
// 	};
// }

export function notesVisible(notesToShow) {
	return {
		type: notesToShow
	};
}
