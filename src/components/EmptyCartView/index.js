import {Link} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import './index.css'

const EmptyCartView = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const text = isDarkTheme ? 'textDark' : 'textLight'

      return(
        <div className="cart-empty-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            className="cart-empty-img"
            alt="cart empty"
          />
          <h1 className={`cart-empty-heading ${text}`}>Your Cart Is Empty</h1>

          <Link to="/shop">
            <button type="button" className="shop-now-btn">
              Shop Now
            </button>
          </Link>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default EmptyCartView