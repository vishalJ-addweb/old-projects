import './App.css';
import React from 'react'
import {INCREMENT, DECREMENT} from './counterReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function App(){
  const counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

return (
  <div className="container">
      <h1 className="text-muted text-center mxx-auto">Counter {counter}</h1>
      <div className="text-center">
      <button className="btn btn-lg btn-primary mx-3" onClick={()=>dispatch(INCREMENT())}>+</button>
      <button className="btn btn-lg btn-danger me-3" onClick={()=>dispatch(DECREMENT())}>-</button>
      </div>
      
    </div>
  )
}