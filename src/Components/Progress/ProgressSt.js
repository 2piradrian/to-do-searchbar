import styled from "styled-components";

export const ProgressBox = styled.div`
	height: 60px;
	width: 90%;
	padding: 10px 20px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.tertiaryBackground};
`;

export const ProgressContent = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ProgressName = styled.p`
	font-size: 16px;
	font-weight: 500;
`;

export const ProgressContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
`;

export const ProgressBar = styled.div`
	height: 6px;
	min-width: 3%;
	border-radius: 8px;
	background: linear-gradient(to right, #f12711, #f5af19);
`;
