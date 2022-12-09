import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  padding: 70px 0 20px;
`;

export const NoticesWrapper = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-evenly;
`;

type NoticeWrapperProps = {
  imageSize: number
}

export const NoticeWrapper = styled.div<NoticeWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  color: #a9a6a5;
  
  img {
    width: ${props => props.imageSize}px;
  }
`;