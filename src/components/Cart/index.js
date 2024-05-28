import EmptyCartView from "../EmptyCartView"
import CartListView from "../CartListView"

import ThemeContext from "../../Context/ThemeContext"
import "./index.css"


const Cart = () =>(
  <ThemeContext.Consumer>
    {value =>{
      const {cartList,removeAllCartItems} = value

      const onClickRemoveCartItems = () =>{
        removeAllCartItems()
      }

      const showEmptyView = cartList.length === 0

      return(
        <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView/>
            ):(
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  className="removeAll-button"
                  type="button"
                  onClick={onClickRemoveCartItems}
                >
                  Remove all
                </button>
                <CartListView />
              </div>
            )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Cart