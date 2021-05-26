import styled from 'styled-components';
import searchIcon from '@icons/search.svg';

import { transparentize } from 'polished';

export const Container = styled.footer`
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
  z-index: 100;

  background: ${props =>
    transparentize(
      1 - Number(props.theme.global.opacity),
      props.theme.taskbar.background[0]
    )};
  color: ${props => props.theme.taskbar.fontColor[0]};

  display: flex;
  align-items: center;

  > * {
    height: 100%;
    opacity: 2;
  }

  #btnStartMenu {
    width: 3rem;
    padding: 0.625rem 0.9375rem;
    background: transparent;
    border: 0;
    transition: 0.5s background;

    &:hover {
      background: ${props =>
        transparentize(
          1 - Number(props.theme.global.opacity),
          props.theme.taskbar.background[2]
        )};
    }

    svg {
      fill: white;
      transition: 0.2s fill;
    }

    &:hover svg {
      fill: ${props => props.theme.global.secundaryColor};
    }
  }

  .search {
    height: 100%;
    width: 21.5625rem;
    padding-inline: 2.5rem 1rem;

    border: 1px solid ${props => props.theme.taskbar.fontColor[2]};
    border-radius: 0;

    background-color: ${props => props.theme.taskbar.background[1]};
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 0.625rem;
    background-size: 1.0625rem;
    font-size: 0.9688rem;

    &:focus,
    &:hover {
      background-color: #fff;
      box-shadow: inset 0 0 0 0.125rem
        ${props => props.theme.global.secundaryColor};
    }

    ::placeholder {
      color: ${props => props.theme.taskbar.fontColor[1]};
    }
  }
`;

export const Icons = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;

  #minimizeAll {
    width: 0.375rem;
    height: 100%;

    border-left: 0.125rem solid ${props => props.theme.taskbar.fontColor[2]};
    margin-left: 0.3125rem;
    transition: 0.5s background;

    &:hover {
      background: ${props =>
        transparentize(
          1 - Number(props.theme.global.opacity),
          props.theme.taskbar.background[2]
        )};
    }
  }

  .clock {
    height: 100%;
    width: 74px;

    background: transparent;
    border: 0;

    transition: 0.5s background;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: 12px;
    color: ${props => props.theme.taskbar.fontColor[0]};

    cursor: default;

    // retirar
    position: relative;
    right: 42px;

    &:hover {
      background: ${props =>
        transparentize(
          1 - Number(props.theme.global.opacity),
          props.theme.taskbar.background[2]
        )};
    }
  }
`;
