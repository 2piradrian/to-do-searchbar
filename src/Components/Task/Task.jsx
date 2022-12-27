import React from "react";
import { useDispatch } from "react-redux";
import { delete_task, finish_task } from "../../Redux/Actions/creators";
import { ReadyIcon, TaskBox, TaskContent, TaskDate, TaskName, TrashIcon } from "./TaskSt";

function Task(props) {
	const { name, day, category, status } = props;
	const dispatch = useDispatch();
	return (
		<TaskBox>
			<TaskContent>
				<TaskName>{name}</TaskName>
				<TaskDate>
					{day}, {category}
				</TaskDate>
			</TaskContent>
			{status === "inProgress" ? (
				<ReadyIcon onClick={() => dispatch(finish_task(props))} />
			) : (
				<TrashIcon onClick={() => dispatch(delete_task(props))} />
			)}
		</TaskBox>
	);
}

export default Task;
