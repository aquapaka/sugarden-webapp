import styled from "styled-components";

export enum ButtonType {
  GREEN,
  WHITE
}

type ButtonProps = {
  text: string,
  buttonType: ButtonType,
  href: string
}

export const Button: React.FC<ButtonProps> = ({text, buttonType, href}) => {
  return (
    <ButtonWrapper text={text} buttonType={buttonType} href={href}>
      {text}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.a<ButtonProps>`
  color: ${props => props.buttonType === ButtonType.GREEN ? "#ffffff" : "#024b30"};
  background: ${props => props.buttonType === ButtonType.GREEN ? "#024b30" : "#ffffff"};
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.15s ease-out;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.5);
  
  :hover {
    background: ${props => props.buttonType === ButtonType.GREEN ? "#048452" : "#e5e5e5"};
    padding: 12px 30px;
    translate: -6px -4px;
  }
  
  :active {
    color: ${props => props.buttonType === ButtonType.GREEN ? "#024b30" : "#ffffff"};
    background: ${props => props.buttonType === ButtonType.GREEN ? "#ffffff" : "#024b30"};
  }
`;
