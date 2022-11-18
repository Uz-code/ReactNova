import { BsArchive, BsTrash } from 'react-icons/bs';

export const TableItem = ({ address, fullName, email, id , university, setUser, onDelete ,listUsers, hasActions, isSelectable, onSelectUser}) => {
    return (
      <tr key={id}  className={` ${listUsers != null && (listUsers.some( user => user.id === id ) ? 'user-selected': 'selectable')}` } {...(isSelectable && listUsers)   &&  { onClick: () => onSelectUser( fullName,id) } } >
        <colgroup> 
          <col span="1" style={{width: "16%"}} />
          <col span="1" style={{width: "0*"}} />
          <col span="1" style={{width: "0*"}} />
          <col span="1" style={{width: "20%"}} /> 
          { hasActions &&  
          <col span="1" style={{width: "16%"}} /> 
          }
        </colgroup>
        <td scope="col">{fullName}</td>
        <td scope="col">{address}</td>
        <td scope="col">{university}</td>
        <td scope="col">{email}</td>
        
        { hasActions && 
        <td className="last-child">
            <button className="btn btn-sm btn-neutral" onClick={() => { setUser(id); }}> Editar </button>
            <button className="btn btn-sm btn-neutral" onClick={() => { onDelete('Estas seguro de querer desactivar el usuario seleccionado?'); }}>
              <BsArchive/>
            </button>
            <button type="button" className="btn btn-sm btn-square btn-neutral text-danger-hover" onClick={() => { onDelete('Estas seguro de querer eliminar el usuario seleccionado?'); }}>
              <BsTrash/>
            </button>
          </td>
        }

      
      </tr>
    )
  }