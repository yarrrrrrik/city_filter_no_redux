import {combineReducers} from 'redux'

import {filterFormReducer} from './filter-form/filter_form_reducer'
import {selectedCitiesReducer} from './selected-cities/selected_cities_reducer'

export const rootReducer = combineReducers({
  filterForm:filterFormReducer,
  selectedCities:selectedCitiesReducer
})
