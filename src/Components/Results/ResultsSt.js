import styled from "styled-components";

export const ResultsContainer = styled.div`
	width: 600px;
	padding: 10px 20px;
	margin-top: -10px;
	border-radius: 0px 0px 12px 12px;
	color: ${(props) => props.theme.contrast};
	background-color: ${(props) => props.theme.tertiaryBackground};
	position: relative;
`;
