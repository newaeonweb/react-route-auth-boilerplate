import { combineReducers } from 'redux';
import authReducer from '../pages/auth/auth-store/auth-reducer';
import characterReducer from '../pages/character/_store/reducer';

const AppReducer = combineReducers({
  user: authReducer,
  character: characterReducer,
});

export default AppReducer;
