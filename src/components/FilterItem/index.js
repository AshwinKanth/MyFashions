import "./index.css"


const FilterItem = (props) =>{
    const {categoryOptions, activeCategoryId, changeCategory} = props

    const onChangeCategory = event => {
        changeCategory(event.target.value)
      }

      return(

    <div className="filters-container">
      <select
        className="sort-by-select"
        value={activeCategoryId}
        onChange={onChangeCategory} 
      >
        {categoryOptions.map(eachCategory => (
          <option key={eachCategory.categoryId} value={eachCategory.categoryId} className="select-option">
            {eachCategory.name}
          </option>
        ))}
      </select>
    </div>
      )
}




export default FilterItem