import React from "react";
import {NoticesWrapper, NoticeWrapper, Wrapper} from "./CaringNotice.styles";

import water from "../assets/icons/water.png";
import temperature from "../assets/icons/temperature.png";
import light from "../assets/icons/light.png";

const CaringNotice = () => {
  return (
    <Wrapper>
      <h1>Mức tối thiểu các loại sen đá</h1>
      <NoticesWrapper>
        <Notice imageUrl={water} text="2-3 Lần/Tuần" imageSize={45}/>
        <Notice imageUrl={temperature} text="Không quá 35°C" imageSize={49}/>
        <Notice imageUrl={light} text="2-3 Lần/Tuần" imageSize={63}/>
      </NoticesWrapper>
    </Wrapper>
  )
}

type NoticeProps = {
  imageUrl: string,
  text: string,
  imageSize: number
}

const Notice: React.FC<NoticeProps> = ({imageUrl, text, imageSize}) => {
  return (
    <NoticeWrapper imageSize={imageSize}>
      <img src={imageUrl} alt={text}/>
      <p>{text}</p>
    </NoticeWrapper>
  )
}

export default CaringNotice;