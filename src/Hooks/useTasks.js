import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useTasks() {
	const [inProgress, setInProgress] = useState([]);
	const [finished, setFinished] = useState([]);
	const [types, setTypes] = useState([]);

	const state = useSelector((state) => state.tasks);

	const getProgress = () => {
		const values = state.map((item) => item.category);
		const dataArr = new Set(values);

		const counter = [...dataArr].map((i) => {
			const number = state.filter((j) => j.category === i);
			const finish = state.filter((j) => j.category === i && j.status === "finished");

			return { name: i, quantity: number.length, finished: finish.length };
		});

		return counter;
	};

	useEffect(() => {
		const tasksInProgress = state.filter((task) => task.status === "inProgress");
		const tasksFinished = state.filter((task) => task.status === "finished");

		setInProgress(tasksInProgress);
		setFinished(tasksFinished);
		setTypes(getProgress());
	}, [state]);

	return { inProgress, finished, types };
}
