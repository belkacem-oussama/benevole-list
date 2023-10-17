import img from "../assets/img/luffy.png"

export default function Grid() {
  return (
    <div className="grid-container">
      <table>
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
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <span className="first-td">
              <img src={img} alt="" />
              <ul>
                <li>
                  <li>BELKACEM Oussama</li>
                </li>
                <li>oussama.blkc@gmail.com</li>
              </ul>
            </span>
          </td>
          <td>06.06.06.06.06</td>
          <td>Le 28 Septembre 2023</td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
            </svg>
          </td>
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
            </svg>
          </td>
        </tr>
      </table>
    </div>
  )
}
