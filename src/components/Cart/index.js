import EmptyCartView from "../EmptyCartView"
import CartListView from "../CartListView"
import CartSummary from "../CartSummary"

import ThemeContext from "../../Context/ThemeContext"
import "./index.css"


const Cart = () =>(
  <ThemeContext.Consumer>
    {value =>{
      const {cartList,removeAllCartItems,isDarkTheme} = value

      const onClickRemoveCartItems = () =>{
        removeAllCartItems()
      }

      const showEmptyView = cartList.length === 0

      const cartBgColor = isDarkTheme ? 'bgDark' : 'bgLight';

      const cartSummaryText = isDarkTheme ? "cartSummaryTextColor" : "textLight"
      const cartTotalPriceColor = isDarkTheme ? "textDark" : "cartTotalPrice"

      return(
        <div className={`cart-container ${cartBgColor}`}>
            {showEmptyView ? (
              <EmptyCartView/>
            ):(
              <div className="cart-content-container">
                <h1 className={`cart-heading ${cartSummaryText}`}>My Cart</h1>
                <button
                  className={`removeAll-button ${cartTotalPriceColor}`}
                  type="button"
                  onClick={onClickRemoveCartItems}
                >
                  Remove all
                </button>
                <CartListView />
                <CartSummary/>
              </div>
            )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Cart