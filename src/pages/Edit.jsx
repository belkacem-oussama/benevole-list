import { useState } from "react"
import { useParams } from "react-router-dom"

import users from "../assets/json/user.json"

export default function Edit() {
  const { id } = useParams()
  const element = users.characters.find(
    (user) => parseInt(user.id) === parseInt(id)
  )

  const [iconsState, setIconsState] = useState([
    { key: "1", isSaving: false },
    { key: "2", isSaving: false },
    { key: "3", isSaving: false },
    { key: "4", isSaving: false },
  ])

  const handleOnSave = (key) => {
    setIconsState((prevState) =>
      prevState.map((icon) =>
        icon.key === key ? { ...icon, isSaving: !icon.isSaving } : icon
      )
    )
  }

  const renderSaveIcon = (key) => {
    const icon = iconsState.find((icon) => icon.key === key)
    const isSaving = icon ? icon.isSaving : false

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        onClick={() => handleOnSave(key)}
      >
        <path
          d={
            isSaving
              ? "M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"
              : "M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"
          }
        />
      </svg>
    )
  }

  return (
    <div className="edit-container">
      <div className="edit-container-left">
        <h1>Edit</h1>
        <span className="edit-item" key="1">
          <h3>Identité :</h3>
          <p>{element.name}</p>
          {renderSaveIcon("1")}
        </span>
        <span className="edit-item" key="2">
          <h3>Job :</h3>
          <p>{element.occupation}</p>
          {renderSaveIcon("2")}
        </span>
        <span className="edit-item" key="3">
          <h3>Adresse mail :</h3>
          <p>{element.mail}</p>
          {renderSaveIcon("3")}
        </span>
        <span className="edit-item" key="4">
          <h3>Numéro de téléphone :</h3>
          <p>{element.phone}</p>
          {renderSaveIcon("4")}
        </span>
      </div>
      <div className="edit-container-right">right</div>
    </div>
  )
}
