import { useEffect  } from "react"

export const PostData = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const prueba = async() => {
        const post = await postData(  );
        console.log(post);
    }
    
    useEffect( () => {
        prueba();
    }, []);
    
    const postData = async(  ) => {
        const url = `https://128.128.10.221/SATXWS/SatAuth/SatAuth.svc/InicioAutenticacionUsuario`;
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:{
                NroFactorAutenticacion: 1,
                CodigoMetodoAutenticacion: 2,
                Usuario: "nova\\administrador",
                IdentificadorOrigen: 
                  {
                    __type: "IdentificadorOrigenDispositivo_AppExt:http://ar.com.satxws/"
                  },
                TipoTokenSesionRequerido: 1
            }
        };
        var response = null;
        try {
            
            response = await fetch( url, params );
            if (response.status === 200) {
                const json = await response.json();
                return json;
            }
            else {
                return [response.status,response.statusText];
            }
    
        } catch ( ex ){

            return [response.status,ex.message];
        
        }
    
    }
} 