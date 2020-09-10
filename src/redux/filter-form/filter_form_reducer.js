import {GET_CITY_LIST, REMOVE_CITY_LIST} from './filter_form_types'
import {loadState} from '../../localStorage'

const initial_state = {
  cityList:[],
}

export const filterFormReducer = (state = initial_state, action) => {
  if (state === initial_state){
    loadState() ? state = loadState().state.filterForm : state = initial_state
  }
  switch (action.type){
    case GET_CITY_LIST:
      return {...state,cityList:[...action.cityList]}
    case REMOVE_CITY_LIST:
      return {...state,cityList:[]}
    default:
      return {...state}
  }
}
