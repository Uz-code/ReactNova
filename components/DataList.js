import { DataListContent } from './DataListContent';
import { useFetchData } from '../hooks/useFetchData.js';
import { LoadingComponent } from './LoadingComponent';

export const DataList = ({ options , setMaxResultados, forceUpdate, onError, cardSize , onAddUserToList,listUsers  }) => {

    const { users, isLoading } = useFetchData( options, setMaxResultados , forceUpdate, onError );
    
    return (
        <>
            <div className="card-body start-section" style={{  flex:1 , minHeight: '400px' }}>
            <LoadingComponent loading={isLoading} type="loader-1" >
                {users.map( (user) => (
                    <DataListContent 
                        { ...user }
                        size={cardSize}
                        onAddUserToList = { onAddUserToList }
                        listUsers = { listUsers }
                    />
                ))}
                {
                    users != null && users.length == 0 && !isLoading &&
                    <div className="center flex text-muted" >
                        <span>No hay resultados</span>
                    </div>
                }
            </LoadingComponent>
            </div>

        </>
    )
}