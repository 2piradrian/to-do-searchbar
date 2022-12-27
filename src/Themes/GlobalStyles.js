import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Urbanist', sans-serif;
    }
    html, body{       
        overflow-x: hidden;
        font-family: 'Urbanist', sans-serif;
        scroll-behavior: smooth;
    }
`;
