import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = ( options , setMaxResultados, forceUpdate , onError) => {
 
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getcontacts = async() => {
        const newcontacts = await getData( options, setMaxResultados, onError);
        setContacts(newcontacts);
        setIsLoading(false);
    }
    
    useEffect( () => {

        console.log("useEffect useFetchData");
        setIsLoading(true);
        setContacts([]);

        getcontacts();
        
    }, [options, forceUpdate]);

    return {
        contacts,
        isLoading
    }

}