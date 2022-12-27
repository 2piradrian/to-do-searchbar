import styled from "styled-components";

export const Main = styled.main`
	height: 100vh;
	max-height: 100vh;
	width: 100%;
	color: ${(props) => props.theme.contrast};
	background-color: ${(props) => props.theme.background};
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 1000px) {
		height: auto;
		max-height: none;
		justify-content: start;
	}
`;
