import {Component} from 'react'

import Loader from "react-loader-spinner"

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import ThemeContext from '../../Context/ThemeContext'

import './index.css'

const apiStatusConstant = {
  initial : "INITIAL",
  success : "SUCCESS",
  failure : "FAILURE",
  inProgress : "IN_PROGRESS",
}

class ProductDetails extends Component {
  state = {productData: {}, quantity: 1,apiStatus: apiStatusConstant.initial}

  componentDidMount() {
    this.getProductDetails()
  }

  getFormattedData = data => ({
    id: data.id,
    title: data.title,
    description: data.description,
    price: data.price,
    image: data.image,
    category: data.category,
    rating: data.rating.rate,
    count: data.rating.count,
  })

  getProductDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)
      const fetchedData = this.getFormattedData(data)

      this.setState({productData: fetchedData,apiStatus: apiStatusConstant.success})
    }else{
      this.setState({apiStatus:apiStatusConstant.failure})
    }
  }

  onClickDecrement = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  onClickIncrement = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }


  renderProductDetails = () => {
    const {productData, quantity} = this.state
    const {image, price, rating, description, count, title, category} =
      productData

    const productsCount =
      count > 150 ? 'Hurry!! free delivery' : 'Only few left'

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme,addCartItem} = value
          const text = isDarkTheme ? 'textDark' : 'textLight'

          const onClickAddToCart = () => {
            addCartItem({...productData, quantity})
            console.log(productData)
          }

          return (
            <div className="productDetailsItem-container">
              <div className="image-container">
                <img src={image} alt={title} className="productDetailsImage" />
              </div>
              <div className="details-container">
                <h1 className={`productTitle ${text}`}>{title}</h1>
                <p className={`productCategory ${text}`}>{`by ${category}`}</p>
                <p className={`productPrice ${text}`}>{`Rs ${price}/-`}</p>
                <div className="detailsRating-container">
                  <p className={`rating ${text}`}>{rating}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    className="starImage"
                    alt="star"
                  />
                </div>
                <p
                  className={`count ${text}`}
                >{`(${count}) ${productsCount}`}</p>
                <p className={`productDescription ${text}`}>{description}</p>
                <div className="count-container">
                  <button className="button" onClick={this.onClickDecrement}>
                    <BsDashSquare className={`quantity-icon ${text}`} />
                  </button>
                  <p className={`itemCount ${text}`}>{quantity}</p>
                  <button className="button" onClick={this.onClickIncrement}>
                    <BsPlusSquare className={`quantity-icon ${text}`} />
                  </button>
                </div>
                <button className={`add-cart-button ${text}`} type="button" onClick={onClickAddToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
        className="no-jobs-image"
      />
      <h1 className="failureHeading">Oops! Something Went Wrong</h1>
      <p className="failureDescription">
        We cannot seem to find the page you are looking for
      </p>
      <button type="button" className="retryButton" onClick={this.getProductDetails}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProductDetainsView = () =>{
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderProductDetails()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatus.inProgress:
        return this.renderLoadingView()
      default:
        return null;
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const productBgColor = isDarkTheme ? 'bgDark' : 'bgLight'

          return (
            <div className={`productDetails-container ${productBgColor}`}>
              <hr />
              {this.renderProductDetainsView()}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default ProductDetails
