import { ADD_ITEM, REMOVE_ITEM, DECREMENT_ITEM } from "../types";

const initialState = {
  cartItems: [],
  total: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      let incrementItem = state.cartItems.find(
        (item) => item.id === payload.id
      ); //Check if the item exists in the cart.
      if (incrementItem) {
        //If the item exist, add to the quantity for that item.
        return {
          ...state,
          cartItems: state.cartItems.filter((data) => {
            if (data.id === incrementItem.id) {
              data.quantity += 1;
            }
            return data;
          }),
          total: state.total + incrementItem.product_price,
        };
      } else
        return {
          ...state,
          cartItems: [
            Object.assign(payload, { quantity: 1 }),
            ...state.cartItems,
          ],
          total: state.total + payload.product_price,
        };
    case DECREMENT_ITEM:
      let decrementItem = state.cartItems.find(
        (item) => item.id === payload.id
      ); //Check if the item exists in the cart.
      if (decrementItem.quantity === 1) {
        //If the item's quantity is equal to 0, remove from cart.
        return {
          ...state,
          cartItems: state.cartItems.filter((data) => data.id !== payload.id),
          total: state.total - decrementItem.product_price,
        };
      }
      if (decrementItem) {
        //If the item exist, subtract from quantity for that item.
        return {
          ...state,
          cartItems: state.cartItems.filter((data) => {
            if (data.id === decrementItem.id) {
              data.quantity -= 1;
            }
            return data;
          }),
          total: state.total - decrementItem.product_price,
        };
      } else {
        return { ...state };
      }
    case REMOVE_ITEM:
      //let removedItem = Object.assign(payload, { quantity: 1 })
      let itemToBeRemoved = state.cartItems.filter((item) => item !== payload);
      let newTotal = state.total - payload.product_price * payload.quantity;
      return {
        ...state,
        cartItems: itemToBeRemoved,
        total: newTotal,
      };
    default:
      return state;
  }
}
