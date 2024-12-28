import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import PostalCodeForm from './components/PostalCodeForm'
import About from './components/About'
import PostalDataDisplay from './components/PostalDataDisplay'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostalCodeForm />} />
        <Route path="/results" element={<PostalDataDisplay />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
