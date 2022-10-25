import { WEATHER_APP } from "./actionType";
import axios from "axios"


export const weather_App =(data)=>{
  return {
    type: WEATHER_APP,
    payload: data
  };
}
 
  export const weather_App_Async = (param) =>async (dispatch)=> {
        const api = {
            key: "199c73ad812757e8cb1f8440640ca487",
            base: "https://api.openweathermap.org/data/2.5/",
          };
          // api call 
      const data = await  axios.get(`${api.base}weather?q=${param}&units=metric&APPID=${api.key}`);
       console.log(data)   
          dispatch(weather_App(data))


  };