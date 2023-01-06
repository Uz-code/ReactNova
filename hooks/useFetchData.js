import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = ( options , setMaxResultados, forceUpdate , onError) => {
 
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getUsers = async() => {
        
        let users = null;

        try 
        {

            users = await getData( options , setMaxResultados, onError );
            
            if(users){setUsers(users); setIsLoading(false);}
            
        }
        catch(ex)
        {   
            onError("Error Obteniendo los datos de los usuarios controlados: " + ex.message);
        }
    }
    
    useEffect( () => {

        setIsLoading(true);

        setUsers([]);

        getUsers();
        
    }, [options, forceUpdate]);

    return {
        users,
        isLoading
    }

}

