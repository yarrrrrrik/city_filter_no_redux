import React, {useContext} from 'react'
import {Context} from '../context'

function FilterForm(props) {

  const {getCityListAction, removeCityListAction, selectCityAction} = useContext(Context)


  let inputValue = ''

  function get(e) {
    inputValue = e.target.value
    if (inputValue.length > 2) {
      getCityListAction(inputValue)
    }else{
      removeCityListAction()
    }
  }

  return (
    <div className="filter-form" >
      <h2 className="filter-form__title title">Find city </h2>
      <form action="">
        <input type="text" className="searchInput" placeholder="City name" onChange={get}/>
      </form>
      <ul className="filter-form__list">
        {
          props.cityList.map((city, i) => {
            return <li className="list-item" key={i}> {city} <button className="btn add-btn"  onClick={() => {
                removeCityListAction()
                selectCityAction(city)
                document.querySelector('.searchInput').value = ''
              }}>+</button> </li>
          })
        }
      </ul>
    </div>
  )
}

export default FilterForm

// dispatch(selectCityAction(city))
