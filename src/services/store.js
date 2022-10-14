// import { createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import allReducers from './Reducers';
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(allReducers,composeEnhancer(applyMiddleware(thunk)))
// export default store; 


import { createStore} from 'redux';
import allReducers from './Reducers';
const store = createStore(allReducers)
export default store; 