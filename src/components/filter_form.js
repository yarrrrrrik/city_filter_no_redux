import React, {useEffect} from 'react'
import {useSelector, useDispatch, useStore} from 'react-redux'

import {getCityListAction, removeCityListAction} from '../redux/filter-form/filter_form_actions'
import {selectCityAction} from '../redux/selected-cities/selected_cities_actions'

function FilterForm() {
  const store = useStore()
  const dispatch = useDispatch()
  const selectCityList = useSelector(state => state.filterForm.cityList)

  let inputValue = ''
  
  function get(e) {
    inputValue = e.target.value
    if (inputValue.length > 2) {
      dispatch(getCityListAction(inputValue))
    }else{
      dispatch(removeCityListAction())
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
          selectCityList.map((city, i) => {
            return <li className="list-item" key={i}> {city} <button className="btn add-btn"  onClick={() => {
                dispatch(selectCityAction(city))
                dispatch(removeCityListAction())
                document.querySelector('.searchInput').value = ''
              }}>+</button> </li>
          })
        }
      </ul>
    </div>
  )
}

export default FilterForm
