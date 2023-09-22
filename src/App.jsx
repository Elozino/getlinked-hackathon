import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register/Register"
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
