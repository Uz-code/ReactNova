import { DataListContent2 } from './DataListContent2';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataList2 = ({ options, setMaxResultados, forceUpdate, onError, cardSize  }) => {

    const { contacts, isLoading } = useFetchData( options , setMaxResultados , forceUpdate, onError );
    

    return (
        <>

            {
                isLoading && (<div className="spinner-border text-primary center" role="status"> <span className="visually-hidden">Cargando...</span> </div> )
            }
                
            {  

                contacts.map( (contact) => (
                    <DataListContent2
                        key={ contact.id } 
                        { ...contact }
                        size={cardSize}
                    />
                )) 
                
            } 

        </>
    )
}