import { BsTrash } from 'react-icons/bs';

export const TableItem = ({ address, fullName, email, id , university, company }) => {

    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td>{address}</td>
        <td>{university}</td>
        <td>{email}</td>
        <td className="text-end">
          <a href="#" className="btn btn-sm btn-neutral">Editar</a>
            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover">
            <BsTrash />
            </button>
        </td>
      </tr>
    )
  }