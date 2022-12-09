import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 80px 0;
  font-weight: 700;
  overflow-y: clip;
`;

export const InfoColumn = styled.div`
  min-width: 22%;
  
  ul {
    list-style: none;
    padding: 10px 0;
  }
  
  li {
    margin: 25px 0;
  }
  
  a {
    text-decoration: none;
    color: #024b30;
  }
`;

export const FloatBottomText = styled.p`
  position: absolute;
  bottom: 0;
  color: #024b30;
`;

export const RightBackgroundImage = styled.img`
  position: absolute;
  top: 60px;
  right: -100px;
  min-width: 400px;
  width: 40%;
  z-index: -5;
  opacity: 0.4;
`;