import axios from 'axios';
import {
  CURRENT_ADMIN,
  GET_ALLUSERS,
  LOAD_ADMIN,
  LOAD_USERS,
  LOGIN_ADMIN,
  LOGOUT_ADMIN,
} from '../ActionTypes/admin';

export const loginAdmin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });

  try {
    let result = await axios.post('/api/admin/loginAdmin', admin);
    dispatch({ type: LOGIN_ADMIN, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};

export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    let result = await axios.get('/api/admin/currentAdmin', config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};

export const logoutAdmin = () => async (dispatch) => {
  dispatch({ type: LOGOUT_ADMIN });
};

export const getallusers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let result = await axios.get('/api/admin/allusers');
    dispatch({ type: GET_ALLUSERS, payload: result.data.listusers });
  } catch (error) {
    console.log(error);
  }
};
