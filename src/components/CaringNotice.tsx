import React from "react";
import {NoticesWrapper, NoticeWrapper, Wrapper} from "./CaringNotice.styles";

import water from "../assets/icons/water.png";
import temperature from "../assets/icons/temperature.png";
import light from "../assets/icons/light.png";

const CaringNotice = () => {
  return (
    <Wrapper>
      <h2>Mức tối thiểu các loại sen đá</h2>
      <NoticesWrapper>
        <Notice imageUrl={water} text="2-3 Lần/Tuần"/>
        <Notice imageUrl={temperature} text="Không quá 35°C"/>
        <Notice imageUrl={light} text="2-3 Lần/Tuần"/>
      </NoticesWrapper>
    </Wrapper>
  )
}

type NoticeProps = {
  imageUrl: string,
  text: string
}

const Notice: React.FC<NoticeProps> = ({imageUrl, text}) => {
  return (
    <NoticeWrapper>
      <img src={imageUrl} alt={text}/>
      <p>{text}</p>
    </NoticeWrapper>
  )
}

export default CaringNotice;