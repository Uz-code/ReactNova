import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

 export const AuthProvider = ( { children } ) => {

    // variable that saves localStorage.getItem("user") 
    const loggedInUser = localStorage.getItem("user");

    const [user, setUser] = useState(JSON.parse(loggedInUser) || null);
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');

    const fetchToken = async ( usuario ) => {

        let token = null;
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

        //caso de algun error obteniendo datos
        if (!response.data) {
            return response;
        }

        if(response.data?.SATXWS_InicioAutenticacionUsuarioResult?.CodigoRespuesta != 0)
        {
            return response = { errorMessage: response.data?.SATXWS_InicioAutenticacionUsuarioResult?.DescripcionRespuesta , title:  `Codigo Error ${response.data?.SATXWS_InicioAutenticacionUsuarioResult?.CodigoRespuesta}`};
        }
        
        //caso correcto retornar algo asi

        token = await response.data.SATXWS_InicioAutenticacionUsuarioResult.DatosAutenticacion.TokenSeguridad;
        
        return response = { errorMessage: '', title: '', TokenSeguridad: token }; 
    }

    const postData = async( url, body,headers) => {
        let obj = null;

        const params = {
            method: 'POST',
            headers: headers,
            body: body
        };

        let response = null;

        try {
            
            response = await fetch( url, params );

            if(!response.ok){
                return obj = { errorMessage: response.statusText, title: `Error ${response.status}` };
            }

            if(!response.status == 200){
                return obj = { errorMessage: + response.statusText, title: `Error ${response.status}` };
            }

            const json = await response.json();

            return  obj = { errorMessage: '', title: '', data: json }; 

        } catch ( ex ){

            return obj = { errorMessage: `Error Desconocido: ${ex.message}, Revise su conección de internet` , title: 'Error 404' };
        
        }
    }

    const login = async ( {username, password} ) => {
        
        let response = { errorMessage: '', title: '' }; 

        response = await fetchToken(username);

        if (!response.TokenSeguridad) {
            return response;
        }

        /*
        let TokenSeguridad = response.TokenSeguridad;
        */ 

        //segunda parte de la verificacion 
        
        // let response = await...

        //....

        //....
        
        // conseguir los datos necesarios para retornaro un objeto user = { token: '12349', username: 'nova\administrador', rol, ect }

        // al final armar/retornar algo asi
       
        let user = null;

        user = {  token: '...', username: username, rol: '...' };  
        
        let UserValid = false;

        if (user) {
           UserValid = true;

           setUser(user);
           localStorage.setItem('user', JSON.stringify(user));
        }

        response = { errorMessage: '', title: '' , UserValid : UserValid}; 

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