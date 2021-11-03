import React,{useState,useEffect} from "react";
import {API_KEY} from "../../setings";

export const useWeather = (cities)=>{

    const [data, setData]=useState(null)

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${API_KEY}&units=metric`)
            .then(res=>res.json())
            .then(setData)
    },[cities])
    return data
}