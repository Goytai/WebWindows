interface ActionData {
  type: string;
  payload: {
    newDate: Date;
  };
}

interface ISystemData {
  date: Date;
}

const INITIAL_STATE = {
  date: new Date()
};

function systemData(state = INITIAL_STATE, action: ActionData): ISystemData {
  switch (action.type) {
    case '@SYSTEM_UPDATEDATE':
      return { ...state, date: action.payload.newDate };
    default:
      return state;
  }
}

export default systemData;
