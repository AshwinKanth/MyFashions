import {Component} from 'react'
import Loader from "react-loader-spinner"

// import Filters from '../Filters'
import Recommendations from '../Recommendations'

import ThemeContext from '../../Context/ThemeContext'

import ProductCard from '../ProductCard'

import './index.css'

const sortbyOptions = [
  {
    optionId: 'desc',
    displayText: 'NEWEST FIRST',
  },
  {
    optionId: 'asc',
    displayText: 'POPULAR',
  },
  {
    optionId: 'PRICE_HIGH',
    displayText: 'PRICE : HIGH TO LOW',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'PRICE : LOW TO HIGH',
  },
]

const apiStatusConstant = {
  initial : "INITIAL",
  success : "SUCCESS",
  failure : "FAILURE",
  inProgress : "IN_PROGRESS",
}

class Shop extends Component {
  state = {productsList: [], apiStatus: apiStatusConstant.initial,activeOptionId: sortbyOptions[0].optionId}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
   
    const {activeOptionId} = this.state

    const apiUrl = `https://fakestoreapi.com/products?sort=${activeOptionId}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetcheddata = await response.json()
      // console.log(fetcheddata)
      const updatedData = fetcheddata.map(each => ({
        id: each.id,
        title: each.title,
        category: each.category,
        price: each.price,
        image: each.image,
        rating: each.rating.rate,
        count: each.rating.count,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus:apiStatusConstant.success })
    }else{
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProducts = () => {
    const {productsList,activeOptionId} = this.state
    return (
      <div>
        <div className="filters-recommendations-totalItems-container">
          <div className="filters-recommendations-container">
            <p className="totalItems">3423 ITEMS</p>
            {/* <Filters /> */}
          </div>
          <Recommendations
            activeOptionId={activeOptionId}
            sortbyOptions={sortbyOptions}
            changeSortby={this.changeSortby}
          />
        </div>
        <hr className="text" />
        <ul className="productsList-container">
          {productsList.map(eachProduct => (
            <ProductCard
              productCardDetails={eachProduct}
              key={eachProduct.id}
            />
          ))}
        </ul>
      </div>
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
      <button type="button" className="retryButton" onClick={this.getProducts}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  

  renderProductsListView = () =>{
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderProducts()
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

          const shopBgColor = isDarkTheme ? 'bgDark' : 'bgLight'
          const text = isDarkTheme ? 'textDark' : 'textLight'

          return (
            <div className={`shoppingBg-container ${shopBgColor}`}>
              <hr className={`${text}`} />
              {this.renderProductsListView()}
              
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}


export default Shop

