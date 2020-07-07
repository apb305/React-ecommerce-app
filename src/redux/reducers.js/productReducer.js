import { GET_ITEMS } from "../types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
}
