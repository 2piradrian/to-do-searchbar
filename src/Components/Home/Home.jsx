import React from "react";
import ModalForm from "../ModalForm/ModalForm";
import ScrolleableCard from "../ScrolleableCard/ScrolleableCard";
import Task from "../Task/Task";
import TaskContainer from "../TaskContainer/TaskContainer";
import { AddButton, Title, TitleContainer } from "./HomeSt";
import { useDispatch, useSelector } from "react-redux";
import { open_modal } from "../../Redux/Actions/creators";
import { useTasks } from "../../Hooks/useTasks";
import Progress from "../Progress/Progress";

function Home() {
	const modal = useSelector((state) => state.modal);
	const tasks = useSelector((state) => state.tasks);
	const dispatch = useDispatch();

	const { inProgress, finished } = useTasks();

	return (
		<>
			<TaskContainer>
				<TitleContainer>
					<Title>My Tasks</Title>
					<AddButton onClick={() => dispatch(open_modal())}>+</AddButton>
				</TitleContainer>
				<ScrolleableCard>
					{inProgress.length > 0 &&
						inProgress.map((task) => {
							return <Task {...task} key={task.id} />;
						})}
				</ScrolleableCard>
			</TaskContainer>
			<TaskContainer>
				<TitleContainer>
					<Title>Finished Tasks</Title>
				</TitleContainer>
				<ScrolleableCard>
					{finished.length > 0 &&
						finished.map((task) => {
							return <Task {...task} key={task.id} />;
						})}
				</ScrolleableCard>
			</TaskContainer>
			<TaskContainer>
				<TitleContainer>
					<Title>Progress</Title>
					<Title>
						{finished.length}/{tasks.length}
					</Title>
				</TitleContainer>
				<ScrolleableCard>
					<Progress />
				</ScrolleableCard>
			</TaskContainer>
			{modal && <ModalForm />}
		</>
	);
}

export default Home;
