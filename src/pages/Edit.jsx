import { useParams } from "react-router-dom"

import users from "../assets/json/user.json"

export default function Edit() {
  const { id } = useParams()

  const element = users.characters.find(
    (user) => parseInt(user.id) === parseInt(id)
  )

  if (element) {
    return (
      <div>
        <p>Nom: {element.name}</p>
        <p>Occupation: {element.occupation}</p>
      </div>
    )
  } else {
    return <div>Élément introuvable</div>
  }
}
