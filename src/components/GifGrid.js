import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {

    const { contacts, isLoading } = useFetchGifs( category );
    
    return (
        <>

            <tr className='active-row'>{ category }</tr>
            {
                isLoading && ( <td>Cargando...</td> )
            }
                
            {  contacts.map( (contact) => (

                <GifItem 
                            key={ contact.id } 
                            { ...contact }
                />

                ))
            } 

        </>
    )
}