import styled from 'styled-components';

const Loader = styled.div`
  margin: 0px;
  animation: spin 2.5s infinite linear;
  border:solid 5px transparent;
  border-radius:50%;
  border-top-color: rgba(66, 74, 158, 0.3);
  border-left-color: rgba(66, 74, 158, 0.3);
  box-sizing:border-box;
  height: 20px;
  position:relative;
  width: 20px;
  z-index:1;
  &:before {
    animation:spin-reverse 2s infinite linear;
    border:solid 5px transparent;
    border-radius:50%;
    border-top-color: rgba(66, 74, 158, 0.6);
    border-right-color: rgba(66, 74, 158, 0.6);
    box-sizing:border-box;
    content:'';
    position:absolute;
    height: 40px;
    width: 40px;
    top: -15px;
    left: -15px;
  }
  &:after {
    animation:spin 1.5s infinite linear;
    border:solid 5px transparent;
    border-radius:50%;
    border-bottom-color: rgb(66, 74, 158);
    border-left-color: rgb(66, 74, 158);
    box-sizing:border-box;
    content:'';
    position:absolute;
    height: 60px;
    width: 60px;
    top: -25px;
    left: -25px;
  }
  @keyframes spin {
    100% {
      transform:rotate(360deg);
    }
  }
  @keyframes spin-reverse {
    100% {
      transform:rotate(-720deg);
    }
  }
`;


export default Loader;
