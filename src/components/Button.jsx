import React from "react"

export default function Button({ onClick }) {
  return (
    <div className="button-component">
      <button onClick={onClick}>Afficher plus...</button>
    </div>
  )
}
