import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import IState from 'src/store/dtos/IState';
import Calendar from 'react-calendar';
import * as S from './styles';

import 'react-calendar/dist/Calendar.css';

const Clock: React.FC = () => {
  const dispatch = useDispatch();

  const systemDate = useSelector<IState>(
    state => state.systemData.date
  ) as Date;

  const isOpenCalendar = useSelector<IState>(
    state => !!state.screenComponents.calendar
  ) as boolean;

  const toggleIsOpenModal = useCallback(() => {
    dispatch({
      type: '@SCREENCOMPONENTS_TOOGLE',
      payload: {
        name: 'calendar',
        value: !isOpenCalendar
      }
    });
  }, [dispatch, isOpenCalendar]);

  const boxWithTransictions = useTransition(isOpenCalendar, {
    from: { opacity: 0, bottom: '-40px' },
    enter: { opacity: 1, bottom: '40px' },
    leave: { opacity: 0, bottom: '-40px' }
  });

  return (
    <S.Container
      onRequestClose={toggleIsOpenModal}
      closeTimeoutMS={300}
      isOpen={isOpenCalendar}
      style={{ overlay: { background: 'transparent' } }}
    >
      {boxWithTransictions(
        ({ opacity, bottom }, item) =>
          item && (
            <S.Box style={{ opacity, bottom }}>
              <header>
                <h1>
                  <time>{format(systemDate, 'HH:mm:ss')}</time>
                </h1>
                <h2>
                  <time>{format(systemDate, 'PPPP ', { locale: ptBr })}</time>
                </h2>
              </header>

              <main>
                <Calendar value={systemDate} />
              </main>
            </S.Box>
          )
      )}
    </S.Container>
  );
};

export default Clock;
