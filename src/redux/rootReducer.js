import { combineReducers } from 'redux';
import cartReducer from '../redux/reducers.js/cartReducer'
import productReducer from '../redux/reducers.js/productReducer'

export default combineReducers ({
   items: productReducer,
   cartItems: cartReducer
})