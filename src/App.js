import React from 'react'
import './App.css'
import Input from './components/Input'
import CardList from './components/CardList'
import { useCitiesList } from './components/hooks/useCitiesList'

const App = () => {
  const [state, dispatch] = useCitiesList()
  const { inputValue, citiesList, editingCity } = state
  return (
    <div className='Main'>
      <Input
        dispatch={dispatch}
        inputValue={inputValue}
        editingCity={editingCity}
      />
      <CardList citiesList={citiesList} dispatch={dispatch} />
    </div>
  )
}

export default App
