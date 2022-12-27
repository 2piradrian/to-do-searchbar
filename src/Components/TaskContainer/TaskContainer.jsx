import React from "react";
import { Container } from "./TaskContainerSt";

function TaskContainer(props) {
	const { children } = props;
	return <Container>{children}</Container>;
}

export default TaskContainer;
