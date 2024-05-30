import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'


import "./index.css"

import ThemeContext from "../../Context/ThemeContext"


const CartItem = (props) =>(
    <ThemeContext.Consumer>
        {value =>{
            const {removeCartItem,incrementCartItemQuantity,decrementCartItemQuantity,isDarkTheme} = value

            const {cartItemDetails} = props

            const {id,title,price,image,category,quantity} = cartItemDetails

            const onIncrementQuantity = () =>{
                incrementCartItemQuantity(id)
            }

            const onDecrementQuantity = () =>{
                decrementCartItemQuantity(id)
            }

            const onRemoveCartItem = () =>{
                removeCartItem(id)
            }

            const cartBgColor = isDarkTheme ? 'bgDark' : 'bgLight';
            const text = isDarkTheme ? 'textDark' : 'textLight'
            const cartProductColor = isDarkTheme ? "textDark" : "cartProductTitle"
            const cartTotalPriceColor = isDarkTheme ? "textDark" : "cartTotalPrice"

            return(
                <li className={`cart-item ${cartBgColor}`}>
                    <img src={image} alt={title} className="cart-product-image" />
                    <div className="cart-item-details-container">
                        <div className="cart-product-title-brand-container">
                            <p className={`cart-product-title ${cartProductColor}`}>{title}</p>
                            <p className={`cart-product-brand ${cartProductColor}`}>by {category}</p>
                        </div>
                    <div className="cart-quantity-container">
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onDecrementQuantity}
                    >
                        <BsDashSquare  className={`quantity-icon ${text}`} />
                    </button>
                    <p className={`cart-quantity ${cartProductColor}`}>{quantity}</p>
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onIncrementQuantity}
                    >
                        <BsPlusSquare  className={`quantity-icon ${text}`} />
                    </button>
                    </div>
                    <div className="total-price-remove-container">
                        <p className={`cart-total-price ${cartTotalPriceColor}`}>Rs {price * quantity}/-</p>
                        <button
                            className={`remove-button ${cartProductColor}`}
                            type="button"
                            onClick={onRemoveCartItem}
                        >
                            Remove
                        </button>
                    </div>
                    </div>
                    <button
                        className="delete-button"
                        type="button"
                        onClick={onRemoveCartItem}
                    >
                        <AiFillCloseCircle color="#616E7C" size={20} />
                    </button>
                </li>
            )
        }}
    </ThemeContext.Consumer>
)

export default CartItem