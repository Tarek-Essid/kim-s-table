// IMPORTATION
import { combineReducers } from 'redux';
import userReducer from './user';
import productReducer from './product';
import adminReducer from './admin';

// ROOT REDUCER
const rootReducer = combineReducers({
  userReducer,
  productReducer,
  adminReducer,
});

// EXPORT
export default rootReducer;
