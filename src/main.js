import store from "./store/store";
import { addNote, removeNote, notesVisible } from "./actions/actions";

// console.log("Before:", store.getState());
// store.dispatch(addNote("One", "One content"));
// store.dispatch(addNote("Two", "Two content"));
// store.dispatch(addNote("Three", "Three content"));
// console.log("After:", store.getState());
store.subscribe(() => {
	renderNotes();
});

// ------ HTML references ------
let notesUList = document.getElementById("notes");
let addNoteForm = document.getElementById("add-note");
const notesToDisplay = document.getElementById("visibility");
let addNoteTitle = addNoteForm["title"];
let addNoteContent = addNoteForm["content"];

// ------ Redux ------
function deleteNote(index) {
	// console.log(index);
	store.dispatch(removeNote(index));
}

function renderNotes() {
	let notes = store.getState().notes;

	notesUList.innerHTML = "";
	notes.map((note, index) => {
		let noteItem = `
      <li>
      <b>${note.title}</b>
      <button data-id="${index}">x</button>
      <br />
      <span>${note.content}</span>
      </li>
    `;
		notesUList.innerHTML += noteItem;
	});

	setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener("submit", e => {
	e.preventDefault();
	const title = addNoteTitle.value;
	const content = addNoteContent.value;
	store.dispatch(addNote(title, content));
});

notesToDisplay.addEventListener("input", e => {
	e.preventDefault();
	store.dispatch(notesVisible(e.target.value));
});

function setDeleteNoteButtonsEventListeners() {
	let buttons = document.querySelectorAll("ul#notes li button");

	for (let button of buttons) {
		button.addEventListener("click", () => {
			deleteNote(button.dataset.id);
		});
	}
}

// ------ Render the initial Notes ------
renderNotes();
