import React, { useContext } from 'react'
import Card from '../Card'

import { globalContext } from '../../App'

const CardList = () => {
  const {
    state: { citiesList }
  } = useContext(globalContext)
  return (
    <div className='CardLIst'>
      {citiesList.map((cities) => {
        return <Card key={cities} cities={cities} />
      })}
    </div>
  )
}

export default CardList
