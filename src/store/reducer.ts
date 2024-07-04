import {createReducer} from '@reduxjs/toolkit';
import { clearCart, setCart, setDevice } from './actions';
import { CartItemType } from '../types/cart-item';
import { setCookie } from '../utils';

type StateType = {
  cartItems: CartItemType[]
  device: boolean
}

const initialState: StateType = {
  cartItems: [],
  device: true
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDevice, (state, action) => {
      state.device = action.payload;
    })
    .addCase(setCart, (state, action) => {
      state.cartItems = action.payload.sort((a, b) => (a.id < b.id ? -1 : 1));  
      setCookie('cart', JSON.stringify(state.cartItems), 7);
    })
    .addCase(clearCart, (state) => {
      state.cartItems = [];
      setCookie('cart', JSON.stringify(state.cartItems), 7);
    })
});

export {reducer};