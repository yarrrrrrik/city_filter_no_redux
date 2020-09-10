import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {removeSelectedCityAction} from '../redux/selected-cities/selected_cities_actions'


function SelectedCities() {
  const selectSelectedCities = useSelector(state => (state.selectedCities.selectedCitiesArray))
  const dispatch = useDispatch()
  return (
    <div className="selected-cities" >
      <h2 className="title">Selected cities</h2>
      <ul className="selected-cities__list">
        {
          selectSelectedCities.map((city, i) => {
            return <li className="list-item" key={i}> {city} <button className="btn delete-btn" onClick={ () => dispatch(removeSelectedCityAction(i)) }>X</button> </li>
          })
        }
      </ul>

    </div>
  )
}

export default SelectedCities
