import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

 export const AuthProvider = ( { children } ) => {

    // variable that saves localStorage.getItem("user") 
    const loggedInUser = localStorage.getItem("user");

    const [user, setUser] = useState(JSON.parse(loggedInUser) || null);
    
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const fetchToken = ( usuario ) => {
        let response = null;

        //caso hipotetico de algun error obteniendo datos
        /*if (Error == true) {
           
            response = { errorMessage: 'Codigo Error 404', title: 'El error que te da la api', TokenSeguridad: '' }; 

            return null;
        }*/

        //caso correcto retornar algo asi

        response = { errorMessage: '', title: '', TokenSeguridad: '123492' }; 
        
        return response;
    }

    const login = ( form ) => {
        let response;

        response = fetchToken(form.username);
        if (response.errorMessage) {
            return response;
        }

        let TokenSeguridad = response.TokenSeguridad;
        //....

        //....
        let user = null;

        // conseguir los datos necesarios para retornaro un objeto user = { token: '12349', username: 'nova\administrador', id: '1' }

        // al final armar/retornar algo asi
        user = { token: '...', username: '...', id: '...'};  

        setUser(user);

        localStorage.setItem('user', JSON.stringify(user));
        
        return response;

    };


    const logout = () => {
        //setMessage('No tiene Autoridad para ver la Pantalla Solicitada o su Sesion no es valida.');
        //setMessage('Ud ha estado inactivo por un tiempo superior a 59 minuto/s.');

        //setTitle('Su sesion ha expirado');
        //setMessage('Ud ha estado inactivo por un tiempo superior a 59 minuto/s.');
        
        setUser(null);
        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{user, login, logout, message, title}}>
            {/*!loading && children*/}
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};