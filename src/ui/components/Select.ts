import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';

const Select = styled.select`
  cursor: pointer;
  outline: none;
  appearance: none;
  padding: 20px;
  width: 100%;
  max-width: 446px;
  max-height: 89px;
  color: #fff;
  background: transparent url(${arrow}) no-repeat right;
  background-position-x: calc(100% - 20px);
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  & option {
    color: #000;
  }

  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
`;

export default Select;
