import styled from 'styled-components';

const Background = styled.div<{theme?: 'dark' | 'light'}>`
  min-height: 100vh;
  height: 100%;
  color: ${({theme}) => theme === 'light' ? '#4953BE' : '#fff'};
  background: ${({theme}) => theme === 'light' ? '#fff' : '#4953BE'};
`;

export default Background;
