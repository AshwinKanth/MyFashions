import Shop from '../Shop'
import Footer from '../Footer';
import ThemeContext from '../../Context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgColor = isDarkTheme ? 'bgDark' : 'bgLight'
      const text = isDarkTheme ? 'textDark' : 'textLight'

      return (
        <>
        <div className={`homeBg-container ${homeBgColor}`}>
          <hr className={`${text}`} />
          <div className="heading-des-container">
            <h1 className={`homeHeading ${text}`}>DISCOVER OUR PRODUCTS</h1>
            <p className={`description ${text}`}>
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
        </div>
        <Shop />
        <Footer/>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

