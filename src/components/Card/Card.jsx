import React, { memo, useContext } from 'react'
import '../../App.css'
import { useWeather } from '../hooks/useWeather'
import { globalContext } from '../../App'

const Card = memo(({ cities }) => {
  const data = useWeather(cities)
  const { state, dispatch } = useContext(globalContext)

  if (!data) return null
  const { name, weather, main } = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main

  const handleOnDelete = () => {
    dispatch({
      type: 'DELETE_CITY',
      payload: cities
    })
  }
  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: cities
    })
  }

  return (
    <div className='Card'>
      <div className='ActionButtonWrap'>
        <button className='ActionButton' onClick={handleOnDelete}>
          X
        </button>
        <button className='ActionButton' onClick={handleOnEdit}>
          Edit
        </button>
      </div>

      <div className='MainInfo'>
        <img
          className='icon'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='icon'
        />
        <div className='Title'>{name}</div>
        <div className='Description'>{description}</div>
        <div className='Temperature'>{temp.toFixed()}</div>
      </div>
      <div className='Information'>
        <div>Humidity :{humidity} </div>
        <div> Feels like: {feels_like}</div>
      </div>
    </div>
  )
})

export default Card
