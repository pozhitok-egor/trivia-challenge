import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.div`
  max-width: 630px;
  text-align: center;
  font-size: 81px;
  font-weight: 700;
  color: #4953BE;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 425px) {
    font-size: 31px;
  }
`;

export const Level = styled.div`
  font-size: 28px;
  letter-spacing: 0.5em;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

export const Progress = styled.div`
  width: 100%;
  max-width: 446px;
  font-weight: 700;
  font-size: 20px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Number = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Current = styled.div`
  font-size: 28px;
  color: #FF7878;
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const Question = styled.div`
  max-width: 630px;
  font-size: 31px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    text-align: left;
  }
`;

export const Bar = styled.span<BarProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 5px;
  background-color: #DBDEFF;
  border-radius: 20px;

  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    content: '';
    width: ${({progress}) => `${progress}%`};
    height: 5px;
    border-radius: 20px;
    background: linear-gradient(180deg, #FF7878 0%, #FF7878 100%);
    transition: .5s ease-in-out;
  }
`;

interface BarProps {
  progress: number;
}

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
