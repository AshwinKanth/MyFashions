// import ThemeContext from '../../Context/ThemeContext'

import './index.css'


const Recommendations = props => {
  const {sortbyOptions, activeOptionId, changeSortby} = props

  const onChangeSortby = event => {
    changeSortby(event.target.value)
  }

  return (
    <div className="filters-container">
      <select
        className="sort-by-select"
        value={activeOptionId}
        onChange={onChangeSortby}
      >
        {sortbyOptions.map(eachOption => (
          <option key={eachOption.optionId} value={eachOption.optionId} className="select-option">
            {eachOption.displayText}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Recommendations