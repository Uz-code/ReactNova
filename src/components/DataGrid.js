import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataGrid = ({ options, setMaxResultados, forceUpdate, onError , setUser ,onDelete , onSelectUser , listUsers }) => {

    //console.log(options);
    const { contacts, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError);

    return (
        <>
            {
                isLoading && ( 
                    <tr className="center"> 
                        <div className="spinner-border text-primary" role="status"> <span className="visually-hidden">Cargando...</span> </div> 
                    </tr>
                
                 )
            }
                
            {  
            
            contacts.map( (contact) => (

                <TableItem 
                    key={ contact.id } 
                    { ...contact }
                    setUser = {setUser}
                    onDelete = {onDelete}
                    onSelectUser = {onSelectUser}
                    listUsers = {listUsers}
                    hasActions = { listUsers ? false : true }
                    isSelectable = { listUsers ? true : false }
                />

                ))
            } 

        </>
    )
}