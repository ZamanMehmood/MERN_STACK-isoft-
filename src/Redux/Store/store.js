import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducers from '../Reducers/rootReducers';

const middlewares = [thunk];   // To use more middlewares just import the middleware and add in this array seperated by comma
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))
export const store = createStore(
    rootReducers,
    // undefined,  
    composedEnhancers
    )
export default store