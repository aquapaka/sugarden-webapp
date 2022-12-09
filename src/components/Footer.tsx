import {Wrapper, InfoColumn, FloatBottomText, RightBackgroundImage} from "./Footer.styles";
import pot01 from '../assets/pots/pot01.png';

const Footer = () => {
  return (
    <Wrapper>
      <InfoColumn>
        <h1>Socials</h1>
        <ul>
          <li><a href="#">Trang nhà</a></li>
          <li><a href="#">Tips</a></li>
          <li><a href="#">Về chúng tôi</a></li>
        </ul>
      </InfoColumn>
      <InfoColumn>
        <h1>Links</h1>
        <ul>
          <li><a href="#">Trang nhà</a></li>
          <li><a href="#">Tips</a></li>
          <li><a href="#">Về chúng tôi</a></li>
        </ul>
      </InfoColumn>
      <InfoColumn>
        <h1>Contact</h1>
        <ul>
          <li><a href="#">+84 98843-1064</a></li>
          <li><a href="#">lemai212209@gmail.com</a></li>
          <li><a href="#">Tp. Hồ Chí Minh, Việt Nam</a></li>
        </ul>
      </InfoColumn>
      <FloatBottomText>All Right Reserved - 2022</FloatBottomText>
      <RightBackgroundImage src={pot01}/>
    </Wrapper>
  )
}

export default Footer;