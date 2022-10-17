import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataGrid = ({ category,limit , MaxItems }) => {

    const { contacts, isLoading } = useFetchData( category,limit );
    

    return (
        <>
            {
                isLoading && ( <tr className="center">Cargando...</tr> )
            }
                
            {  
            
            contacts.map( (contact) => (

                <TableItem 
                            key={ contact.id } 
                            { ...contact }
                />

                ))
            } 

        </>
    )
}