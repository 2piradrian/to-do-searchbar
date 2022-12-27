import styled from "styled-components";

export const ProgressBox = styled.div`
	height: 60px;
	width: 90%;
	padding: 10px 20px;
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.tertiaryBackground};
`;

export const ProgressContent = styled.div`
	height: 100%;
	width: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const ProgressName = styled.p`
	font-size: 16px;
	font-weight: 500;
	text-align: start;
`;
