import React from 'react'
import './SearchBar.css'

function SearchBar(props) {

  const search = () => {
    props.onSearch(props.term)
  }

  const handleTermChange = (event) => {
    props.onSearch(event.target.value)
  }

  return (
    <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
        <button className="SearchButton">SEARCH</button>
      </div>
  )
}

export default SearchBar