import Home from "./pages/Home.jsx"
import "../src/assets/styles/import.scss"
import "remixicon/fonts/remixicon.css"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
