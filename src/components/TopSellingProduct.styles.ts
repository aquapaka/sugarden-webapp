import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 50px 0;
  text-align: center;
  
  .products {
    display: flex;
    gap: 1vw;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  font-weight: 700;
  color: #024b30;
  margin: 5px;
  
  p {
    margin: 10px;
  }
  
  .image {
    height: min(20vw, 250px);
    object-fit: cover;
    border: 1px solid green;
    border-radius: 15px;
  }
  
  .price {
    font-size: 20px;
  }
`;