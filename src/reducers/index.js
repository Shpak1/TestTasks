import { combineReducers } from 'redux';
import authentificationReducer from './autentification'

const rootReducer = combineReducers({
  authenticated : authentificationReducer
});

export default rootReducer;
