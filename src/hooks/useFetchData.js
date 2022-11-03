import { useEffect, useState } from 'react';
import { getData } from '../helpers/getData';

export const useFetchData = ( category, limit, setMaxResultados,PaginaActual, forceUpdate , onError) => {
 
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getcontacts = async() => {
        const newcontacts = await getData( category, limit , setMaxResultados, PaginaActual, onError);
        setContacts(newcontacts);
        setIsLoading(false);
    }
    
    useEffect( () => {
        setIsLoading(true);
        setContacts([]);
        getcontacts();
    }, [category,limit, PaginaActual,forceUpdate]);

    return {
        contacts,
        isLoading
    }

}