import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 80px 0;
  text-align: center;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 0;
  justify-content: space-between;
`;

export const ProductWrapper = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 32%;
  font-weight: 700;
  color: #024b30;
  margin-top: 20px;
  transition: transform 0.1s ease-out;
  
  p {
    margin: 12px;
  }
  
  .price {
    font-size: 120%;
    margin: 0;
  }
  
  :hover {
    transform: scale(1.08);
  }
  
  :active {
    transform: scale(0.96);
  }
`;

export const ImageWrapper = styled.div`
  height: min(20vw, 250px);
  background-color: #024b30;
  border-radius: 20px;
  overflow: hidden;
  filter: drop-shadow(2px -1px 4px rgba(0, 0, 0, 0.3));
  
  img {
    width: 40%;
    filter: drop-shadow(2px -1px 4px rgba(0, 0, 0, 0.6));
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;