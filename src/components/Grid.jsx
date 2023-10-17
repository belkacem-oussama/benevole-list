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
            <i className="ri-delete-bin-6-line"></i>
          </td>
          <td>
            <i className="ri-pencil-line"></i>
          </td>
        </tr>
      </table>
    </div>
  )
}
