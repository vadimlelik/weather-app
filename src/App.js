import React from 'react'
import './App.css'
import Input from './components/Input'
import { CardList } from './components/CardList'
import { ErrorBoundary } from './components/ErrorBoundary'
import { useCitiesList } from './components/hooks/useCitiesList'

export const globalContext = React.createContext() /* создание Context */

const App = () => {
  const [state, dispatch] = useCitiesList()
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <div className='Main'>
        <Input />(
        <ErrorBoundary>
          <CardList />
        </ErrorBoundary>
        )
      </div>
    </globalContext.Provider>
  )
}

export default App
