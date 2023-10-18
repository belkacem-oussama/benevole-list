import Home from "./pages/Home.jsx"
import "../src/assets/styles/import.scss"
import "remixicon/fonts/remixicon.css"
import { Route, Routes } from "react-router-dom"
import Edit from "./pages/Edit.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
