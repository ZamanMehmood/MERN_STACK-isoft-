import React, { useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';
import { weather_App_Async } from "../Redux/Actions/actions";

const HomePage = () => {
  const weatherData = useSelector(state=>state.weatherReducer.weather)
  console.log('weather',weatherData)
  const [value, setValue]= useState("");         // my value state

  const dispatch = useDispatch();      
  
  const handleChange = (e) => {
    setValue(e.target.value);                   
    // console.log("value",value) 
  }

  const handleClick =() => {
    // console.log("this is handle click")
    dispatch(weather_App_Async(value))             // to dipatch the action
  }

  return (
    <div>
      <h2>Weather App</h2>
      <input type="text" className="main-input m-2" onChange={handleChange} value={value}/>
      <button className="btn btn-primary"  onClick={handleClick}>Find</button>
        <h1>{weatherData?.data?.base}</h1>
    </div>
  );
};

export default HomePage;
      {/* <h1>{weatherData?.data?.base}</h1> */}