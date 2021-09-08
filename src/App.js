import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, signin } from "./Actions";

function App() {
  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={()=> dispatch(increment)} style={{padding: ' .5rem 1rem', marginRight:'2rem'}}>+</button>
      <button onClick={()=> dispatch(decrement)} style={{padding: ' .5rem 1rem'}}>-</button>
      <br />
      <button onClick={()=> dispatch(signin)} style={{padding: ' .5rem 1rem'}}>Sign In</button>
      {
        islogged && <p>This is very secret</p>
      }
    </div>
  );
}

export default App;
