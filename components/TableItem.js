import { BsArchive, BsTrash } from 'react-icons/bs';

export const TableItem = ({ address, fullName, email, id , university, setUser, onDelete ,listUsers, hasActions, isSelectable, onSelectUser}) => {

  const isSelected = listUsers && listUsers.some( (user) => user.id === id );

    return (
      <tr key={id}  className={` ${listUsers != null && (isSelected ? 'user-selected': 'selectable')}` } >
        <colgroup> 
          <col span="1" style={{width: "16%"}} />
          <col span="1" style={{width: "0*"}} />
          <col span="1" style={{width: "0*"}} />
          <col span="1" style={{width: "20%"}} /> 
          { hasActions &&  
          <col span="1" style={{width: "16%"}} /> 
          }
        </colgroup>
        <td scope="col"  {...(isSelectable)   &&  { onClick: () => onSelectUser( fullName,id) } }>{fullName}</td>
        <td scope="col"  {...(isSelectable)   &&  { onClick: () => onSelectUser( fullName,id) } }>{address}</td>
        <td scope="col"  {...(isSelectable)   &&  { onClick: () => onSelectUser( fullName,id) } }>{university}</td>
        <td scope="col"  {...(isSelectable)   &&  { onClick: () => onSelectUser( fullName,id) } }>{email}</td>
        
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