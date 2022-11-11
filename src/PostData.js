import { useEffect, useState  } from "react"

export const PostData = () => {
    
    const [getBody, setBody] = useState(JSON.stringify({
        NroFactorAutenticacion: 1,
        CodigoMetodoAutenticacion: 1,
        Usuario: "nova\\administrador",
        IdentificadorOrigen: 
          {
            __type: "IdentificadorOrigenDispositivo_AppExt:http://ar.com.satxws/"
          },
        TipoTokenSesionRequerido: 1
    } ));

    const [getUrl, setUrl] = useState('https://128.128.10.221/SATXWS/SatAuth/SatAuth.svc/InicioAutenticacionUsuario'); 

    const prueba = async() => {
        
        const post = await postData( getUrl, getBody );

        console.log(post);

    }
    
    useEffect( () => {
        prueba();
    }, []);
    
    const postData = async( url, body ) => {
        const params = {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: body
        };
        var response = null;

        try {
            
            response = await fetch( url, params );
            if (response.status === 200) {
                const json = await response.json();
                return json;
            }
            else {
                return [response.statusText];
            }
    
        } catch ( ex ){

            return [ex.message];
        
        }
    
    }

    return (
        <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh' } }>
            <label style={ { fontSize: '2rem' } }  >Url</label>
            <input type="text" name="url" id="url" value={getUrl} onChange={ (e) => setUrl(e.target.value) } />
            <label style={ { fontSize: '2rem' } }>Body</label>
            <textarea name="body" id="body" cols="100" rows="10" value={getBody} onChange={ (e) => setBody(e.target.value) } ></textarea>
            <button onClick={ prueba } style = { { fontSize: '1rem', margin: '1rem' } }>Enviar</button>
        </div>
    )
        

} 