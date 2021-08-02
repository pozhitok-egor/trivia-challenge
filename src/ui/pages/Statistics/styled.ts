import styled from 'styled-components';

export const Number = styled.div`
  display: flex;
  align-items: baseline;
  font-family: 'Quicksand', sans-serif;
  font-size: 12px;
`;

export const Score = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'Comfortaa', sans-serif;
  font-size: 18px;
`;

export const Avatar = styled.img`

`;

export const Correct = styled.div`
  font-size: 20px;
  color: #FF8D8D;
`;

export const Stars = styled.div`
  max-width: 630px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3px;
`;

export const Answers = styled.div`
  max-width: 630px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Answer = styled.div<{correct?: boolean}>`
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px 80px 16px 16px;
  background: ${({correct}) => correct === false ? '#FFDBDB' : '#fff'};
  border-radius: 14px;
  color: #464FAC;
  & svg, img {
    position: absolute;
    right: 20px;
  }
`;

