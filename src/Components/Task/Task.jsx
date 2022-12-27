import React from "react";
import { useDispatch } from "react-redux";
import { delete_task } from "../../Redux/Actions/creators";
import { TaskBox, TaskContent, TaskDate, TaskName, TrashIcon } from "./TaskSt";

function Task(props) {
	const { name, id, day, snapId, category } = props;
	const dispatch = useDispatch();
	return (
		<TaskBox>
			<TaskContent>
				<TaskName>{name}</TaskName>
				<TaskDate>
					{day}, {category}
				</TaskDate>
			</TaskContent>
			{}
			<TrashIcon onClick={() => dispatch(delete_task({ id, snapId }))} />
		</TaskBox>
	);
}

export default Task;
