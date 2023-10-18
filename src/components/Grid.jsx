import { useState } from "react"
import { Link } from "react-router-dom"

import Button from "./Button.jsx"
import Loader from "./Loader.jsx"

import monkey_d_luffy_img from "../assets/img/luffy.png"
import luke_skywalker_img from "../assets/img/luke-skywalker.webp"
import harry_potter_img from "../assets/img/harry-potter.jpeg"
import hermione_granger_img from "../assets/img/hermione-granger.jpeg"
import aragorn_img from "../assets/img/aragorn.jpeg"
import sherlock_holmes_img from "../assets/img/sherlock-holmes.jpeg"
import jon_snow_img from "../assets/img/jon-snow.webp"
import arya_stark_img from "../assets/img/aria-stark.webp"
import gandalf_img from "../assets/img/gandalf.webp"
import katness_everdeen_img from "../assets/img/katness-everdeen.jpeg"

import users from "../assets/json/user.json"

export default function Grid() {
  const [removedItems, setRemovedItems] = useState([])
  const [usersToShow, setUsersToShow] = useState(5)
  const [showButton, setShowButton] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleToggleRemove = (userId) => {
    if (removedItems.includes(userId)) {
      setRemovedItems((prevItems) =>
        prevItems.filter((item) => item !== userId)
      )
    } else {
      setRemovedItems((prevItems) => [...prevItems, userId])
    }
  }

  const isRemoved = (userId) => removedItems.includes(userId)

  const usersToDisplay = users.characters.filter((element, index) => {
    return index < usersToShow
  })

  const handleShowMore = () => {
    setIsLoading(true)
    setShowButton(false)

    setTimeout(() => {
      setUsersToShow(usersToShow + 5)

      if (usersToDisplay.length <= users.characters.length) {
        setIsLoading(false)
        setShowButton(true)
      }

      if (usersToDisplay.length + 5 >= users.characters.length) {
        setShowButton(false)
      }
    }, 2000)
  }

  const infosIMG = {
    monkey_d_luffy_img: monkey_d_luffy_img,
    harry_potter_img: harry_potter_img,
    luke_skywalker_img: luke_skywalker_img,
    hermione_granger_img: hermione_granger_img,
    aragorn_img: aragorn_img,
    sherlock_holmes_img: sherlock_holmes_img,
    jon_snow_img: jon_snow_img,
    arya_stark_img: arya_stark_img,
    gandalf_img: gandalf_img,
    katness_everdeen_img: katness_everdeen_img,
  }

  return (
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>Identité</th>
            <th>Téléphone</th>
            <th>Ajouté(e) le :</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.map((user) => (
            <tr
              key={user.id}
              className={isRemoved(user.id) ? "removed_item" : ""}
            >
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <span className="first-td">
                  <img src={infosIMG[user.img]} alt="" />
                  <ul>
                    <li>
                      {user.name} - <span>{user.occupation}</span>
                    </li>
                    <li>{user.mail}</li>
                  </ul>
                </span>
              </td>
              <td>{user.phone}</td>
              <td>{user.created_at}</td>
              <td onClick={() => handleToggleRemove(user.id)}>
                {isRemoved(user.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                  </svg>
                )}
              </td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  {!isRemoved(user.id) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
                    </svg>
                  )}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showButton ? (
        <Button onClick={handleShowMore} />
      ) : isLoading ? (
        <Loader color={"#32de84"} loading={isLoading} size={10} />
      ) : null}
      {!showButton && !isLoading && <p>...fin de transmission</p>}
    </div>
  )
}
