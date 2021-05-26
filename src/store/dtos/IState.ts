export default interface IState {
  systemData: {
    date: Date;
  };

  screenComponents: {
    [key: string]: boolean;
  };
}
