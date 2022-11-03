

export const getData = async( category, limit, setMaxResultados , PaginaActual , onError ) => {

    
    const url = `https://dummyjson.com/users/search?limit=${ limit }&skip=0&q=${ category }`; /*{ category }*/
    
    const params = {
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
    };

    const response = await fetch( url );
  
    if (response.status === 200) {
        const json = await response.json();
        
        console.log(json.users);
        
        try {
            const contacts = json.users.map( (contact) => (
                {
                    id: contact.id,
                    fullName: contact.firstName + " " + contact.lastName,
                    address: contact.address.address + ", " + contact.address.city ,
                    university : contact.university,
                    email: contact.email,
                }
            ));
            
            setMaxResultados(json.total);
        
            return contacts;
        }

        catch( err ) 
        {
            onError(err.message);
            return [];
        }
    
    }
    else {
        onError(response.statusText);
        return [];
    }

}