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
`;

export const Level = styled.div`
  font-size: 28px;
  letter-spacing: 0.5em;
`;

export const Progress = styled.div`
  width: 100%;
  max-width: 446px;
  font-weight: 700;
  font-size: 20px;
`;

export const Number = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Current = styled.div`
  font-size: 28px;
  color: #FF7878;
`;

export const Question = styled.div`
  max-width: 630px;
  font-size: 31px;
  text-align: center;
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
