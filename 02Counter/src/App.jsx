import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <h2>Remove Value</h2>
      <button onClick={removeValue}>Remove Value {counter} </button>
      <footer>footer {counter} </footer>
    </>

  )
}

export default App
