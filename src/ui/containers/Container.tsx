import React from 'react'
import { ContainerBlock } from './styled'

export interface PropsType {
  children: React.ReactNode
}

const Container = (props: PropsType) => {
  const { children } = props;
  return (
    <ContainerBlock>
      {children}
    </ContainerBlock>
  )
}

export default Container
