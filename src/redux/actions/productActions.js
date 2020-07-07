import { GET_ITEMS } from '../types'
import products from '../../data/products'

export const getItems = () => dispatch => {
    dispatch({
        type: GET_ITEMS,
        payload: products
    })
}