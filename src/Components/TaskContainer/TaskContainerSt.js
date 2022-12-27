import styled from "styled-components";

export const Container = styled.div`
	height: 500px;
	width: 370px;
	margin: 10px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.secondaryBackground};
`;
