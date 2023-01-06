export const  getUsuariosControlados= async(options,onError)=>{
    
    const user = JSON.parse(localStorage.getItem('user'))
    
    const tokenSeguridad= user.Auth.tokenSeguridad

    const { campoBusqueda, Sistema , TipoBusqueda }= options
    
    let body=JSON.stringify({ 
        Nombre: campoBusqueda });
    
    let url = 'https://w2k19x64test21.nova.com.ar/SATXWS/SatCS/SatCS.svc/EjecutarBusquedaFiltroUsuarioControlado';
    
        
    let  headers = { 'Content-Type' : 'application/json',
                        'Token'        :  tokenSeguridad
    };
       
    let response = null;
            
    const params = {
        method: 'POST',
        headers: headers,
        body: body
    };

    try {
        
        response = await fetch( url, params );
        if (response.status === 200) {
            const json = await response.json();

            let listaUsuarios = json.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados
            
            console.log(listaUsuarios)
    
            return listaUsuarios
    
        }
        else {
            
            onError(response.statusText)
        }

    } catch ( ex ){

        onError('Error desconocido: '+ ex.message+' compruebe su conexion a internet')
    
    }   
    
}