import  {Component} from "react"
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {MdMenu} from 'react-icons/md'
// import {AiOutlineClose} from 'react-icons/ai'
import { BsMoon, BsBrightnessHigh } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { GrFavorite } from 'react-icons/gr';
import { TbShoppingBag } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';

import ThemeContext from "../../Context/ThemeContext"

import "./index.css"



class Header extends Component{
    state = {isToggle: false}

    onClickMenuIcon = () => {
        this.setState(prevState => ({
          isToggle: !prevState.isToggle,
        }))
      }

      
    render(){
        const {isToggle} = this.state
        return(
            <ThemeContext.Consumer>
            {value =>{
                const {isDarkTheme,toggleTheme,cartList} = value

    
                const onChangeTheme = () => {
                    toggleTheme();
                  };


                  const renderCartItemsCount = () =>{
                    const cartItemsCount = cartList.length

                    return(
                        <>
                            {cartItemsCount > 0 ? (
                              <span className="cart-count-badge">{cartList.length}</span>
                            ) : null}
                        </>
                    )
                  }
    
                const headerBgColor = isDarkTheme ? 'bgDark' : 'bgLight';
                const text = isDarkTheme ? 'textDark' : 'textLight';
                const iconsColor = isDarkTheme ? 'textDark' : 'textLight';

    
                return(
                    <div className={`header-container ${headerBgColor}`}>
                        <div className="topHeader-container">
                            <div className="nav-logo-container">
                                <nav className="small-nav-container">
                                    <button
                                            type="button"
                                            className="menu-icon"
                                            onClick={this.onClickMenuIcon}
                                        >
                                        <MdMenu className="nav-text" size={20} />
                                    </button>
                                    {isToggle && (
                                        <ul className="small-nav-Items-container">
                                            <Link to="/" className={`nav-links ${text}`}>
                                                <li className="navItem">HOME</li>
                                            </Link>
                                            <Link to="/shop" className={`nav-links ${text}`}>
                                                <li className="navItem">SHOP</li>
                                            </Link>
                                            <Link to="/cart" className={`nav-links ${text}`}>
                                                <li className="navItem">CART {renderCartItemsCount()}</li>
                                            </Link>
                                            <Link to="/about" className={`nav-links ${text}`}>
                                                <li className="navItem">ABOUT</li>
                                            </Link>
                                            <Link to="/contact" className={`nav-links ${text}`}>
                                                <li className="navItem">CONTACT US</li>
                                            </Link>
                                        </ul>
                                        )}
                                    </nav>
                                <Link to="/" className="logo">
                                    <img
                                    src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1713597113/Logo_vfw1bu.png"
                                    className="logo"
                                    alt="logo"
                                    />
                                </Link>
                            </div>
                            <h1 className={`font-effect-neon ${text}`}>My Fashion</h1>
                            <div className="icons-container">
                                    <Popup
                                        trigger={
                                            <button className="button"><IoSearch className={`icons ${iconsColor}`}/></button>
                                        }
                                        position="bottom left"
                                        closeOnDocumentClick
                                        >
                                        <input type="search" className={`search-box ${text}`} placeholder="search"/>
                                    </Popup>
                                <Link to="/favourite" className="navLink">
                                    <GrFavorite className={`icons ${iconsColor}`} />
                                </Link>
                                <Link to="/cart" className="navLink">
                                    <TbShoppingBag className={`icons ${iconsColor}`} />
                                </Link>
                                <CgProfile className={`icons mobileIcon ${iconsColor}`} />
                                <button className="button" onClick={onChangeTheme}>
                                    {isDarkTheme ? (
                                    <BsBrightnessHigh color="#ffffff" className="icons"/>
                                    ) : (
                                    <BsMoon className="icons" />
                                    )}
                                </button>
                                <select className="select mobileIcon">
                                    <option className="option" value="Eng">
                                    Eng
                                    </option>
                                    <option className="option" value="Tel">
                                    Tel
                                    </option>
                                    <option className="option" value="Hin">
                                    Hin
                                    </option>
                                </select>
                            </div>
                        </div>
                        <nav className="nav-container">
                            <ul className="nav-items-container">
                                <Link to="/" className={`nav-links ${text}`}>
                                    <li className="navItem">HOME</li>
                                </Link>
                                <Link to="/shop" className={`nav-links ${text}`}>
                                    <li className="navItem">SHOP</li>
                                </Link>
                                <Link to="/cart" className={`nav-links ${text}`}>
                                    <li className="navItem">CART {renderCartItemsCount()}</li>
                                </Link>
                                <Link to="/about" className={`nav-links ${text}`}>
                                    <li className="navItem">ABOUT</li>
                                </Link>
                                <Link to="/contact" className={`nav-links ${text}`}>
                                    <li className="navItem">CONTACT US</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
        )
    }
}




export default Header