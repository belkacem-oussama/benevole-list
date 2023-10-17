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
          <td>John Doe John-Doe@unknown.com</td>
          <td>06.06.06.06.06</td>
          <td>Le 28 Septembre 2023</td>
          <td>Supprimer</td>
          <td>Modifier</td>
        </tr>
      </table>
    </div>
  )
}
