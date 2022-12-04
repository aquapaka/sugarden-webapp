import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
  img {
    width: 30vw;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .small-text {
    color: #024b30;
    font-size: clamp(0px, 3vw, 1000px);
    font-weight: 700;
  }
    
  .big-text {
    color: #024b30;
    font-size: clamp(0px, 6vw, 1000px);
    font-weight: 700;
  }
  
  .info p {
    color: #a9a6a5;
  }
`;