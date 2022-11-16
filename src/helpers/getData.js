

export const getData = async( options , setMaxResultados ,  onError ) => {

    const isCancelled = false;
    
    const url = `https://dummyjson.com/users/search?limit=${ options.limit }&skip=0&q=${ options.campoBusqueda }`; /*{ category }*/

    const params = {
        headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch( url, params );
  
    if (!isCancelled){

        try {

            if (response.ok) {

                const json = await response.json();
                
                    //console.log(json);
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
            else {
                onError(response.statusText);
                return [];
            }
        
        }
        catch( err ) 
        {
            onError(err.message);
            return [];
        }

    }

    return () => {
        isCancelled = true;
    }

}