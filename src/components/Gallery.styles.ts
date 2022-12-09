import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  color: #a9a6a5;
`;

export const ImageRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  img {
    object-fit: cover;
    width: 100%;
    max-width: 23%;
    height: 220px;
    border-radius: 20px;
  }
  
  @media(max-width: 512px) {
    flex-direction: column;

    img {
      max-width: 100%;
    }
  }
`;