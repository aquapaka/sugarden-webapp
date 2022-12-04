import logo from '../assets/sugarden-logo.png'
import logoSimple from '../assets/sugarden-logo-simple.png'

import {Wrapper} from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <a href=""><img className="logo" src={logo} alt="logo"/></a>
      <img className="logo-simple" src={logoSimple} alt="logo-simple"/>
      <ul className="nav-items">
        <li><a className="nav-link" href="">Home</a></li>
        <li><a className="nav-link" href="">Plants</a></li>
        <li><a className="nav-link" href="">About us</a></li>
        <li><a className="nav-link" href="">Contact</a></li>
      </ul>
      <ul className="nav-items">
        <li><a className="nav-link" href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
        <li><a className="nav-link" href=""><i className="fa-solid fa-user"></i></a></li>
        <li><a className="nav-link" href=""><i className="fa-solid fa-cart-shopping"></i></a></li>
      </ul>
    </Wrapper>
  )
}

export default NavBar;