import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'


import "./index.css"

import ThemeContext from "../../Context/ThemeContext"


const CartItem = (props) =>(
    <ThemeContext.Consumer>
        {value =>{
            const {removeCartItem,incrementCartItemQuantity,decrementCartItemQuantity} = value

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



            return(
                <li className="cart-item">
                    <img src={image} alt={title} className="cart-product-image" />
                    <div className="cart-item-details-container">
                        <div className="cart-product-title-brand-container">
                            <p className="cart-product-title">{title}</p>
                            <p className="cart-product-brand">by {category}</p>
                        </div>
                    <div className="cart-quantity-container">
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onDecrementQuantity}
                    >
                        <BsDashSquare color="#52606D" size={12} />
                    </button>
                    <p className="cart-quantity">{quantity}</p>
                    <button
                        type="button"
                        className="quantity-controller-button"
                        onClick={onIncrementQuantity}
                    >
                        <BsPlusSquare color="#52606D" size={12} />
                    </button>
                    </div>
                    <div className="total-price-remove-container">
                        <p className="cart-total-price">Rs {price * quantity}/-</p>
                        <button
                            className="remove-button"
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