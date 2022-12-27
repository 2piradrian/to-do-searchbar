import { ADD_TASK, CLOSE_MODAL, DELETE_TASK, FINISH_TASK, OPEN_MODAL } from "../Types/types";

export const open_modal = () => ({
	type: OPEN_MODAL,
});

export const close_modal = () => ({
	type: CLOSE_MODAL,
});

export const add_task = (item) => ({
	type: ADD_TASK,
	payload: item,
});

export const delete_task = (item) => ({
	type: DELETE_TASK,
	payload: item,
});

export const finish_task = (item) => ({
	type: FINISH_TASK,
	payload: item,
});
