import React from 'react';
import './App.scss';
import FilterForm from './components/filter_form'
import SelectedCities from './components/selected_cities'


function App() {
  return (
    <div className="App">
      <div className="container">
        <FilterForm/>
        <SelectedCities/>
      </div>
    </div>
  );
}

export default App;
