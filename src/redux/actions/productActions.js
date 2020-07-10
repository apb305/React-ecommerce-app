import { GET_ITEMS, GET_ITEM } from '../types'
import products from '../../data/products'

export const getItems = () => dispatch => {
    dispatch({
        type: GET_ITEMS,
        payload: products
    })
}

export const getItem = (item) => dispatch => {
    dispatch({
        type: GET_ITEM,
        payload: item
    })
}