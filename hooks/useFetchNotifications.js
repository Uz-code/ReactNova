import { useEffect, useState } from 'react';
import { NotificationsDefaultData } from '../helpers/NotificationsDefaultData';

export const useFetchNotifications = (onError) => {
 
    const [notifications, setNotifications] = useState([]);
    const [isLoading, setIsLoading] = useState( true );
    
    const getNotificaciones = async() => {
        
        try 
        {

            let {notifications}=  await NotificationsDefaultData(onError );
            
            if(notifications){setNotifications(notifications); setIsLoading( false );}
            
        }
        catch(ex)
        {   
            onError("Error Obteniendo los datos de los usuarios controlados: " + ex.message);
        }
    }
    
    useEffect( () => {

        /*wait 1000 seconds*/
        setTimeout(() => {
            setIsLoading(true);

            setNotifications([]);
    
            getNotificaciones();
        }, 2000);
        
    }, []);

    return {
        notifications,

        isLoading
    }

}

