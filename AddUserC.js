import { React, useEffect,useState } from 'react';
import { useForm } from './hooks/useForm';
import { useLocation } from 'react-router'
import { AddUF } from './AddUF';

import  Tabs  from './components/Tabs';
import { Modal } from './components/Modal';
import { DialogHook } from './hooks/DialogHook';
import { useNavigate } from 'react-router-dom';

import {  BsArchive, BsArchiveFill, BsEye, BsEyeSlash, BsKeyFill } from 'react-icons/bs';

import { ComponenteSeleccionUsuarioControlado } from './ComponenteSeleccionUsuarioControlado';
import { ComponenteSeleccionTarjetasUC } from './ComponenteSeleccionTarjetasUC';

import { ContainerFlex } from './components/ContainerFlex';

import miniatura from './img/miniatura.png';
import { DialogComponent } from './components/DialogComponent';


/**tablade usuarios */


export const EditUser = () => {
       
    const [ toggleCambiarComponente, setToggleCambiarComponente ] = useState(false);
    const [ UsrADDescripcion, setUsrADDescripcion ] = useState( 'Administrador de dominio' );
    
    const guardarHandler = ( arr ) => {
        
        let notificadores = '';
        
        arr.forEach( (item) => {
            if(notificadores != ''){
                notificadores += ',';
            }

            notificadores += item.id;
        });

        setValue( 'SatUsrsSel', notificadores);

        setShowModal(false);

        setListaNotificadores( arr );

    }

    /* TODO cargar objeto para el listado de notificadores
    const [ listaNotificadores, setListaNotificadores ] = useState( [{ name : "Terry Medust" , id : 1 }] );*/
    const [ listaNotificadores, setListaNotificadores ] = useState( [] );

    const [ Tab, setTab ] = useState( "" );

    const [ typeModal, setTypeModal ] = useState( 1 );

    var 
    {
    formState,
    setShowModal,
    showModal,
    handleChange,
    handleSubmit,
    handleClear,
    guardarLocalizacion,
    setValue,
    StateMessageError,
    setStateMessageError,
    utilCadenaConexion,
    setUtilCadenaConexion,
    LoggingSesionHabilitado,
    title,setTitle,
    UsrSo,
    UsrScript,
    UsrScriptControlClave,
    Protocol,
    x11Opt,
    UsrSoAutorizacion,
    EnviaEnter,
    EnviaPassword,
    EnviaUsuario,
    PwdPrompt,
    UsrPrompt,
    username,
    SatPssh,
    SatPromptUC,
    localizacion,
    LocalizacionID,
    Nservice,
    descripcion,
    Password,
    passchk,
    Passwordc,
    passcchk,
    cambiarPassword,
    txtPassphrase_pk,
    toggleGenerarPass, setToggleGenerarPass,
    toggleGenerarPassc, setToggleGenerarPassc,
    typePass, setTypePass,
    typePassC, setTypePassC,
    chkArchivoAdjunto_pk,setChkArchivoAdjunto_pk,
    nombreLocalizacion,
    listLocalizacion,
    IdModelos,
    PoliticaConfiguracion,
    UsrAdmin,
    Sistema,
    selUsrSoAutenticacionUsr,
    UserPrompt,
    DefaultShell,
    ServidorX11,
    selRegistrarLog,
    SegundosScreenshot,
    selConexionSinLog,
    ControlUsr,
    CambioAct,
    UsrSoPeriodoCtrlClaveAuto,
    Responsable,
    GrupoResp,
    hdArchivoAdjuntoAttachId_adj1,
    ArchivoAdjunto_pk,
    NombreBD,
    CadenaConexionUsuario,
    AcountID,
    SecretAccessKey,
    AccessKeyID,
    } = useForm({
    //Datos por defecto del formulario mas adelante ver como cargarlos desde la base de datos
    username: '',
    Password: '',
    passchk: '',
    Passwordc: '',
    passcchk: '',
    cambiarPassword : false,
    SatPssh: '3840',
    SatPromptUC : '0',
    localizacion: '',
    LocalizacionID : '',
    Nservice : '',
    descripcion: '',
    notificadores : '',
    UsrSo: '99',
    Protocol: '4',
    UsrScript: '0',
    UsrScriptControlClave : '0',
    txtPassphrase_pk : '',
    x11Opt: '0',
    UsrSoAutorizacion: '0',
    IdModelos : '1',
    PoliticaConfiguracion : '0',
    UsrAdmin : '0',
    Sistema : '2',
    selUsrSoAutenticacionUsr : '0',
    UserPrompt : 'regex:[\\.\\$\\]%#>~@]( )?$',
    DefaultShell : '/bin/bash',
    ServidorX11: 'localhost',
    selRegistrarLog: 1,
    SegundosScreenshot: '0',
    selConexionSinLog:1,
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
    });
    
    /**ver listado */

    const openModalListado = ( ) => {
      
        setTypeModal(3);
        setShowModal(prev => !prev);

    };

    //para el boton de back
    let navigate = useNavigate();

    //para el boton de visibilidad de password
    const toggleTypePassc = () => {
        if (!toggleGenerarPassc) {
            typePassC == 'password' ? setTypePassC( 'text' ) : setTypePassC( 'password' ) ? setTypePassC( 'text' ) : setTypePassC( 'password' );
        }
    };

    const toggleTypePass = () => {
        if (!toggleGenerarPass) {
            typePass == 'password' ? setTypePass( 'text' ) : setTypePass( 'password' ) ? setTypePass( 'text' ) : setTypePass( 'password' );
        }
    };

    // para los handlers de el modal
    function AcceptHandler() {
        setShowModal(false);
    }

    function CancelHandler() {
        setShowModal(false);
    }

    const location = useLocation();
 
    var id = 0;
    var EditUser = false;
    if( location.state != null )
    {
        
        //Si recivo una ID por el objeto loction quiere decir que vino de un redirect del componente tabla de usuarios controlados 
        //y debo cargar los datos del usuario en el formulario
    
        id = location?.state.id; 
        EditUser = true;
        
    }

    // UsrSo 1 = Alerta
    // UsrSo 2 = TablaUC

    useEffect ( () => {
       !showModal && setTypeModal(1);
    }, [showModal] );

    const openModalUc = () => {
        setTypeModal(2);
        setShowModal(prev => !prev);
    };

    const OnError = ( value ) => {
        setTypeModal(1);
        setStateMessageError(value);
        setShowModal(true);
    };
    
    const [toggleMiniatura, setToggleMiniatura] = useState(false);

    const agregarUsuario = (obj) => {

        if(obj != null)
        {

            const userAlreadyInList = listaNotificadores.find( user => user.id === obj.id ) != null;


            if ( userAlreadyInList  ) { return; }

            guardarHandler( [  obj,...listaNotificadores] );

            setTab("Notificadores");

        }
        setToggleCambiarComponente(false);

        setToggleMiniatura(false);

        
    };

    const handleAddNotificador = () => {

        setToggleMiniatura(true);
        
        setToggleCambiarComponente(true);
    };
    
    const { dialog, setDialog } = DialogHook ( { title: '', message: '' } );

    const CambiarComponente = () => {

        setToggleCambiarComponente(!toggleCambiarComponente);
    
       /* setShowModal(true);
        setTypeModal(1);
        setDialog( { title: "¿Desea continuar?", message: "Se perderan los cambios realizados", AcceptHandler: AcceptHandler, CancelHandler: CancelHandler } );
    */
    };

    useEffect( () => {
    
        if (StateMessageError != null && StateMessageError != '')
        {
            setDialog( { title: "Error", message: StateMessageError, AcceptHandler: AcceptHandler, CancelHandler: CancelHandler } );
            setShowModal(true);
            setTypeModal(1);
        }

    }, [StateMessageError] );



    return (
        /*a component to add users to agregarUsuario */
                <>
            {toggleMiniatura &&
                <div className="card shadow miniatura" style={{ width: '195px', height:'120px', cursor: 'pointer', position: 'absolute', top: '92%', left: '91%', transform: 'translate(-50%, -50%)', zIndex: '1000' }} onClick={() => CambiarComponente()}>
                    <div className="" style={{ padding: '5px' }}>
                        <img src={miniatura} alt="miniatura" style={{ width: '100%' }} />                    
                    </div>
                    <div className='card-mini-footer text-muted'>
                    {toggleCambiarComponente ? 'Usuarios Controlados' : 'Usuario Funcional'}
                    </div>
                </div>
            }

            {toggleCambiarComponente ?
                <>
                    <AddUF AcceptHandler={agregarUsuario} />
                </>
            :
                <>
                    <FormUsuarioControlado></FormUsuarioControlado>
                </>
            }

           
           
    </>
    )
}
