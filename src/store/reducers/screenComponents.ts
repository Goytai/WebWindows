interface ActionData {
  type: string;
  payload: {
    name: string;
    value: boolean;
  };
}

interface IScreenComponents {
  [key: string]: boolean;
}

const INITIAL_STATE = {};

function screenComponents(
  state = INITIAL_STATE,
  action: ActionData
): IScreenComponents {
  switch (action.type) {
    case '@SCREENCOMPONENTS_TOOGLE':
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}

export default screenComponents;
