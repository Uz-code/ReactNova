import { DataListContent } from './DataListContent';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataList = ({ category , limit, setMaxResultados, PaginaActual, forceUpdate, onError  }) => {

    const { contacts, isLoading } = useFetchData( category, limit , setMaxResultados , PaginaActual, forceUpdate, onError);
    

    return (
        <>
            {
                isLoading && (<div className="spinner-border text-primary center" role="status"> <span className="visually-hidden">Cargando...</span> </div> )
            }
                
            {  
                <div className="card-body start-section" style={{  flex:1 }}>
                {contacts.map( (contact) => (
                    <DataListContent 
                        key={ contact.id } 
                        { ...contact }
                    />
                )) 
                }
                </div>
            } 

        </>
    )
}