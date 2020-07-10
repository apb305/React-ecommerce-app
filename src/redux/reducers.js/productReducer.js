import { GET_ITEMS, GET_ITEM } from "../types";

const initialState = {
  items: [],
  item: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
      };
      case GET_ITEM:
      return {
        ...state,
        item: payload,
      };
    default:
      return state;
  }
}
