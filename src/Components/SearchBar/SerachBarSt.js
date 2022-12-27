import styled from "styled-components";

export const SearchBox = styled.div`
	width: 100%;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 2;
	position: absolute;
	top: 20px;
`;

export const SearchInput = styled.input`
	width: 600px;
	height: 40px;
	padding: 0px 15px;
	outline: none;
	border-radius: 12px;
	border: none;
	text-align: center;
	color: ${(props) => props.theme.contrast};
	background-color: ${(props) => props.theme.tertiaryBackground};
`;
