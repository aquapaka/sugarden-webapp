import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 2vw 1vh;
  
  @media(max-width: 512px) {
    .logo {
      display: none;
    }
  }
  
  @media(min-width: 513px) {
    
    .logo-simple {
      display: none;
    }
  }

  .logo {
    height: 4vw;
    max-height: 50px;
  }
  
  .logo-simple {
    height: 6vw;
  }
  
  .nav-items {
    color: #024b30;
    font-weight: 600;
    display: flex;
    list-style: none;
    padding: 0;
  }

  #searchIcon {
    width: 20px;
  }
  #userIcon {
    width: 16px;
  }
  #cartIcon {
    width: 16px;
  }
  
  .nav-link {
    font-weight: 700;
    color: #024b30;
    text-decoration: none;
    padding: 10px;
  }

  .nav-link:active {
    
  }
`;