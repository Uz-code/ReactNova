

export const getData = async( options , setMaxResultados ,  onError ) => {

    const isCancelled = false;
    
    const url = `https://dummyjson.com/users/search?limit=${ options.limit }&skip=0&q=${ options.campoBusqueda }`; /*{ category }*/

    const params = {
        headers: { 'Content-Type': 'application/json' },
    };

    if (!isCancelled){

        try 
        {

            const response = await fetch( url, params );

            if (!response.ok)
            {
                throw Error('Error'+ response.status + " " + response.statusText);
            }

            if (!response.status == 200)
            {
                throw Error('Error'+ response.status + " " + response.statusText);
            }

            const json = await response.json();
            
            const { users, total } =  json;
            
            const contacts = users.map( (contact) => (
                {
                    id: contact.id,
                    fullName: contact.firstName + " " + contact.lastName,
                    address: contact.address.address + ", " + contact.address.city ,
                    university : contact.university,
                    email: contact.email,
                }
            ));
            
            setMaxResultados(total);
            
            return contacts;

        }
        catch (ex) {
            onError("Se produjo un error obteniendo los datos de los usuarios funcionales.  Descripcion: " + ex.message);
            return null;
        }
    }

    return () => {
        isCancelled = true;
    }

}