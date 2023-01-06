import { DataListContent2 } from './DataListContent2';
import { useFetchData } from '../hooks/useFetchData.js';
import { LoadingComponent } from './LoadingComponent';

export const DataList2 = ({ options, setMaxResultados, forceUpdate, onError, cardSize  }) => {

    const { users, isLoading } = useFetchData( options , setMaxResultados , forceUpdate, onError );
    
    return (
        <>
            <LoadingComponent loading={isLoading} type="loader-1" centerTable={true}>
                {
                users.map( (user) => (
                    <DataListContent2
                        key={ user.id } 
                        { ...user }
                        size={cardSize}
                    />
                )) 
                }
                {
                users != null && users.length == 0 && !isLoading &&
                <div className="center flex text-muted" style={{minHeight: '45vh'}}>
                    <a>No hay resultados</a>
                </div>
                }
            </LoadingComponent>
        </>
    )
}