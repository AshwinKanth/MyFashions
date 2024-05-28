import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  cartList: [],
  removeAllCartItems : () =>{},
  addCartItem: () =>{},
  removeCartItem: () =>{},
  incrementCartItemQuantity: () =>{},
  decrementCartItemQuantity: () =>{}
})

export default ThemeContext
