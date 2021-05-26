import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    global: {
      secundaryColor: string;
      opacity: string | number;
    };

    taskbar: {
      background: string[];
      fontColor: string[];
    };

    calendar: {
      background: string[];
      fontColor: string[];
    };
  }
}
