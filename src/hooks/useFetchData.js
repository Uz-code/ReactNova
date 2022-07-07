import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = ( category ) => {
 
    
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getcontacts = async() => {
        const newcontacts = await getData( category );
        setContacts(newcontacts);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getcontacts();
    }, []);

    return {
        contacts,
        isLoading
    }

}