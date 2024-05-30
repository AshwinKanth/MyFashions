import "./index.css"

import ThemeContext from "../../Context/ThemeContext"

const CartSummary = () =>(
    <ThemeContext.Consumer>
        {value =>{
            const {isDarkTheme,cartList} = value

            const text = isDarkTheme ? 'textDark' : 'textLight'
            const cartSummaryText = isDarkTheme ? "cartSummaryTextColor" : "textLight"

            let total = 0;

            cartList.forEach(eachItem => {
                total += eachItem.price * eachItem.quantity
            })

            return(
                <div className="cartSummary-container">
                    <div className="total-container">
                        <h1 className={`order-total ${cartSummaryText}`}>Order Total:</h1>
                        <h1 className={`total ${text}`}>Rs {total}</h1>
                    </div>
                    <p className={`items-count ${cartSummaryText}`}>{cartList.length} items in cart</p>
                    <button className="checkout-button" type="button">Checkout</button>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default CartSummary