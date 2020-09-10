import React,{useState, useEffect} from 'react';
import {Context} from './context'

import './App.scss';
import FilterForm from './components/filter_form'
import SelectedCities from './components/selected_cities'
import {saveState, loadState} from './localStorage'

function App() {

  const [countState,setCountState] = useState(0)

  const [filterFormState,setFilterFormState] = useState([])
  const [selectedCitiesState,setSelectedCitiesState] = useState([])


  //Чтобы не было infinite loop
  if(!countState){
    loadState('filterFormState') ? setFilterFormState(loadState('filterFormState')) : setFilterFormState([])
    setCountState(1)
  }

  if(countState === 1){
    loadState('selectedCitiesState') ? setSelectedCitiesState(loadState('selectedCitiesState')) : setSelectedCitiesState([])
    setCountState(2)
  }

  useEffect(() => {
    saveState(filterFormState,'filterFormState')
 },[filterFormState])

   useEffect(() => {
     saveState(selectedCitiesState,'selectedCitiesState')
  },[selectedCitiesState])

  async function getCityListAction(query){
      let api_url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${query}&limit=5&offset=0&hateoasMode=false`
      let citiesRequest = await fetch(api_url)
      let citiesResponse = await citiesRequest.json()
      let cityList = citiesResponse.data.map((item) => (item.city))
      setFilterFormState([...cityList])
  }

  let removeCityListAction = () => {
    setFilterFormState([])
  }

  let selectCityAction = (selectedCity) => {
    let newSelectedCitiesArray = [...selectedCitiesState].concat(selectedCity)
    setSelectedCitiesState([...newSelectedCitiesArray])
  }

  let removeSelectedCityAction = (key) => {
    let newSelectedCitiesArray
    if (selectedCitiesState.length === 1) {
      newSelectedCitiesArray = [];
    }else {
      newSelectedCitiesArray = selectedCitiesState
      newSelectedCitiesArray.splice(key, 1)
    }
    setSelectedCitiesState([...newSelectedCitiesArray])
  }

  return (
    <Context.Provider value={{
       getCityListAction,
       removeCityListAction,
       selectCityAction,
       removeSelectedCityAction
     }}>
      <div className="App">
        <div className="container">
          <FilterForm cityList={filterFormState}/>
          <SelectedCities selectedCities={selectedCitiesState}/>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
