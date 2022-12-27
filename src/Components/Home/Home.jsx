import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import ScrolleableCard from "../ScrolleableCard/ScrolleableCard";
import Task from "../Task/Task";
import TaskContainer from "../TaskContainer/TaskContainer";
import { AddButton, Title, TitleContainer } from "./HomeSt";
import { useDispatch, useSelector } from "react-redux";
import { open_modal } from "../../Redux/Actions/creators";

function Home() {
	const modal = useSelector((state) => state.modal);
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	return (
		<>
			<TaskContainer>
				<TitleContainer>
					<Title>Today Task</Title>
					<AddButton onClick={() => dispatch(open_modal())}>+</AddButton>
				</TitleContainer>
				<ScrolleableCard>
					{tasks.length > 0 &&
						tasks.map((task) => {
							return <Task {...task} key={task.id} />;
						})}
				</ScrolleableCard>
			</TaskContainer>
			{modal && <ModalForm />}
		</>
	);
}

export default Home;
