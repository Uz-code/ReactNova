import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';
import { LoadingComponent } from './LoadingComponent';
export const DataGrid = ({ options, setMaxResultados, forceUpdate, onError , setUser ,onDelete , onDesactivar, onSelectUser , listUsers , hasActions, isSelectable , columns}) => {

    let { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError);
       
    const NombreIsVisible = columns.find( (column) => column.field == 'SCSUser_Nombre' ).show;
    
    const EmailVisible = columns.find( (column) => column.field == 'SCSUser_Email' ).show;
    const DireccionVisible = columns.find( (column) => column.field == 'SCSUser_Direccion' ).show;
    const GeneroVisible = columns.find( (column) => column.field == 'SCSUser_Genero' ).show;
    const AccionesVisible = columns.find( (column) => column.field == 'Acciones' ).show;
    
    const visibilidad = { NombreIsVisible, EmailVisible, DireccionVisible, GeneroVisible, AccionesVisible };


    console.log(users);
    return (
        <>
        <LoadingComponent loading={isLoading} type="loader-1" centerTable= {true} >
        { 
        
            users.map( (user,index) => (

                <TableItem 
                    key= {index}
                    { ...user }
                    setUser = {setUser}
                    onDelete = {onDelete}
                    onDesactivar = {onDesactivar}
                    onSelectUser = {onSelectUser}
                    listUsers = {listUsers}
                    hasActions = {hasActions}
                    isSelectable = { isSelectable }
                    columns = { columns }
                />
                
            ))
        }
        
        {
            users != null && users.length == 0 && !isLoading &&
            <div className="center flex text-muted" >
                <span>No hay resultados</span>
            </div>
        }
        </LoadingComponent>
        
            
        </>
    )
}