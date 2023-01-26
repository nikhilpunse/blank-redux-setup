import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import {increment,decrement,incrementByAmount} from './app/counterSlice'

const App = () => {
  const counter = useSelector(state=>state.counter.value)
  const dispatch = useDispatch()
  // const [counter,setCounter] = useState(0)
  
  const increamentCounter = ()=>{
    // setCounter(counter+1)
    dispatch(increment())
  }
  
  const decreamentCounter = ()=>{
    // setCounter(counter-1)
    dispatch(decrement())
  }

  

  return (
    <div className='container'>
      <div>Counter {counter}</div>
      <button onClick={()=>increamentCounter()} >increament</button>
      <button onClick={()=>decreamentCounter()}>decreament</button>
      <button onClick={()=>dispatch(incrementByAmount(25))}>Increment by 25</button>
    </div>
  )
}

export default App