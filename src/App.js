import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut
} from './services/Actions/index';


function App() {
  const counter = useSelector((state) => state.counterReducer.count);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const inc =() =>{
    dispatch(increment())
  }

  const dec =() =>{
    // dispatch(increment())
  dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>
         Hello World 
      </h1>
      <p>Counter</p>
      <h3>{counter}</h3>
      <button className="btn btn-primary m-2" onClick={() => inc()}>Increase</button>
      <button className="btn btn-secondary m-2" onClick={() => dispatch(reset())}>Reset</button>
      <button className="btn btn-warning m-2" onClick={() => dec()} disabled={counter===0}>Decrease</button>

      {/* <h2>Login & Logout Buttons</h2>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't more than % of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}

export default App;
