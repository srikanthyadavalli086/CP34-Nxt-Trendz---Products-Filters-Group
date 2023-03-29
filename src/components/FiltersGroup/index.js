import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    changeInput,
    searchDataBase,
    onClickCategory,
    onClickRating,
    titleSearch,
    clearFilters,
  } = props

  const onChangeSearchInput = event => {
    changeInput(event.target.value)
  }

  const searchDb = e => {
    if (e.key === 'Enter') {
      searchDataBase()
    }
  }

  return (
    <div className="filters-group-container">
      <div>
        <input
          type="search"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={searchDb}
          value={titleSearch}
        />
      </div>
      <h1>Category</h1>
      <ul className="ul">
        {categoryOptions.map(each => (
          <li className="li" key={each.categoryId}>
            <button
              onClick={() => onClickCategory(each.categoryId)}
              type="button"
            >
              <p>{each.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="ul">
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button type="button" onClick={() => onClickRating(each.ratingId)}>
              <img
                className="li-image"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />
            </button>
          </li>
        ))}
      </ul>

      <button type="button" className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
