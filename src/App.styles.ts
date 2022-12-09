import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  body {
    background: rgb(162,191,181);
    background: linear-gradient(0deg, rgba(162,191,181,1) 0%, rgba(236,242,240,1) 25%, rgba(221,232,228,1) 50%, rgba(236,242,240,1) 75%, rgba(162,191,181,1) 100%);
    margin: 0 10px;
    font-size: 16px;
    overflow-x: hidden;
  }
  
  * {
    font-family: 'Comfortaa', sans-serif;
  }
  
  h1 {
    color: #024b30;
  }
  
  @media(max-width: 550px) {
    body {
      font-size: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
`;