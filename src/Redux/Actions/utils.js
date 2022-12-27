export const saveLocalStorage = (key, item) => {
	localStorage.setItem(key, JSON.stringify(item));
};

export const sortTasks = (a, b) => {
	if (a.id > b.id) {
		return -1;
	}
	if (b.id > a.id) {
		return 1;
	}
	return 0;
};

export const getNewId = () => {
	const date = new Date();
	const current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	const current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	const date_time = current_date + " " + current_time;

	return date_time;
};

export const getTaskDay = () => {
	const date = new Date();
	return date.toDateString();
};
