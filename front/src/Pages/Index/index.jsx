import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import Form from '../../Components/Form/form';

import './style.css'

function Index() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Cadastro de pessoas</h1>
      <div className="card">
        <Form />
      </div>
    </div>
  )
}

export default Index
