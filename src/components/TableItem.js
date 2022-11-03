import { BsTrash } from 'react-icons/bs';

export const TableItem = ({ address, fullName, email, id , university, setUser, onDelete}) => {

    return (
      <tr key={id}>
        <td>{fullName}</td>
        <td>{address}</td>
        <td>{university}</td>
        <td>{email}</td>
        <td className="text-end">
            <button className="btn btn-sm btn-neutral" onClick={() => { setUser(id); }}> Editar </button>
            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => { onDelete('Estas seguro de querer eliminar el usuario seleccionado?'); }}>
            <BsTrash />
            </button>
        </td>
      </tr>
    )
  }