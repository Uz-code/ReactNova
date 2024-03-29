import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';
import { LoadingComponent } from './LoadingComponent';
export const DataGrid = ({ options, setMaxResultados, forceUpdate, onError , setUser ,onDelete , onDesactivar, onSelectUser , listUsers , hasActions, isSelectable , traerSeleccionados}) => {

    let { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError);
       
   /* users = users.map( (user) => {
        delete user.address;
        return user;
    })

    console.log(users);
    */
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