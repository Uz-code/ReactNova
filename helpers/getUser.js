export const getUser = async( options  , onError ) => {

    const isCancelled = false;
    
    const user = JSON.parse(localStorage.getItem('user'));
    
    const tokenSeguridad= user.Auth.tokenSeguridad;

    const url = 'https://128.128.10.221/SATXWS/SatCS/SatCS.svc/EjecutarBusquedaUsuarioControlado';
        
    const  headers = { 
        'Content-Type' : 'application/json',
        'Token' :  tokenSeguridad
    };
    
    const body = JSON.stringify(options);

    const params = {
        method: 'POST',
        headers: headers,
        body: body
    };

    //console.log(body);
    
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
            
            const { SATXWS_EjecutarBusquedaUsuarioControladoResult } =  json;
            
            if(SATXWS_EjecutarBusquedaUsuarioControladoResult.CodigoRespuesta != 0 ){
                throw Error(SATXWS_EjecutarBusquedaUsuarioControladoResult.DescripcionRespuesta);
            }

            let UsuarioControlado = SATXWS_EjecutarBusquedaUsuarioControladoResult.UsuarioControlado;
    
            if( !UsuarioControlado ){
                throw Error("No se encontro el usuario controlado");
            }
            
            return UsuarioControlado;

        }
        catch (ex) {

            onError("Se produjo un error obteniendo los datos de los usuarios controlados.  Descripcion: " + ex.message);
            
            return {} ;
        }
    }

    return () => {
        isCancelled = true;
    }

}