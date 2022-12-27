import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ModalContainer = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TaskForm = styled.form`
	height: 75%;
	width: 65%;
	min-width: 400px;
	border-radius: 12px;
	padding: 50px;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.secondaryBackground};
	border: 1px solid ${(props) => props.theme.contrast};
`;

export const ModalTitle = styled.h2`
	font-size: 28px;
`;

export const LabelDivisor = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Label = styled.label`
	font-size: 18px;
	margin-bottom: 5px;
`;

export const Input = styled.input`
	width: 100%;
	height: 30px;
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 10px;
`;

export const Button = styled.button`
	width: 100%;
	max-width: 400px;
	height: 50px;
	border: none;
	border-radius: 12px;
	font-size: 20px;
	cursor: pointer;
	color: ${(props) => props.theme.secondaryBackground};
	background-color: ${(props) => props.theme.tertiary};
`;

export const Close = styled(AiOutlineClose)`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 28px;
	cursor: pointer;
`;
