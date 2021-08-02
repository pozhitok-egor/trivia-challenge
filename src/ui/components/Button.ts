import styled from 'styled-components';

const Button = styled.button<ColorProps>`
  cursor: pointer;
  padding: 20px;
  width: 100%;
  max-width: 446px;
  max-height: 89px;
  color: ${({color}) => color === 'transparent' ? '#4953BE' : '#fff'};
  background: ${({color}) => color === 'blue' ? '#4953BE' :
  color === 'transparent' ? 'transparent' : 'linear-gradient(90deg, #FFA67A 0%, #FF6065 100%)'};
  border: ${({color}) => color === 'transparent' ? '2px solid #4953BE' : 'none'};
  box-shadow: ${({color}) => color === 'transparent' ? 'none' : color === 'blue' ? '0px 6px 0px #424A9E' : '0px 6px 0px #C65252'};
  box-sizing: border-box;
  border-radius: 14px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 800;
  font-size: 21px;
  line-height: 150%;

  @media screen and (max-width: 425px) {
    font-size: 15px;
  }

  &:disabled {
    filter: grayscale(0.6);
  }
`;

export interface ColorProps {
  color?: 'transparent' | 'blue';
}

export default Button;
