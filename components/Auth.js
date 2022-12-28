import { useState,useEffect, useContext, createContext } from 'react';

const AuthContext = createContext(null);

 export const AuthProvider = ( { children } ) => {

    // variable that saves localStorage.getItem("user") 
    const loggedInUser = localStorage.getItem("user");

    const [user, setUser] = useState(JSON.parse(loggedInUser) || null);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const fetchToken = async ( usuario ) => {

        let response = null;

        //primer parte de la verificacion InicioAutenticacionUsuario
        const body = JSON.stringify({
            NroFactorAutenticacion: 1,
            CodigoMetodoAutenticacion: 1,
            Usuario: `${usuario}`,
            IdentificadorOrigen: 
                {
                __type: "IdentificadorOrigenDispositivo_AppExt:http://ar.com.satxws/"
                },
            TipoTokenSesionRequerido: 1
        })
        
        const url = 'https://w2k19x64test21/SATXWS/SatAuth/SatAuth.svc/InicioAutenticacionUsuario' 
        
        const headers = { 'Content-Type' : 'application/json' }
        
        response = await postData( url, body, headers);

        if(response.SATXWS_InicioAutenticacionUsuarioResult?.CodigoRespuesta != 0)
        {
            setTitle(`Codigo Error ${response.SATXWS_InicioAutenticacionUsuarioResult?.CodigoRespuesta}`);
            throw new Error(response.SATXWS_InicioAutenticacionUsuarioResult?.DescripcionRespuesta);
        }
        
        return await response.SATXWS_InicioAutenticacionUsuarioResult.DatosAutenticacion.TokenSeguridad;
        
    }

    const tokenSeguridad = async (password,token)=>{
           
        const body = JSON.stringify({
       
               ParametrosAutenticacion:
                   {
                   __type: "ParametrosAutenticacion_AuthPassword:http://ar.com.satxws/",
                   Password: `${password}` 
                 }
             
       })

       const url = `https://w2k19x64test21/SATXWS/SatAuth/SatAuth.svc/EjecutarAutenticacionUsuario`;

       const header  = {
           'Content-Type' : 'application/json',
           'token' : token
        }

        let response = await postData( url, body, header);

        if(response.SATXWS_EjecutarAutenticacionUsuarioResult.CodigoRespuesta !== 0){
            setTitle(`Codigo Error ${response.SATXWS_EjecutarAutenticacionUsuarioResult?.CodigoRespuesta}`);
            throw new Error(response.SATXWS_EjecutarAutenticacionUsuarioResult.DescripcionRespuesta);
        }
        
        let tokenSeguridad = response.SATXWS_EjecutarAutenticacionUsuarioResult.DatosAutenticacion.TokenSeguridad; 
        
        let rol =response.SATXWS_EjecutarAutenticacionUsuarioResult.DatosAutenticacion.InfoSatUsr.NombreRol
        
        return {tokenSeguridad, rol}

    }
    
    const postData = async( url, body,headers) => {

        const params = {
            method: 'POST',
            headers: headers,
            body: body
        };

        let response = null;

        try {
            
            response = await fetch( url, params );

            if (!response.ok || response.status != 200) {
                setTitle(`Error ${response.status}` );
                throw new Error(response.statusText);
            }

            return await response.json(); 

        } catch ( ex ){
            setTitle(`Error 404` );
            throw new Error(`Error Desconocido: ${ex.message}, Revise su conección de internet`);
        }
    }

    const login = async ( {username, password} ) => {
        
        let user = null;
        let UserValid = false;

        try{  

            const Token = await fetchToken(username)
            
            const Auth = await tokenSeguridad(password, Token)

            user = {username, Auth}

            setUser(user);

            localStorage.setItem('user', JSON.stringify(user))

            UserValid = true;
            
        }
        catch(ex){
            setMessage(ex.message)
        }
      
        return UserValid;
    };


    const logout = () => {
        //setMessage('No tiene Autoridad para ver la Pantalla Solicitada o su Sesion no es valida.');
        //setMessage('Ud ha estado inactivo por un tiempo superior a 59 minuto/s.');

        //setTitle('Su sesion ha expirado');
        //setMessage('Ud ha estado inactivo por un tiempo superior a 59 minuto/s.');
        setMessage('');
        setTitle('');
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