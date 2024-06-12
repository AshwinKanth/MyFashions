import { useState,useEffect } from 'react'

import { FaAngleLeft ,FaAngleRight} from "react-icons/fa";

import ThemeContext from '../../Context/ThemeContext'
import "./index.css"
import ProductCard from '../ProductCard';


const Shop = () =>{
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [recommendations,setRecommendations] = useState("")
  const [isToggle, setToggle] = useState(false)

  const getProducts = () => {

    if (!category) {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((d) => {
          setProducts(d);
          console.log(d);
        });
    }
     else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((d) => {
          setProducts(d);
          console.log(d);
        });
    }
  }


  const onClickMenuIcon = () => {
        setToggle((prevState) => !prevState)
      }


  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  useEffect(() => {
    getProducts();
  }, [category]);

const handleRecommendationsChange = event =>{
  setRecommendations(event.target.value)
}

useEffect(() =>{
  getProducts();
},[recommendations])



  return(
    <ThemeContext.Consumer>
      {value =>{
        const {isDarkTheme} = value

        const shopBgColor = isDarkTheme ? 'bgDark' : 'bgLight'
        const text = isDarkTheme ? 'textDark' : 'textLight'

        return(
          <>
          <div className={`main-container ${shopBgColor}`}>
            <div className='all-filters-container'>
            <p className={`totalItems ${text}`}>{products.length} ITEMS</p>
              <div className="filters-container">
                <div>
                  {isToggle ? (
                    <button
                      type="button"
                      className={`filterIcon ${text}`}
                      onClick={onClickMenuIcon}
                    >
                    <FaAngleLeft className={`filterText ${text}`} /> HIDE FILTERS
                    </button>
                    ):(
                    <button
                      type="button"
                      className={`filterIcon ${text}`}
                      onClick={onClickMenuIcon}
                    >
                    <FaAngleRight className={`filterText ${text}`}  /> SHOW FILTERS
                    </button>
                  )}
                </div>
                  {isToggle &&(
                    <div className="filter-container">
                      <h3>Category</h3>
                      <select onChange={handleCategoryChange} value={category}>
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                      </select>
                      <h3>Gender</h3>
                      <select>
                      <option value="">All</option>
                        <option>Men</option>
                        <option>Women </option>
                        <option>Men & Women</option>
                        <option>Boys</option>
                        <option>Girls</option>
                      </select>
                      <h3>Computer Accessories</h3>
                      <select>
                      <option value="">All</option>
                        <option>Remote Controllers</option>
                        <option>Laptop Accessories</option>
                        <option>Computer Peripherals</option>
                        <option>ProcessorCoolers</option>
                        <option>Computer Power Suppllies</option>
                      </select>
                      <h3>Jewelery</h3>
                      <select>
                      <option value="">All</option>
                        <option>Alloy</option>
                        <option>Brass</option>
                        <option>Copper</option>
                        <option>Crystal</option>
                        <option>Stone</option>
                      </select>
                    </div>
                    )}
                  <div>
                </div>
                </div>
                  <div className='recomendations-container'>
                      <select onChange={handleRecommendationsChange} value={recommendations} className='sort-by-select'>
                        <option className="select-option" value="asc">Recommended</option>
                        <option className="select-option" value="desc">Newest First</option>
                        <option className="select-option" value="desc">Popular</option>
                        <option className="select-option" value="desc">Price: High To Low</option>
                        <option className="select-option" value="desc">Price: Low To High</option>
                      </select>
                  </div>
            </div>
                <div className={`product-container ${shopBgColor}`}>
                  {products ? (
                    products.map((data) => <ProductCard key={data.id} productCardDetails={data} />)
                    ) : (
                      <h1>No Products Found</h1>
                    )}
                </div>
          </div>
        </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Shop


