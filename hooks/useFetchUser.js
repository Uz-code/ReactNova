import { useEffect, useState } from 'react';
import { getUser } from '../helpers/getUser';

export const useFetchUser = ( options , forceUpdate , onError , buscarUsuario) => {
 
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState( true );

    const getUserx = async() => {
        
        let user = null;

        try 
        {

            if(!buscarUsuario){
                setIsLoading(false);
                return;
            }
            user = await getUser( options , onError );
            
            if(user && !isEmpty(user)){setUser(user); setIsLoading( false );}
            
        }
        catch(ex)
        {   
            onError("Error Obteniendo los datos de los usuarios controlados: " + ex.message);
        }
    }
   
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    useEffect( () => {

        setIsLoading(true);

        setUser(null);

        getUserx();
        
    }, [options, forceUpdate]);

    return {
        user,
        isLoading
    }

}

