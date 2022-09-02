import React from 'react'
import reactLogo from '../../Assets/react.svg'
import './Index.css'

// componenets
import Form from '../../Components/Form/Form'

function App() {
  return (
    <div className="App">
      <div className='App-side1'>
        <Form />
      </div>
      <div className='App-side2'>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
