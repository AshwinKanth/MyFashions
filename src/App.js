import {Component} from "react"
import {Route, Switch} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./components/Home";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart"
import Footer from "./components/Footer";

import ThemeContext from "./Context/ThemeContext";

import './App.css';

class App extends Component{
  state = {isDarkTheme: false,cartList:[]}

  
  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }


  removeAllCartItems = () =>{
    this.setState({cartList:[]})
  }
  
  removeCartItem = id =>{
    const {cartList} = this.state
    const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
    this.setState({cartList: updatedCartList})
  }


  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem => {
        if (id === eachItem.id) {
          const updatedQuantity = eachItem.quantity + 1
          return {...eachItem, quantity: updatedQuantity}
        }
        return eachItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachItem => eachItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (id === eachItem.id) {
            const updatedQuantity = eachItem.quantity - 1
            return {...eachItem, quantity: updatedQuantity}
          }
          return eachItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }



  addCartItem = prod => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === prod.id,
    )
    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (eachCartItem.id === productObject.id) {
            const updatedQuantity = eachCartItem.quantity + prod.quantity
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartList, prod]
      this.setState({cartList: updatedCartList})
    }
  }


  render(){
    const {isDarkTheme,cartList} = this.state
    return(
      <ThemeContext.Provider
        value={{isDarkTheme,toggleTheme: this.toggleTheme,
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,}}
      >
        <div>
        <Header/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/contact" component={Footer}/>
        </Switch>
      </div>
      </ThemeContext.Provider>
    )
  }
}


export default App;
