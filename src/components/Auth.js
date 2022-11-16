import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

 export const AuthProvider = ( { children } ) => {

    // variable that saves localStorage.getItem("user") 
    const loggedInUser = localStorage.getItem("user");

    const [user, setUser] = useState(JSON.parse(loggedInUser) || null);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    /*useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
    
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        
      }, []);
*/
    //const [loading, setLoading] = useState(true);

    /*useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);

    const value = {
        user,
    };
*/
   

    const login = ( user ) => {
        
        let response = null;

        //TODO VALIDAR LOGIN
        /* 
        const user = { username, password };
        // send the username and password to the server
        const response = await axios.post(
            "http://blogservice.herokuapp.com/api/login",
            user
        );
        // set the state of the user
        setUser(response.data)
        
        // store the user in localStorage
        localStorage.setItem('user', response.data)
        console.log(response.data)*/
        
        //todo return empty array en error

        //setMessage('Usuario o Password incorrecta.');
        
        //Caso correcto
        response = { message: '', title: '', user: user }; // user = token, id , username
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        
        //Caso incorrecto
        //response = { title: 'Error', message: 'Usuario o Password incorrecta.' , user: null };
        //logout();
        // 

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