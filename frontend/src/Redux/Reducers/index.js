// IMPORTATION
import {combineReducers} from "redux";
import userReducer from "./user";
import productReducer from "./product";

// ROOT REDUCER
const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

// EXPORT
export default rootReducer;
