// IMPORTATION
import axios from "axios";
import {
  CURRENT_USER,
  FAIL_USER,
  LOAD_USER,
  LOGOUT_USER,
  SUCCESS_USER,
} from "../ActionTypes/user";

// REGISTER
export const register = (newUser) => async (dispatch) => {
  dispatch({type: LOAD_USER});
  try {
    let result = await axios.post("/api/user/register", newUser);
    dispatch({type: SUCCESS_USER, payload: result.data});
  } catch (error) {
    dispatch({type: FAIL_USER, payload: error.response.data.error});
  }
};

// LOG IN
export const login = (user) => async (dispatch) => {
  dispatch({type: LOAD_USER});
  try {
    let result = await axios.post("/api/user/login", user);
    dispatch({type: SUCCESS_USER, payload: result.data});
  } catch (error) {
    dispatch({type: FAIL_USER, payload: error.response.data.error});
  }
};

// CURRENT
export const current = () => async (dispatch) => {
  dispatch({type: LOAD_USER});
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    let result = await axios.get("/api/user/current", config);
    dispatch({type: CURRENT_USER, payload: result.data});
  } catch (error) {
    dispatch({type: FAIL_USER, payload: error.response.data.error});
  }
};

// LOG OUT
export const logout = () => async (dispatch) => {
  dispatch({type: LOGOUT_USER});
};
