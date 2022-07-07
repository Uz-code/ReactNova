import { TableItem } from './TableItem';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataGrid = ({ category }) => {

    const { contacts, isLoading } = useFetchData( category );
    
    return (
        <>

            {/*<tr className='active-row'>{ category }</tr>  */}
            {
                isLoading && ( <td>Cargando...</td> )
            }
                
            {  contacts.map( (contact) => (

                <TableItem 
                            key={ contact.id } 
                            { ...contact }
                />

                ))
            } 

        </>
    )
}