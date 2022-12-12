import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataGrid = ({ options, setMaxResultados, forceUpdate, onError , setUser ,onDelete , onSelectUser , listUsers , hasActions,isSelectable}) => {

    const { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError);

    return (
        <>
            {isLoading && ( 
                <tr className="center"> 
                    <div className="spinner-border text-primary" role="status"> <span className="visually-hidden">Cargando...</span> </div> 
                </tr>
            )}
                
            { 
            users.map( (user) => (

                <TableItem 
                    key={ user.id } 
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

        </>
    )
}