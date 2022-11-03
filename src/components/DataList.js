import { DataListContent } from './DataListContent';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataList = ({ category , limit, setMaxResultados, PaginaActual, forceUpdate, onError, cardSize , onAddUser,listUsers  }) => {

    const { contacts, isLoading } = useFetchData( category, limit , setMaxResultados , PaginaActual, forceUpdate, onError );
    

    return (
        <>

            {
                isLoading && (<div className="spinner-border text-primary center" role="status"> <span className="visually-hidden">Cargando...</span> </div> )
            }
                
            {  

                contacts.map( (contact) => (
                    <DataListContent 
                        key={ contact.id } 
                        { ...contact }
                        size={cardSize}
                        onAddUser = { onAddUser }
                        listUsers = { listUsers }
                    />
                )) 
                
            } 

        </>
    )
}