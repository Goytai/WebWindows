import styled from 'styled-components';

import wallpaper from '@images/wallpaper2.jpg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  z-index: 0;

  overflow: hidden;

  background: #2d7d9a;
  background-image: url(${wallpaper});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
