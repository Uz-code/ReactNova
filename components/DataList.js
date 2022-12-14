import { DataListContent } from './DataListContent';
import { useFetchData } from '../hooks/useFetchData.js';

export const DataList = ({ options , setMaxResultados, forceUpdate, onError, cardSize , onAddUserToList,listUsers  }) => {

    const { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError );
    

    return (
        <>

            {
                isLoading && (<div className="spinner-border text-primary center" role="status"> <span className="visually-hidden">Cargando...</span> </div> )
            }
                
            {  

            <div className="card-body start-section" style={{  flex:1 , minHeight: '400px' }}>
                    {users.map( (user) => (
                        <DataListContent 
                            { ...user }
                            size={cardSize}
                            onAddUserToList = { onAddUserToList }
                            listUsers = { listUsers }
                        />
                    )) 
                }
            </div>
                
            } 

        </>
    )
}