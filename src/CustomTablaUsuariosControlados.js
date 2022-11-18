
import { DataGrid } from './components/DataGrid';

export const CustomTablaUsuariosControlados = ( { options, setMaxResultados, forceUpdate , onError , onDelete , onAddUserToList , listUsers , setUser, hasActions, isSelectable } ) => {
    console.log("rendertable");
    return (
        <>
        <table className="table mt-8 mb-2" >
            <thead className="thead-light">
            <colgroup> 
                <col span="1" style={{width: "16%"}} />
                <col span="1" style={{width: "0*"}} />
                <col span="1" style={{width: "0*"}} />
                <col span="1" style={{width: "20%"}} /> 
                { hasActions &&  
          <col span="1" style={{width: "16%"}} /> 
                } 
            </colgroup>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Genero</th>
                    <th scope="col">E-mail</th>
                    { hasActions &&  
                    <th scope="col"></th>
                     } 
                </tr>
            </thead>
            <tbody className='table-body' style={{ minHeight: '250px', maxHeight: '100px', overflowX : 'hidden' }}>
            { 
                <DataGrid 
                    setMaxResultados={ setMaxResultados } 
                    options={ options }
                    forceUpdate = { forceUpdate }
                    onError={ (value) => onError(value)}
                    onDelete = { (value) => onDelete(value) }
                    onSelectUser={ (userName, id) => onAddUserToList(userName, id) }
                    listUsers = { listUsers }
                    setUser = { setUser }
                    hasActions = { hasActions }
                    isSelectable = { isSelectable }
                />
            }
            </tbody>
        </table>
         </>
    )
}