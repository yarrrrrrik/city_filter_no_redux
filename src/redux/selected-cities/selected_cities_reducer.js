import {SELECT_CITY, REMOVE_CITY} from './selected_cities_types'
import {loadState} from '../../localStorage'

const initial_state = {
  selectedCitiesArray:[]
}

export const selectedCitiesReducer = (state = initial_state, action) => {
  if (state === initial_state){
    loadState() ? state = loadState().state.selectedCities : state = initial_state
  }
  switch (action.type) {
    case SELECT_CITY:
      return {...state, selectedCitiesArray:state.selectedCitiesArray.concat(action.selectedCity)}
    case REMOVE_CITY:
      let newSelectedCitiesArray
      if (state.selectedCitiesArray.length === 1) {
        newSelectedCitiesArray = [];
      }else {
        newSelectedCitiesArray = state.selectedCitiesArray
        newSelectedCitiesArray.splice(action.key, 1)
      }
      return {...state, selectedCitiesArray:[...newSelectedCitiesArray]}
    default:
      return {...state}
  }
}
