import { getNewId, getTaskDay, saveLocalStorage, sortTasks } from "../Actions/utils";
import { ADD_TASK, DELETE_TASK, FINISH_TASK } from "../Types/types";

const taskList = JSON.parse(localStorage.getItem("taskList")) || [];

export const tasksReducer = (state = taskList, action) => {
	const { payload, type } = action;
	switch (type) {
		case ADD_TASK:
			const item = { ...payload, id: getNewId(), day: getTaskDay() };
			state = [...state, item].sort(sortTasks);
			saveLocalStorage("taskList", state);
			return state;
		case FINISH_TASK:
			console.log(payload);
			state = state.filter((item) => item.id !== payload.id);
			state = [...state, { ...payload, status: "finished" }];
			saveLocalStorage("taskList", state);
			console.log(state);
			return state;
		case DELETE_TASK:
			state = state.filter((item) => item.id !== payload.id);
			saveLocalStorage("taskList", state);
			return state;
		default:
			return state;
	}
};
