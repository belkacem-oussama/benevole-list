import { useState } from "react"
import Grid from "../components/Grid.jsx"
import Popup from "../components/Popup.jsx"

export default function Home() {
  const [displayPopUp, setDisplayPopUp] = useState(false)

  return (
    <div className="home-container">
      {displayPopUp && (
        <Popup displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp} />
      )}
      <Grid displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp} />
    </div>
  )
}
