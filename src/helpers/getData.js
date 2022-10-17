

export const getData = async( category, limit ) => {

    const url = `https://dummyjson.com/users/search?limit=${ limit }&skip=0&q=${ category }`; /*{ category }*/
    
    const params = {
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
    };

    const response = await fetch( url );
  
    const json = await response.json();
    
    //console.log(Array.isArray(json.users));
   console.log(json.users);

    const contacts = json.users.map( (contact) => (
        {
            id: contact.id,
            fullName: contact.firstName + " " + contact.lastName,
            address: contact.address.address + ", " + contact.address.city ,
            university : contact.university,
            email: contact.email,
        }
    ));

    //console.log(contacts);

    return contacts;
    
}