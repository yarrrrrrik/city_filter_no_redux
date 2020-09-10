import { SELECT_CITY, REMOVE_CITY } from './selected_cities_types'

export const selectCityAction = (city) => ({type:SELECT_CITY,selectedCity:city})
export const removeSelectedCityAction = (i) => ({type:REMOVE_CITY,key:i})
