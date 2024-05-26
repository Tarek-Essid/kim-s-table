import {createStore, applyMiddleware, compose} from "redux";

// Import rootReducers
import rootReducer from "../Reducers";
import {thunk} from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// Export
export default store;
