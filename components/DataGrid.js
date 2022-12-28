import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';
import { LoadingComponent } from './LoadingComponent';
export const DataGrid = ({ options, setMaxResultados, forceUpdate, onError , setUser ,onDelete , onSelectUser , listUsers , hasActions, isSelectable , traerSeleccionados}) => {

    let { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError);
    
    return (
        <>
        <LoadingComponent loading={isLoading} type="loader-1" centerTable= {true} >
        { 
        
            users.map( (user) => (

                <TableItem 
                    { ...user }
                    setUser = {setUser}
                    onDelete = {onDelete}
                    onSelectUser = {onSelectUser}
                    listUsers = {listUsers}
                    hasActions = {hasActions}
                    isSelectable = { isSelectable }
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