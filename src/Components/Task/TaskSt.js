import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const TaskBox = styled.div`
	height: 60px;
	width: 90%;
	padding: 10px 20px;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.tertiaryBackground};
`;

export const TaskContent = styled.div`
	height: 100%;
	width: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const TaskName = styled.p`
	font-size: 16px;
	font-weight: 500;
	text-align: start;
`;

export const TaskDate = styled.p`
	font-size: 12px;
	text-align: start;
`;

export const TrashIcon = styled(FaTrashAlt)`
	font-size: 18px;
	cursor: pointer;
`;
