import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState (0)

  

  const addValue=()=>{
    counter++;
    setCounter(counter);
        console.log("Add Value Button Clicked",counter);
  }
  const decreaseValue=()=>{
    counter--;
    setCounter(counter);
        console.log("Decrease Value Button Clicked",counter);
  }
  return (
    <div>
    <h1>Counter Project</h1>
    <h2>Current Value:{counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={decreaseValue}>Decrease Value</button>
  </div>)
}

export default App
