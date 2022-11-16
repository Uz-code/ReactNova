import { DataListContent } from './DataListContent';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataList = ({ options , setMaxResultados, forceUpdate, onError, cardSize , onSelectUser,listUsers  }) => {

    const { contacts, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError );
    

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
                        onSelectUser = { onSelectUser }
                        listUsers = { listUsers }
                    />
                )) 
                
            } 

        </>
    )
}