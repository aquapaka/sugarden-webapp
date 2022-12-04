import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  body {
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,248,247,1) 75%, rgba(179,201,193,1) 100%, rgba(2,75,48,1) 100%);
  }
  
  * {
    font-family: 'Comfortaa', sans-serif;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;