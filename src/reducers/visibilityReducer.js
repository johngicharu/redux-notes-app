import { SHOW_ALL, SHOW_ARCHIVED, SHOW_IMPORTANT } from "../actions/actions";

function visibilityFilter(visibility = SHOW_ALL, action) {
	switch (action.type) {
		case SHOW_ALL:
			return SHOW_ALL;

		case SHOW_ARCHIVED:
			return SHOW_ARCHIVED;

		case SHOW_IMPORTANT:
			return SHOW_IMPORTANT;

		default:
			return visibility;
	}
}

export default visibilityFilter;
