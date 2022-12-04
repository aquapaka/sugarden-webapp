import styled from "styled-components";

import patternLowOpacity from "../assets/pattern-white-lowop.png"

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid green;
  border-radius: 25px;
  background: url(${patternLowOpacity}), #024b30;
  background-size: 40%;
  height: 60vw;
  max-height: 600px;
  margin-top: 0.5vw;
  
  .main-plant {
    position: absolute;
    right: -1vw;
    bottom: -4vw;
    height: 50vw;
    max-height: 500px;
    z-index: 10;
  }
  
  .text-box {
    border-radius: 0 10px 10px 0;
    position: relative;
    top: 28%;
    display: inline-flex;
    align-items: center;
    background: #024b30;
    color: white;
    padding: 2vw;
  }
  
  .texts * {
    margin: 0;
    padding-right: 2vw;
  }
  
  .small-text {
    font-size: min(max(5vw, 10px), 60px);
    font-weight: 700;
  }
  
  .big-text {
    font-size: min(max(7vw, 10px), 90px);
  }
  
  .logo {
    display: inline-block;
    float: right;
    height: min(max(10px, 10vw), 130px);
  }
`;