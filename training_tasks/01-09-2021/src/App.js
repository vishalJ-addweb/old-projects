import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, ISLOGGED } from './actions/index';

export default function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1 className="text-muted text-center mxx-auto">Counter {counter}</h1>
      {isLogged ? <h2 className="blockquote-footer text-center mt-3">Valuable Info Is Here!!!!</h2> : null}
      <div className="text-center">
        <button className="btn btn-lg btn-primary mx-3" onClick={() => dispatch(INCREMENT())}>+</button>
        <button className="btn btn-lg btn-danger me-3" onClick={() => dispatch(DECREMENT())}>-</button>
        <button className="btn btn-lg btn-success" onClick={() => dispatch(ISLOGGED())}>{isLogged ? "Hide Info" : "Show Info"}</button>
      </div>

    </div>
  )
}