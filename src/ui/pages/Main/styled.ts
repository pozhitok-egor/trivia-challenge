import styled from 'styled-components';

export const Header = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 46px;
  font-weight: bold;
  color: #fff;
`;

export const Logo = styled.img`
  width: 70%;
  max-width: 724px;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`;

export const Label = styled.label`
  width: 100%;
  max-width: 446px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #F7A491;
`;

export const Error = styled.div`
  font-size: 15px;
  width: 100%;
  max-width: 446px;
  color: red;
`;

export const Blobs = styled.div`
  position: relative;
  overflow: hidden;
  & img {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
