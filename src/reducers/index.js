import { combineReducers } from 'redux';
import authentificationReducer from './autentification'
import mapResult from './MapResult'

const rootReducer = combineReducers({
  authenticated : authentificationReducer,
  mapResult:mapResult
});

export default rootReducer;
