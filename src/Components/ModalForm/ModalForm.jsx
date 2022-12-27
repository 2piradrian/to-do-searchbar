import React from "react";
import {
	Button,
	Close,
	Input,
	Label,
	LabelDivisor,
	ModalContainer,
	ModalTitle,
	TaskForm,
} from "./ModalFormSt";
import { useDispatch, useSelector } from "react-redux";
import { add_task, close_modal } from "../../Redux/Actions/creators";
import toast, { Toaster } from "react-hot-toast";

function ModalForm() {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => state.tasks);

	const notify = (message) => toast(message);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const task = Object.fromEntries(formData);

		if (!task.name || !task.category) {
			notify("❌ Debes llenar todos los campos.");
			return;
		}

		if (tasks.some((item) => item.name === task.name)) {
			notify("❌ Esa tarea ya existe.");
			return;
		}

		notify("✅ Tarea añadida correctamente.");
		dispatch(add_task({ ...task, status: "inProgress" }));
		dispatch(close_modal());
	};

	return (
		<ModalContainer>
			<TaskForm onSubmit={(e) => handleSubmit(e)}>
				<ModalTitle>Add a task 😎</ModalTitle>
				<LabelDivisor>
					<Label htmlFor="name">Task name ✏️</Label>
					<Input type="text" name="name" placeholder="Circuito electrico" />
				</LabelDivisor>
				<LabelDivisor>
					<Label htmlFor="category">Task category 📚</Label>
					<Input type="text" name="category" placeholder="Ingeniería" />
				</LabelDivisor>
				<Button>Add</Button>
				<Close onClick={() => dispatch(close_modal())} />
			</TaskForm>
			<Toaster />
		</ModalContainer>
	);
}

export default ModalForm;
