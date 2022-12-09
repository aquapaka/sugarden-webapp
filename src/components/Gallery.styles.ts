import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  color: #a9a6a5;
`;

export const ImageRow = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 20px 0;

  img {
    object-fit: cover;
    width: 100%;
    max-width: 23%;
    height: 200px;
    border-radius: 20px;
    filter: drop-shadow(2px -1px 4px rgba(0, 0, 0, 0.3));
  }
  
  @media(max-width: 512px) {
    flex-direction: column;

    img {
      max-width: 100%;
      height: 300px;
    }
  }
`;