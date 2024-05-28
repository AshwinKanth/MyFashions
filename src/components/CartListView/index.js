import CartItem from "../CartItem";

import ThemeContext from "../../Context/ThemeContext";

import "./index.css"

const CartListView = () =>(
    <ThemeContext.Consumer>
        {value =>{
            const {cartList} = value
            
        return(
            <ul className="cart-list">
                {cartList.map(eachCartItem =>(
                    <CartItem  cartItemDetails={eachCartItem} key={eachCartItem.id}/>
                ))}
            </ul>
        )
        }}
    </ThemeContext.Consumer>
)

export default CartListView