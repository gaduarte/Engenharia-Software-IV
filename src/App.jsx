import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './pages/homepage'
import { Route, Routes, BrowserRouter, NavLink} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <header>
            <h1>Lista App</h1>
            <nav>
              <ul>
                <li><NavLink to='/'>Home</NavLink></li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path='/' element={<HomePage />}/>
          </Routes>
        </BrowserRouter>
      

      </div>
    </>
  )
}

export default App
