import ThemeContext from '../../Context/ThemeContext'
import './index.css'

const Filters = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const text = isDarkTheme ? 'textDark' : 'textLight'

      return (
        <div className="filters-container">
          <h1 className={`filters-heading ${text}`}>Filter</h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Filters