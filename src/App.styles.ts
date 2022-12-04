import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Comfortaa', sans-serif;
  }
`;

export const Wrapper = styled.div`
  border: 1px solid green;
  max-width: 1280px;
  margin: auto;
`;