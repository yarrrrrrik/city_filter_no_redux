import {GET_CITY_LIST, REMOVE_CITY_LIST} from './filter_form_types'

export const getCityListAction = (query) => {
  return async function getCityListRequest(dispatch){
    let api_url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${query}&limit=5&offset=0&hateoasMode=false`
    let citiesRequest = await fetch(api_url)
    let citiesResponse = await citiesRequest.json()
    let cityList = citiesResponse.data.map((item) => (item.city))
    dispatch({type:GET_CITY_LIST,cityList})
  }
}

export const removeCityListAction = () => ({type:REMOVE_CITY_LIST})
