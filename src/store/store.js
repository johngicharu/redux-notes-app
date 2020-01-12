import { createStore } from "redux";
import reducers from "../reducers/reducers";
import { SHOW_ALL } from "../actions/actions";

const initialState = {
	notes: [
		{
			title: "Redux App",
			content: "This is like the best redux app ever"
		}
	],
	visibility: SHOW_ALL
};

export default createStore(
	reducers,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
