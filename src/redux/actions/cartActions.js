import {
  ADD_ITEM,
  REMOVE_ITEM,
  DECREMENT_ITEM,
} from "../types";

export const addItem = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item,
  });
};

export const decrementItem = (item) => (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM,
    payload: item,
  });
};
