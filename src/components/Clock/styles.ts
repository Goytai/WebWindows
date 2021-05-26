import styled from 'styled-components';
import { transparentize, lighten } from 'polished';
import { animated, SpringValue } from 'react-spring';
import ReactModal from 'react-modal';

interface BoxProps {
  style: {
    opacity: SpringValue<number>;
    bottom: SpringValue<string>;
  };
}

export const Container = styled(ReactModal)``;

export const Box = styled(animated.div)<BoxProps>`
  position: absolute;

  bottom: 40px;
  right: 0;

  color: ${props => props.theme.taskbar.fontColor[0]};

  height: 495px;
  width: 360px;

  transition: 0.5s background;

  background: ${props =>
    transparentize(0.04, props.theme.calendar.background[0])};

  &:hover {
    background: ${props => props.theme.calendar.background[0]};
  }

  header {
    height: 114px;
    border-bottom: 1px solid ${props => props.theme.calendar.background[1]};
    padding-inline: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 40px;
      font-weight: 400;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 13px;
      color: ${props => lighten(0.4, props.theme.global.secundaryColor)};
      transition: 0.1s color;

      &:hover {
        color: ${props => lighten(0.4, props.theme.calendar.background[1])};
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-inline: 25px;

    button {
      color: white;
    }

    .react-calendar {
      background: transparent;
      border: 0;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: #7d7f80;
    }

    /* .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__prev-button {
      display: none;
    } */

    .react-calendar__month-view__weekdays__weekday {
      font-size: 0;

      abbr {
        border: none;
        text-decoration: none;
      }

      &::first-letter {
        font-size: 16px;
      }
    }

    .react-calendar__tile--now {
      box-shadow: inset 0 0 0 3px ${props => props.theme.calendar.background[0]};
    }

    .react-calendar__navigation {
      button,
      button:hover,
      button:active,
      button:focus {
        background: transparent;
      }
    }

    .react-calendar__tile {
      border-radius: 0;
      border: 3px solid transparent;
      padding: 0;
      height: 45px;

      transition: 0.2s;

      &:hover,
      &:active,
      &:focus {
        background: transparent;
      }

      &:not(.react-calendar__tile--now):hover {
        background: transparent;
        border-color: ${props =>
          lighten(0.1, props.theme.calendar.background[1])};
      }

      &:hover {
        background: ${props => props.theme.global.secundaryColor};
        border: 3px solid ${props => props.theme.global.secundaryColor};
        box-shadow: inset 0 0 0 3px
          ${props => props.theme.calendar.background[0]};
      }
    }
  }

  opacity: ${props => props.style.opacity as number};
  bottom: ${props => props.style.bottom as string};
`;
