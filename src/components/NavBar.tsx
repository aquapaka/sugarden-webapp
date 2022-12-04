import logo from '../assets/sugarden-logo.png'
import logoSimple from '../assets/sugarden-logo-simple.png'
import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import cartIcon from "../assets/icons/cart.png";

import {Wrapper} from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <a href="">
        <img className="logo" src={logo} alt="logo"/>
        <img className="logo-simple" src={logoSimple} alt="logo-simple"/>
      </a>
      <ul className="nav-items">
        <li><a className="nav-link" href="">Trang chủ</a></li>
        <li><a className="nav-link" href="">Cây trồng</a></li>
        <li><a className="nav-link" href="">Liên hệ</a></li>
      </ul>
      <ul className="nav-items">
        <li><a className="nav-link" href=""><img id="searchIcon" src={searchIcon} alt="search icon"/></a></li>
        <li><a className="nav-link" href=""><img id="userIcon" src={userIcon} alt="user icon"/></a></li>
        <li><a className="nav-link" href=""><img id="cartIcon" src={cartIcon} alt="cart icon"/></a></li>
      </ul>
    </Wrapper>
  )
}

export default NavBar;