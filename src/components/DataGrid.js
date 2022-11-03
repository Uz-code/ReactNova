import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataGrid = ({ category , limit, setMaxResultados, PaginaActual, forceUpdate, onError , setUser ,onDelete }) => {

    const { contacts, isLoading } = useFetchData( category, limit , setMaxResultados , PaginaActual, forceUpdate, onError);
    

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
                />

                ))
            } 

        </>
    )
}