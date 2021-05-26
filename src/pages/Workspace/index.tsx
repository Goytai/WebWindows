import React from 'react';
import Clock from 'src/components/Clock';
import useClock from 'src/hooks/useClock';
import Taskbar from '../../components/Taskbar';

import * as S from './styles';

const Workspace: React.FC = () => {
  useClock(() => {});

  return (
    <S.Container className="Dashboard">
      <Taskbar />
      <Clock />
    </S.Container>
  );
};

export default Workspace;
