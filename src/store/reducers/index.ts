import { combineReducers } from 'redux';

import systemData from './systemData';
import screenComponents from './screenComponents';

export default combineReducers({
  systemData, // @SYSTEMDATA
  screenComponents // @SCREENCOMPONENTS
});
