import React, {useRef, useState} from 'react';
import '../../App.css'

const Input = ({dispatch}) => {

    const [inputValue,setInputValue]=useState('')
    const inputRef = useRef(null)
    const handleOnChange = (event)=>{
        setInputValue(event.target.value)
    }
    const handleOnClick = (event)=>{
        if(inputValue.length){
            dispatch({
                type:'ADD_CITY',
                payload:inputValue
            })
            setInputValue('')
            inputRef.current.focus()
        }
    }
    return (
        <div className='InputWrap'>
            <input className='Input' onChange={handleOnChange} value={inputValue}  ref={inputRef}/>
            <button className='InputButton' onClick={handleOnClick}>+</button>
        </div>
    );
};

export default Input;