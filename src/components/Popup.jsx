import { useState } from "react"
import Input from "./Input.jsx"

export default function PopUp({ displayPopUp, setDisplayPopUp }) {
  const [displayInput, setDisplayInput] = useState(false)

  const [iconsState, setIconsState] = useState([
    { key: "1", isSaving: false },
    { key: "2", isSaving: false },
    { key: "3", isSaving: false },
    { key: "4", isSaving: false },
  ])

  const [inputValue, setInputValue] = useState([
    { key: "1", value: "Harry Potter" },
    { key: "2", value: "harry.potter@example.com" },
    { key: "3", value: "123-456-7890" },
    { key: "4", value: "Wizard" },
  ])

  const handleOnSave = (key) => {
    setDisplayInput(!displayInput)
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
    <div className="popup-container">
      <div className="popup-container-infos">
        <h3>Edit</h3>
        <span className="title" key="1">
          <span>Identifiant :</span>
          <span>
            {iconsState.find((icon) => icon.key === "1")?.isSaving ? (
              <Input
                value={inputValue.find((item) => item.key === "1").value}
                onChange={(e) => {
                  const newValue = e.target.value
                  setInputValue((prevInputValue) => {
                    const updatedInputValue = prevInputValue.map((item) => {
                      if (item.key === "1") {
                        return { ...item, value: newValue }
                      }
                      return item
                    })
                    return updatedInputValue
                  })
                }}
              />
            ) : (
              "Harry Potter"
            )}
          </span>
          <span>{renderSaveIcon("1")}</span>
        </span>
        <span className="title">
          <span>Mail : </span>
          <span>
            {iconsState.find((icon) => icon.key === "2")?.isSaving ? (
              <Input
                value={inputValue.find((item) => item.key === "2").value}
                onChange={(e) => {
                  const newValue = e.target.value
                  setInputValue((prevInputValue) => {
                    const updatedInputValue = prevInputValue.map((item) => {
                      if (item.key === "2") {
                        return { ...item, value: newValue }
                      }
                      return item
                    })
                    return updatedInputValue
                  })
                }}
              />
            ) : (
              "harry.potter@example.com"
            )}
          </span>
          <span>{renderSaveIcon("2")}</span>
        </span>
        <span className="title">
          <span>Phone : </span>
          <span>
            {iconsState.find((icon) => icon.key === "3")?.isSaving ? (
              <Input
                value={inputValue.find((item) => item.key === "3").value}
                onChange={(e) => {
                  const newValue = e.target.value
                  setInputValue((prevInputValue) => {
                    const updatedInputValue = prevInputValue.map((item) => {
                      if (item.key === "3") {
                        return { ...item, value: newValue }
                      }
                      return item
                    })
                    return updatedInputValue
                  })
                }}
              />
            ) : (
              "123-456-7890"
            )}
          </span>
          <span>{renderSaveIcon("3")}</span>
        </span>
        <span className="title">
          <span>Job : </span>
          <span>
            {iconsState.find((icon) => icon.key === "4")?.isSaving ? (
              <Input
                value={inputValue.find((item) => item.key === "4").value}
                onChange={(e) => {
                  const newValue = e.target.value
                  setInputValue((prevInputValue) => {
                    const updatedInputValue = prevInputValue.map((item) => {
                      if (item.key === "4") {
                        return { ...item, value: newValue }
                      }
                      return item
                    })
                    return updatedInputValue
                  })
                }}
              />
            ) : (
              "Wizard"
            )}
          </span>
          <span>{renderSaveIcon("4")}</span>
        </span>
      </div>
      <div className="popup-container-buttons">
        <button
          className="green"
          onClick={() => {
            setDisplayPopUp(false)
          }}
        >
          Valider
        </button>
        <button
          className="black"
          onClick={() => {
            setDisplayPopUp(false)
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  )
}
