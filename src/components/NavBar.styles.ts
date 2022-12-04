import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 2vw;
  
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
    font-weight: 600;
    display: flex;
    list-style: none;
    gap: 1vw;
    padding: 0;
  }
  
  .nav-link {
    text-decoration: none;
    color: black;
  }

  .nav-link:active {
    
  }
`;