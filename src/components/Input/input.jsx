import React, { useRef } from 'react'
import '../../App.css'

const Input = ({ dispatch, inputValue, editingCity }) => {
  const inputRef = useRef(null)

  const handleOnChange = (event) => {
    dispatch({
      type: 'CHANGE_INPUT_VALUE',
      payload: event.target.value
    })
  }

  const handleOnAdd = (event) => {
    if (inputValue.length) {
      dispatch({
        type: 'ADD_CITY',
        payload: inputValue
      })
      dispatch({
        type: 'RESET_INPUT_VALUE'
      })
      inputRef.current.focus()
    }
  }

  const handleOnDone = (event) => {
    if (inputValue.length) {
      dispatch({
        type: 'EDET_CITY_DONE',
        payload: inputValue
      })
      dispatch({
        type: 'RESET_INPUT_VALUE'
      })
      inputRef.current.focus()
    }
  }

  return (
    <div className='InputWrap'>
      <input
        className='Input'
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      {editingCity ? (
        <button className='InputButton' onClick={handleOnDone}>
          DONE
        </button>
      ) : (
        <button className='InputButton' onClick={handleOnAdd}>
          +
        </button>
      )}
    </div>
  )
}

export default Input
