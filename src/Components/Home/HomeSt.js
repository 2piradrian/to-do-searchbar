import styled from "styled-components";

export const TitleContainer = styled.div`
	height: 20%;
	width: 100%;
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h2`
	font-size: 24px;
	color: ${(props) => props.theme.contrast};
`;

export const AddButton = styled.button`
	height: 40px;
	width: 40px;
	border: none;
	border-radius: 50%;
	font-size: 22px;
	font-weight: 700;
	cursor: pointer;
	color: ${(props) => props.theme.contrast};
	background-color: ${(props) => props.theme.tertiaryBackground};
`;
