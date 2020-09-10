import React, {useContext} from 'react'
import {Context} from '../context'

function SelectedCities(props) {
  const {removeSelectedCityAction} = useContext(Context)
  return (
    <div className="selected-cities" >
      <h2 className="title">Selected cities</h2>
      <ul className="selected-cities__list">
        {
          props.selectedCities.map((city, i) => {
            return <li className="list-item" key={i}> {city} <button className="btn delete-btn" onClick={() => removeSelectedCityAction(i)}>X</button> </li>
          })
        }
      </ul>

    </div>
  )
}

export default SelectedCities
