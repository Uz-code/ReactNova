import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext(null);

 export const AuthProvider = ( { children } ) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {

        const loggedInUser = localStorage.getItem("user");
    
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        
      }, []);

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

        setUser(user);
        
        localStorage.setItem('user', JSON.stringify(user));

        return user;
    };


    const logout = () => {
        setUser(null);
        localStorage.clear();
    };


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {/*!loading && children*/}
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};