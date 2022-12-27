import { combineReducers } from "redux";
import { modalReducer } from "./Modal";
import { tasksReducer } from "./Tasks";

const reducer = combineReducers({
	modal: modalReducer,
	tasks: tasksReducer,
});

export default reducer;
