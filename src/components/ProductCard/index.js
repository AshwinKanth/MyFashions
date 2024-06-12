import {Link} from "react-router-dom"
import { GrFavorite } from "react-icons/gr";

import ThemeContext from '../../Context/ThemeContext'
import './index.css'

const ProductCard = props => {
  const {productCardDetails} = props

  const {title,image,rating,category,price,id} = productCardDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const text = isDarkTheme ? 'textDark' : 'textLight'

        const cardBorder = isDarkTheme ? "borderDark" : "borderLight"

        return (
          <div className={`productsCard-container ${cardBorder}`}>
            <div className="favIconContainer">
              <GrFavorite className="favIcon"/>
            </div>
            <div className="productCardContainer">
                <Link to={`/products/${id}`} className="navLink">
                <li className="product-item">
                  <div className="product_item_image_container">
                    <img src={image} alt={title} className="productImage" />
                  </div>
                  <div>
                    <h1 className={`title ${text}`}>{title}</h1>
                    <p className={`category ${text}`}>by {category}</p>
                  </div>
                  <div className="productDetails">
                    <p className={`price ${text}`}>{`Rs ${price}/-`}</p>
                    <div className="rating-container">
                      <p className="rating">{rating.rate}</p>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        className="starImage"
                        alt="star"
                      />
                    </div>
                  </div>
                </li>
                </Link>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ProductCard
