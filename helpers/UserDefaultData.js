

export const UserDefaultData = async( nombre , localizacion ,  Sistema ) => {

     let data = {
        "SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult": {
            "CodigoRespuesta": 0,
            "DescripcionRespuesta": "",
            "DescripcionRespuestaAdicional": "",
            "ListaUsuariosControlados": [
                {
                    "AWS_AccessKeyID": "",
                    "AWS_AcountID": "",
                    "AWS_SecretAccessKey": null,
                    "Activo": true,
                    "CambioClaveDias": 0,
                    "CtrlClaveAutoDias": 1,
                    "Descripcion": "Administrador de la 65",
                    "DescripcionLocalizacion": "Localizacion 1",
                    "IntervaloRegistroLog": 5,
                    "Localizacion": "nova",
                    "Nombre": "nova\\Administrador",
                    "NombreGrupoResponsable": "",
                    "NombreModeloPassword": "Alfanumerico",
                    "NombrePoliticaConfiguracion": "",
                    "NombreScriptCambioClave": "Sin Script",
                    "NombreSistema": "Aplicacion",
                    "NombreUsuarioAdministrador": "",
                    "NombreUsuarioResponsable": "",
                    "Notificadores": ['1,2,3,4'],
                    "Password": 'novasys123',
                    "PasswordAdicional": 'nova2020',
                    "PermitirConexionSinRegistroLog": true,
                    "Plataforma": 1,
                    "ProtocoloConexion": 4,
                    "PuertoConexion": 3389,
                    "RegistrarLogConexion": false,
                    "Restablecer_IntentosFallidos_ControlClaveAuto": false,
                    "Restablecer_IntentosFallidos_ResetClaveAuto": false,
                    "ServiciosAsociados": "",
                    "TipoCambioClaveTiempoNoUso": 0,
                    "TipoControlClave": 0,
                    "TipoPeriodoCtrlClaveAuto": 0
                }
            ]
        }
    }

    let user = {
        username: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Nombre,
        Password: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Password,
        passchk: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Password,
        Passwordc: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].PasswordAdicional,
        passcchk: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].PasswordAdicional,
        cambiarPassword : false,
        SatPssh: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].PuertoConexion,
        SatPromptUC : 'regex:[\\.\\$\\]%#>~@]( )?$',
        localizacion: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Localizacion,
        LocalizacionID : 0,
        Nservice : '',
        descripcion: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Descripcion,
        notificadores : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Notificadores,
        UsrSo: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].Plataforma,
        Protocol: data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].ProtocoloConexion,
        UsrScript: '0',
        UsrScriptControlClave : '0',
        txtPassphrase_pk : '',
        x11Opt: '0',
        UsrSoAutorizacion: '0',
        IdModelos : '1',
        PoliticaConfiguracion : '0',
        UsrAdmin : '0',
        Sistema : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].NombreSistema,
        TipoCambioClaveTiempoNoUso : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].TipoCambioClaveTiempoNoUso,
        TipoControlClave : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].TipoControlClave,
        TipoPeriodoCtrlClaveAuto : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].TipoPeriodoCtrlClaveAuto,
        CtrlClaveAutoDias : data.SATXWS_EjecutarBusquedaFiltroUsuarioControladoResult.ListaUsuariosControlados[0].CtrlClaveAutoDias,
        selUsrSoAutenticacionUsr : '0',
        DefaultShell : '/bin/bash',
        ServidorX11 : 'localhost',
        selRegistrarLog: 1,
        SegundosScreenshot: '0',
        selConexionSinLog:'1',
        ControlUsr: '1',
        CambioAct: '1',
        UsrSoPeriodoCtrlClaveAuto: "0",
        Responsable: '1',
        GrupoResp: '1',
        ArchivoAdjunto_pk : '',
        hdArchivoAdjuntoAttachId_adj1: '',
        NombreBD:'',
        CadenaConexionUsuario: '',
        AcountID: '',
        SecretAccessKey: '',
        AccessKeyID: '',
    }
    
    return user;

}