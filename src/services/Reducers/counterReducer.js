const initialstate = {
  count: 0
}

const counterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "INCREMENT" :
          return {
            ...state,
            count : state.count + 1
          }
        case "DECREMENT" :
          return {
            ...state,
            count : state.count - 1
          }
        case "RESET":
          return {
            count: 0
          };
          
          default:
            return state;
    }
};

 export default counterReducer;

