import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './Child1'
import Child2 from './Child2'
import { useRef,useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const[timer,setTimer] = useState(0);
  const[isRunning,setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if(isRunning){
    timerRef.current = setInterval(() => {
    setTimer(timer => timer+1);
    },1000)
}
 return () => clearInterval(timerRef.current) 
 },[isRunning])

const memoizedStart = useCallback(() =>{
    setIsRunning(true);
},[isRunning])

const memoizedStop = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerRef.current)
},[isRunning])

const memoizedReset = useCallback(() =>  {
  if(isRunning){
      setIsRunning(false)
  }
  setTimer(0);
  if(timerRef.current){
      memoizedStop();
  }
},[isRunning])

const memoizedIncrementHandler = useCallback(() => 
 {
    setCount(count+1);
  },[count])
const memoizedDecrementHandler = useCallback(() => 
  {
    setCount(count-1);
  },[count])
  return (
    <>
     <Child1 incrementHandler={memoizedIncrementHandler} decrementHandler={memoizedDecrementHandler} count={count}/>
     <Child2 timer={timer} start={memoizedStart} stop={memoizedStop} pause={memoizedReset}/>
    </>
  )
}

export default App
