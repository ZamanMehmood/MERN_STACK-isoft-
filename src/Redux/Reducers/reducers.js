import { WEATHER_APP } from "../Actions/actionType";

const initialState = { 
  weather: {}
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
     case WEATHER_APP:
        return{
     ...state,
     weather: action.payload 
        }
    
    default:
      return state;
  }
};
export default weatherReducer;