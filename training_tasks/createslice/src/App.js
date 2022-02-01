
import './App.css';
import {useDispatch,useSelector} from "react-redux";

import{increment,decrement} from "./redux/slices/counterSlices";

function App() {
  const dispatch = useDispatch();
  const counter=useSelector(state => state?.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Counter : {counter?.value}</h1>
      <button onClick={()=>dispatch(increment())} >
        +
      </button>
      <button onClick={()=>dispatch(decrement())} >
        -
      </button>

    </div>
    
  );
}

export default App;
