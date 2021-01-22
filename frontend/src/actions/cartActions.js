import React from 'react'
import Axios from "axios"
import { CART_ADD_ITEM } from '../constants/cartConstants'

const addToCart= (productId,qty) => async (dispatch) =>{
    try {
        const {data}=await Axios.get("/api/products/"+productId)
        dispatch({type:CART_ADD_ITEM,payload:{
            product:data._id,
            name:data.name,
            img:data.img,
            price:data.price,
            countInstock:data.countInstock,
            qty

        }})
    } catch (error) {
        
    }
}
export {addToCart}