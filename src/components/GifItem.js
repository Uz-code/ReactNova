export const GifItem = ({ address, fullName, email, id }) => {

    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td>{address}</td>
        <td>{email}</td>
      </tr>
    )
  }