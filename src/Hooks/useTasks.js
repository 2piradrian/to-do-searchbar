import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useTasks() {
	const [inProgress, setInProgress] = useState([]);
	const [finished, setFinished] = useState([]);

	const state = useSelector((state) => state.tasks);

	useEffect(() => {
		const tasksInProgress = state.filter((task) => task.status === "inProgress");
		const tasksFinished = state.filter((task) => task.status === "finished");

		setInProgress(tasksInProgress);
		setFinished(tasksFinished);
	}, [state]);

	return { inProgress, finished };
}
