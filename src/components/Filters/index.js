import { Component } from 'react'

import { FaAngleLeft ,FaAngleRight} from "react-icons/fa";

import FilterItem from '../FilterItem';
import ThemeContext from '../../Context/ThemeContext'
import "./index.css"

class Filters extends Component{
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
        {value => {
          const {isDarkTheme} = value

          const text = isDarkTheme ? 'textDark' : 'textLight'

          return (
            <div className="filters-container">
              <nav className='nav-filters-container'>
              {isToggle ? (
                <button
                type="button"
                className="filterIcon"
                onClick={this.onClickMenuIcon}
              >
              <FaAngleLeft className="filterText" /> HIDE FILTERS
              </button>
              ):(
                <button
                  type="button"
                  className="filterIcon"
                  onClick={this.onClickMenuIcon}
                >
                <FaAngleRight className="filterText"  /> SHOW FILTERS
                </button>
              )}

                {isToggle &&(
                  <div className='filter-details-container'>
                    <p className={`sort-by-select ${text}`}>Category</p>
                    <FilterItem/>
                    <p className="sort-by-select">Rating</p>
                    <select className='select-option'>
                      <option className='select-option'>4 Above</option>
                      <option>3 Above</option>
                      <option>2 Above</option>
                    </select>
                  </div>
                )}
              </nav>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}


export default Filters