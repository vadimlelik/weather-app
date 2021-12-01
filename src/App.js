import React from 'react'
import './App.css'
import Input from './components/Input'
import CardList from './components/CardList'
import { useCitiesList } from './components/hooks/useCitiesList'
export const globalContext = React.createContext() /* создание Context */

const App = () => {
  const [state, dispatch] = useCitiesList()
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <div className='Main'>
        <Input />
        <CardList />
      </div>
    </globalContext.Provider>
  )
}

export default App
