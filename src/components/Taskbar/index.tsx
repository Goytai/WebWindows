import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import IState from 'src/store/dtos/IState';
import { ReactComponent as WinLogo } from '@images/win-logo.svg';

import * as S from './styles';

const Taskbar: React.FC = () => {
  const systemDate = useSelector<IState>(
    state => state.systemData.date
  ) as Date;

  const isOpenCalendar = useSelector<IState>(
    state => !!state.screenComponents.calendar
  ) as boolean;

  const dispatch = useDispatch();

  const toggleIsCalendarOpen = useCallback(() => {
    dispatch({
      type: '@SCREENCOMPONENTS_TOOGLE',
      payload: {
        name: 'calendar',
        value: !isOpenCalendar
      }
    });
  }, [dispatch, isOpenCalendar]);

  return (
    <S.Container>
      <button type="button" id="btnStartMenu">
        <WinLogo />
      </button>
      <input
        className="search"
        placeholder="Digite aqui para pesquisar"
        type="text"
      />

      <S.Icons>
        <button type="button" className="clock" onClick={toggleIsCalendarOpen}>
          <time>{format(systemDate, 'HH:mm')}</time>
          <time>{format(systemDate, 'dd/MM/yyyy')}</time>
        </button>

        <div id="minimizeAll" />
      </S.Icons>
    </S.Container>
  );
};

export default Taskbar;
