
import { DataGrid } from './components/DataGrid';

export const CustomTablaUsuariosControlados = ( { options, setMaxResultados, forceUpdate , onError , onDelete , onDesactivar, onAddUserToList , listUsers , setUser, hasActions, isSelectable } ) => {

    const state = {
        columns: [
            { field: 'SCSUser_Nombre', title:'Nombre', width: '16%', show: true },
            { field: 'SCSUser_Direccion', title:'Direccion', width: '0*', show: true },
            { field: 'SCSUser_Genero', title:'Genero', width: '0*', show: true },
            { field: 'SCSUser_Email', title:'Email', width: '20%', show: true },
            { field: 'Acciones', title:'', width: '16%', show: true },
        ],
      };

    //const NombreIsVisible = state.columns.find( (column) => column.field == 'SCSUser_Nombre' ).show;

    //console.log(NombreIsVisible);

    /*const deleteFieldFromJson = (json, field) => {
        json.forEach( (item) => {
            delete item[field];
        });
    }

    !NombreIsVisible && deleteFieldFromJson(json, 'SCSUser_Nombre');
*/


    const ColGroup = ({ }) => {

        return (
            <colgroup>
                {state.columns.map((column, index) => (
                    <col key={index} style = { { width: column.width } } />
                ))}
            </colgroup>
        )
    }

    return (
        <>
        <table className="table" >
            <thead className="thead-light">
                <tr>
                {state.columns.map((column,i) => (
                    column.show && <th key={i} scope="col" >{column.title}</th>
                ))}

                </tr>
            </thead>
            <tbody className='table-body' style={{ overflowX : 'hidden' }}>
            { 
                <DataGrid 
                    setMaxResultados={ setMaxResultados } 
                    options={ options }
                    forceUpdate = { forceUpdate }
                    onError={ (value) => onError(value)}
                    onDelete = { (value) => onDelete(value) }
                    onDesactivar = { (value) => onDesactivar(value) }
                    onSelectUser={ (userName, id) => onAddUserToList(userName, id) }
                    listUsers = { listUsers }
                    setUser = { setUser }
                    hasActions = { hasActions }
                    isSelectable = { isSelectable }
                    columns = { state.columns }
                />
            }
            </tbody>
        </table>
         </>
    )
}