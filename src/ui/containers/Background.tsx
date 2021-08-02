import styled from 'styled-components';
import blobsDark from '../../assets/icons/blobs_dark.svg'
import blobsLight from '../../assets/icons/blobs_light.svg'

const Background = styled.div<{theme?: 'dark' | 'light'}>`
  min-height: 100vh;
  height: 100%;
  color: ${({theme}) => theme === 'light' ? '#4953BE' : '#fff'};
  background: ${({theme}) => theme === 'light' ? '#fff' : '#4953BE'};
  background-image: url(${({theme}) => theme === 'light' ? blobsLight : blobsDark});
  background-size: 100%;
  background-position-y: -100px;
`;

export default Background;
