import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setGamestate } from '../../core/store/actions/gamestate';
import { clearStatistics } from '../../core/store/actions/statistics';
import Cross, { ICross } from './Cross'

type CloseProps<T> = React.ButtonHTMLAttributes<T> & ICross;

const Close = (props: CloseProps<any>) => {
  const { fill, height, width } = props
  const dispatch = useDispatch()

  const buttonHandler = () => {
    dispatch(setGamestate('menu'))
    dispatch(clearStatistics())
  }

  return (
    <CloseButton onClick={buttonHandler} {...props}>
      <Cross fill={fill} height={height} width={width}/>
    </CloseButton>
  )
}

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 20px;
  border: none;
  background: transparent;
`;

export default Close
