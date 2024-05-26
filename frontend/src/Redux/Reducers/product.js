// IMPORTATION

import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCCESS_PRODUCT,
} from "../ActionTypes/product";

// INITIAL STATE
const initialState = {
  listProducts: [],
  errors: null,
  load: false,
  productToGet: [],
};

// PURE FUNCTION
const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_PRODUCT:
      return {...state, load: true};
    case SUCCESS_PRODUCT:
      return {...state, load: false, listProducts: payload.listProducts};
    case FAIL_PRODUCT:
      return {...state, load: false, errors: payload};
    case ONE_PRODUCT:
      return {...state, load: false, productToGet: payload.productToGet};
    default:
      return state;
  }
};

// EXPORT
export default productReducer;
