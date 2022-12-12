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


export const FormUsuarioControlado = () => {
       
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
    <>
    {typeModal == 1 ?
        <DialogComponent dialog={ dialog } showModal={showModal} setShowModal={setShowModal} />
            :
        typeModal == 2 ? 
            ( UsrSo == 61 ? // Tabla Azure AD seleccion de Localizacion
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <div className='Container-Search-Users'>
                    <ComponenteSeleccionUsuarioControlado setStateMessageError={ setStateMessageError }  guardarHandler = { (arr) => { guardarLocalizacion(arr); } }  cancelHandler={CancelHandler} OnError = { (value) => { OnError(value); }} 
                    listaExterna = { listLocalizacion } 
                    multiSelect = { true } 
                    minimoSeleccion = { 1 }
                    />
                </div>
            </Modal>
            :
            UsrSo == 62 ? // Tabla Google WS seleccion de Localizacion
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <div className='Container-Search-Users'>
                    <ComponenteSeleccionUsuarioControlado setStateMessageError={ setStateMessageError }  guardarHandler = { (arr) => { guardarLocalizacion(arr); } } cancelHandler={CancelHandler} OnError = { (value) => { OnError(value); }} 
                    listaExterna = { listLocalizacion } 
                    multiSelect = { false }
                    minimoSeleccion = { 1 }
                    />
                </div>
            </Modal>
            :
            UsrSo == 56 && // Tabla SAP seleccion de Localizacion
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <div className='Container-Search-Users'>
                    <ComponenteSeleccionUsuarioControlado setStateMessageError={ setStateMessageError }  guardarHandler = { (arr) => { guardarLocalizacion(arr); } } cancelHandler={CancelHandler} OnError = { (value) => { OnError(value); }} 
                    listaExterna = { listLocalizacion } 
                    multiSelect = { false } 
                    minimoSeleccion = { 1 }/>
                </div>
            </Modal>)
        :
        (typeModal == 3 && // Tabla de usuarios controlados
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <div className='Container-Search-Users'>
                <ComponenteSeleccionUsuarioControlado setStateMessageError={ setStateMessageError }  guardarHandler = { (arr) => { guardarHandler(arr); } } cancelHandler={CancelHandler} OnError = { (value) => { OnError(value); }}
                listaExterna = { listaNotificadores }
                multiSelect = { true } 
                hasListaUsuarios  = { false } 
                isDoubleTable = { true }
                minimoSeleccion = { 0 }
                />
            </div>
        </Modal>
        )
        }
        <div className="App-header App-body">
            <div className= "responsive-wrapper container-fluid ">
                <div className= "main-header">
                    <h1> Usuarios Controlados / { EditUser ? `Editar Usuario ${id}`: 'Crear Usuario' } </h1>
                </div>
                
                <div>
                    <Tabs Tab={Tab} setTab={setTab} >
                        <div label = "Datos del Usuario">
                            <div className= "content-main">
                                <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className= "col-xl-3 col-sm-6 col-12 main-section form-user" style={{ flex:1 }}>

                                        <div className= "card shadow border-0 " >

                                            <div className='card-body mb-3'>
                                                <div className='mb-4'></div>
                                                {
                                                //<div className='input-group mb-6'>
                                                //<label className='LabelForm'>Datos Basicos </label>
                                                    //<p className='subtitulo'>Datos Basicos</p>
                                                //</div>
                                                }
                                                <form onSubmit={handleSubmit}>
                                                </form>

                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                        <input type="text"  className="input-fancy" name="username" placeholder=" " value={username} onChange={handleChange} />
                                                        <p>Nombre</p>
                                                    </label>
                                                </div>
                                                
                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                        <input type="text"  className="input-fancy" name="descripcion" placeholder="  " value={descripcion || ''} onChange={handleChange} />
                                                        <p>Descripcion</p>
                                                    </label>
                                                </div>

                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                        <input type="text"className="input-fancy" name="localizacion" placeholder="  " value={(UsrSo == 61  || UsrSo == 62 || UsrSo == 56) ?  nombreLocalizacion : localizacion } {...(UsrSo == 61  || UsrSo == 62 || UsrSo == 56) && {disabled: true}} onChange={handleChange} />
                                                        <p>Localizacion </p>
                                                    </label>
                                                    { 
                                                    (UsrSo == 61  || UsrSo == 62 || UsrSo == 56) && 
                                                        <button className="btn btn-neutral clear-btn" onClick={openModalUc}>Seleccionar</button>
                                                    }
                                                </div>

                                                { 
                                                (UsrSo == 5 || UsrSo == 60) && 
                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                        <input type="text"  className="input-fancy"name="Nservice" placeholder="  " value={Nservice || ''} onChange={handleChange} />
                                                        <p>Nservice</p>
                                                    </label>
                                                </div>
                                                }

                                                <div className='input-group mb-1'>
                                                    {/* <p className='subtitulo'>Seguridad</p>*/}
                                                </div>

                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                        <input type={typePass} id='password'  className="input-fancy" name="Password" placeholder=" " value={Password}  {...toggleGenerarPass && {readOnly: true}} onChange={handleChange} />
                                                        <p>Password</p>
                                                        <div className="password-icon" {...toggleGenerarPass && {style: {display: 'none'}}} onClick={toggleTypePass}>
                                                            <i data-feather="eye">{typePass == 'password' ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}</i>
                                                        </div>
                                                    </label>

                                                    <label className='input-group'>
                                                        <input type={typePass}  className="input-fancy" name="passchk" placeholder=" " value={passchk} {...toggleGenerarPass && {readOnly: true}} onChange={handleChange} />
                                                        <p>Verificacion</p>
                                                        <div className="password-icon" {...toggleGenerarPass && {style: {display: 'none'}}} onClick={toggleTypePass}>
                                                            <i data-feather="eye">{typePass == 'password' ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>} </i>
                                                        </div>
                                                    </label>
                                                    <div className="button-fancy" onClick={ () => {setToggleGenerarPass(!toggleGenerarPass) }} title="Generar Password" > <BsKeyFill style={toggleGenerarPass && { color: "#434ce8" }} /> </div>
                                                </div>

                                                <div className='mb-5 flex'>
                                                    <label className='input-group'>
                                                    <input type={typePassC}  className="input-fancy" name="Passwordc" placeholder="  " value={Passwordc} {...toggleGenerarPassc && {readOnly: true}}  onChange={handleChange} />
                                                        <p>Password Combinada</p>
                                                        <div className="password-icon" {...toggleGenerarPassc && {style: {display: 'none'}}} onClick={toggleTypePassc}>
                                                            <i data-feather="eye"> {typePassC == 'password' ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>} </i>
                                                        </div>
                                                    </label>
                                                
                                                    <label className='input-group'>
                                                    <input type={typePassC}  className="input-fancy" name="passcchk" placeholder="  " value={passcchk} {...toggleGenerarPassc && {readOnly: true}}  onChange={handleChange} />
                                                        <p>Verificacion</p>
                                                        <div className="password-icon" {...toggleGenerarPassc && {style: {display: 'none'}}} onClick={toggleTypePassc}>
                                                            <i data-feather="eye"> {typePassC == 'password' ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>} </i>
                                                        </div>
                                                    </label>
                                                    <div className="button-fancy" onClick={ () => {setToggleGenerarPassc(!toggleGenerarPassc) }} title="Generar Password" > <BsKeyFill style={toggleGenerarPassc && { color: "#434ce8" }} /> </div>
                                                </div>

                                                { EditUser && 
                                                    <div className='input-group-flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Cambiar Clave en Plataforma al Aceptar: 
                                                        </div>
                                                        <div className="form-check form-switch" style={{ width: "50%"}}>
                                                            <label className="toggle">
                                                                <input type="checkbox"  name="cambiarPassword" value={cambiarPassword} onChange={handleChange} />
                                                                <span  style={{ top: "10px"}}></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                }

                                            </div>
                                        </div>

                                        <div className= "card shadow border-0 flex" >

                                            <div className='card-body'>
                                                <div className='input-group mb-1' style= {{ paddingLeft : "8.5px" }}>
                                                    <p className='subtitulo'>Datos Adicionales</p>
                                                </div>

                                                <div className='input-group-flex mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Plataforma: { UsrSo }
                                                    </div>
                                                    
                                                    <select id="UsrSo" className="form-select form-select-lg " value={UsrSo} onChange={handleChange} name="UsrSo" >

                                                        <option value="99">
                                                        ADM Dominio not Trusted</option>

                                                        <option value="11">
                                                        AIX</option>

                                                        <option value="63">
                                                        Amazon Web Services - IAM</option>

                                                        <option value="20">
                                                        AS/400 Iseries</option>

                                                        <option value="61">
                                                        Azure AD</option>

                                                        <option value="62">
                                                        Google Workspace</option>

                                                        <option value="13">
                                                        HP-Ux</option>

                                                        <option value="66">
                                                        Huawei - IAM</option>

                                                        <option value="9">
                                                        Linux</option>

                                                        <option value="65">
                                                        MongoDB</option>

                                                        <option value="58">
                                                        MySql Server</option>

                                                        <option value="60">
                                                        Oracle</option>

                                                        <option value="51">
                                                        Otros con Soporte SSH</option>

                                                        <option value="55">
                                                        Otros con Soporte TCP</option>

                                                        <option value="50">
                                                        Otros con Soporte Telnet</option>

                                                        <option value="23">
                                                        Proceso Manual</option>

                                                        <option value="3">
                                                        Proceso Manual Windows</option>

                                                        <option value="56">
                                                        SAP</option>

                                                        <option value="57">
                                                        SAP Adaptive Server Enterprise</option>

                                                        <option value="5">
                                                        Servicio Windows</option>

                                                        <option value="24">
                                                        Sin Conexion</option>

                                                        <option value="15">
                                                        Solaris</option>

                                                        <option value="2">
                                                        SQL Server</option>

                                                        <option value="41">
                                                        SSH (Routers-Switchs-Firewalls)</option>

                                                        <option value="17">
                                                        Tandem</option>

                                                        <option value="40">
                                                        Telnet (Routers-Switch-Firewall-Etc)</option>

                                                        <option value="7">
                                                        Unix</option>

                                                        <option value="59">
                                                        Web Service</option>

                                                        <option value="1">
                                                        Windows</option>

                                                        <option value="30">
                                                        Windows No Trusted</option>

                                                        <option value="19">
                                                        Z/OS Racf</option>

                                                        <option value="191">
                                                        Z/OS Top Secret</option>

                                                        <option value="21">
                                                        Z/VM</option>

                                                    </select>

                                                </div> 

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Modelo de generacion de Password:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " aria-label=""  value={IdModelos} onChange={handleChange} name="IdModelos">
                                                        <option value="1">Alfanumerico</option>
                                                        <option value="2">Ascendiente</option>
                                                    </select>
                                                </div> 

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Politica de Configuracion:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " aria-label="" value={PoliticaConfiguracion} onChange={handleChange} name="PoliticaConfiguracion">
                                                        <option value="0">No Asignada</option>
                                                        <option value="1">Asignado</option>
                                                    </select>
                                                </div> 
                                                
                                                { 
                                                (UsrSo != 191 && UsrSo != 21 && UsrSo != 3 && UsrSo != 23 && UsrSo != 24) && 
                                                <>
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Usuario Administrador Asignado:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " aria-label="" value={UsrAdmin} onChange={handleChange} name="UsrAdmin">
                                                        <option value="0">Sin Administrador</option>
                                                        <option value="1">nova\administrador</option>
                                                    </select>
                                                </div> 
                                                </>
                                                }

                                                { 
                                                UsrAdmin != "0" && 
                                                <>

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Descripcion del Usuario Administrador:
                                                    </div>
                                                    <input type="text" className="form-input" value={UsrADDescripcion} name="UsrADDescripcion" readOnly />
                                                </div>
                                                <div className='flex main-header mb-3'  >
                                            
                                                    <div  className="input-tag no-select">
                                                    <label className='LabelForm'> Expirar Password en Reset: </label>
                                                    <input type='checkbox'  name='chk' checked={false} disabled onChange={handleChange} />
                                                    </div>
                                                    <div  className="input-tag no-select">
                                                    <label className='LabelForm'> Desbloquear Usuario en Reset: </label>
                                                    <input type='checkbox'  name='chk' checked={false} disabled onChange={handleChange} />
                                                    </div>

                                                </div>

                                                </>
                                                }

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Sistema:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " aria-label="" value={Sistema} onChange={handleChange} name="Sistema">
                                                        <option value="2">Aplicacion</option>
                                                        <option value="1">Dominio</option>
                                                    </select>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className= "content-main">
                                <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                        <div className= "card  shadow border-0 flex" >

                                            { 
                                                (UsrSo == 63 || UsrSo == 2 || UsrSo == 60 || UsrSo == 57 || UsrSo == 11  || UsrSo == 15 || UsrSo == 17  
                                                || UsrSo == 41 || UsrSo == 50 || UsrSo == 51 || UsrSo == 20 || UsrSo == 55 || UsrSo == 59
                                                || UsrSo == 1 || UsrSo == 3 || UsrSo == 9 
                                                || UsrSo == 23 || UsrSo == 30 || UsrSo == 99 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65 
                                                || UsrSo == 7  ||UsrSo == 13 ) &&    
                                            <div className='card-body'>
                                                { 
                                                UsrSo == 63  && 
                                                <>
                                                    <div className='input-group-flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            ID Clave de Acceso: (aws)
                                                        </div>
                                                        <input type="text" className="form-input" value={AccessKeyID || ''} name="AccessKeyID" onChange={handleChange} />
                                                    </div> 
                                                    <div className='input-group-flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Clave de Acceso Secreta: (aws)
                                                        </div>
                                                        <input type="text" className="form-input" value={SecretAccessKey || ''} name="SecretAccessKey" onChange={handleChange} />
                                                    </div> 
                                                    <div className='input-group-flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            ID o Alias: (aws)
                                                        </div>
                                                        <input type="text" className="form-input" value={AcountID || ''} name="AcountID" onChange={handleChange} />
                                                    </div> 
                                                </>
                                                }

                                                { 
                                                    (UsrSo == 2 || UsrSo == 60 || UsrSo == 57 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65) && 
                                                    <>
                                                        { 
                                                        UsrSo == 65 && 
                                                        <>
                                                            <div className='input-group-flex mb-3'>
                                                                <div  className="input-tag no-select">
                                                                Nombre Base de Datos:
                                                                </div>
                                                                <input type="text" className="form-input" value={NombreBD || ''} name="NombreBD" onChange={handleChange} />
                                                            </div> 
                                                        </>
                                                        }

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Utilizar Cadena de Conexion:
                                                            </div>
                                                            <div className="form-check form-switch" style={{ width: "50%"}}>
                                                                <label className="toggle">
                                                                    <input type="checkbox" checked={utilCadenaConexion} name="utilCadenaConexion" onChange={ () => setUtilCadenaConexion(!utilCadenaConexion) } />
                                                                    <span  style={{ top: "10px"}}></span>
                                                                </label>
                                                            </div>
                                                        </div>

                                                        { 
                                                        utilCadenaConexion && 
                                                        <>
                                                            <div className='input-group-flex mb-3'>
                                                                <div  className="input-tag no-select">
                                                                    Cadena Conexion Usuario:
                                                                </div>
                                                                <div className="form-check form-switch" style={{ width: "51%"}}>
                                                                    <textarea type="text" rows={4} style={{ width: "99%", resize:"none" }} className="form-input" value={CadenaConexionUsuario || ''} name="CadenaConexionUsuario" onChange={handleChange} />
                                                                </div>
                                                            </div> 
                                                        </>
                                                        }

                                                    </>
                                                }
                                                    
                                                { 
                                                    (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 40 || UsrSo == 41 || UsrSo == 50 || UsrSo == 51 || UsrSo == 20 || UsrSo == 55 || UsrSo == 59) && 
                                                    <>
                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Script para Cambio Clave:
                                                            </div>
                                                            <select className="form-select form-select-lg " aria-label="" value={UsrScript} name="UsrScript" onChange={handleChange}>
                                                                <option value="0">Sin Script</option>
                                                                <option value="1">Con Script</option>
                                                            </select>                                                   
                                                        </div> 
                                                        {
                                                        UsrSo == 59 &&
                                                        <>
                                                            <div className='input-group-flex mb-3'>
                                                                <div  className="input-tag no-select">
                                                                    Script para Control Clave:
                                                                </div>
                                                                <select className="form-select form-select-lg " aria-label="" value={UsrScriptControlClave} name="UsrScriptControlClave" onChange={handleChange}>
                                                                    <option value="0">Sin Script</option>
                                                                    <option value="1">Con Script</option>
                                                                </select>
                                                            </div>
                                                        </>
                                                        }

                                                        {
                                                        UsrSo != 40 &&
                                                            <div className='input-group-flex  mb-3'>
                                                                <div  className="input-tag no-select">
                                                                    Protocolo de Conexión:
                                                                </div>
                                                                <select className="form-select form-select-lg " aria-label="" value={Protocol} name="Protocol" onChange={handleChange}>
                                                                    <option value="4">SSH Automatico</option>
                                                                    <option value="1">Telnet</option>
                                                                </select>                                                   
                                                            </div> 
                                                        }

                                                    </>
                                                }

                                                
                                                
                                                { (UsrSo == 1 || UsrSo == 3 || UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 20 || UsrSo == 50 || UsrSo == 51 || UsrSo == 40 ||
                                                UsrSo == 41 || UsrSo == 55 || UsrSo == 23 || UsrSo == 30 || UsrSo == 99 || UsrSo == 20 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65) &&
                                                <>
                                                
                                                <div className='input-group-flex mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Puerto SSH:
                                                    </div>
                                                    <input type="text" className="form-input" value={SatPssh || ''} name="SatPssh" onChange={handleChange} />
                                                </div> 
                                                </>
                                                }

                                                { 
                                                (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 40 || UsrSo == 41 || UsrSo == 50 || UsrSo == 51) &&
                                                    <>
                                                    <div className='input-group-flex mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Prompt del Usuario:
                                                        </div>
                                                        <input type="text" className="form-input" value={SatPromptUC || ''} name="SatPromptUC" onChange={handleChange} />
                                                    </div>
                                                    </>
                                                }

                                                { 
                                                UsrSo == 11 && 
                                                    <>
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Autenticacion por Clave Publica:
                                                        </div>
                                                        <div className="form-check form-switch" style={{ width: "50%"}}>
                                                            <label className="toggle">
                                                                <input type="checkbox" checked={chkArchivoAdjunto_pk} name="chkArchivoAdjunto_pk" onChange={ () => setChkArchivoAdjunto_pk(!chkArchivoAdjunto_pk) } />
                                                                <span  style={{ top: "10px"}}></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    
                                                    { 
                                                    chkArchivoAdjunto_pk && 
                                                    <>
                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Archivo Pk:
                                                            </div>
                                                            <label for="ArchivoAdjunto_pk" className="btn btn-neutral flex" {...ArchivoAdjunto_pk != '' && { style : { backgroundColor: "#f5f9fc" , fontWeight : "100", fontSize:"12px" } }}>
                                                                {ArchivoAdjunto_pk != '' ?  ArchivoAdjunto_pk = ArchivoAdjunto_pk.replace(/C:\\fakepath\\/i, '')  : 'Seleccionar Archivo'}{ArchivoAdjunto_pk != '' ?  <BsArchiveFill style={{ marginLeft: "10px"}} /> : <BsArchive style={{ marginLeft: "10px"}} />}
                                                            </label>
                                                            <input id="ArchivoAdjunto_pk"  filename={ArchivoAdjunto_pk} name="ArchivoAdjunto_pk" type="file" onChange={handleChange} />
                                                        </div>
                                                        {
                                                            /*
                                                            <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select" style={{ width: "50%"}}>
                                                                
                                                            </div>
                                                            <div className="content-header-intro" style={{ width: "50%"}}>
                                                                <p>{ ArchivoAdjunto_pk}</p>
                                                            </div>
                                                        </div>
                                                        */
                                                    }

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Phassphrase:
                                                            </div>
                                                            <input type="text" className="form-input"  name="txtPassphrase_pk" value={txtPassphrase_pk || ''}  />
                                                        </div>

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                UsrSo Autenticacion a Utilizar:
                                                            </div>
                                                            <select className="form-select form-select-lg " aria-label="" value={selUsrSoAutenticacionUsr} name="selUsrSoAutenticacionUsr" onChange={handleChange}>
                                                                <option value="0">Autenticacion por Password</option>
                                                                <option value="1">...</option>
                                                            </select>                                                   
                                                        </div> 
                                                        
                                                    </>
                                                    }

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Prompt de Usuario:
                                                        </div>
                                                        <input type="text" className="form-input"  name="UserPrompt" value={UserPrompt} onChange={handleChange} />
                                                    </div>

                                                </>
                                                }

                                                { 
                                                    (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17) && 
                                                        <>
                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Shell Por Defecto:
                                                            </div>
                                                            <input type="text" className="form-input"  name="DefaultShell" value={DefaultShell} onChange={handleChange} />
                                                        </div>

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                X11:
                                                            </div>
                                                            <select className="form-select form-select-lg " aria-label="" value={x11Opt} name="x11Opt" onChange={handleChange}>
                                                                <option value="0">Desactivado</option>
                                                                <option value="1">Activado</option>
                                                            </select>                                                   
                                                        </div>
                                                        
                                                        { 
                                                            x11Opt == 1 && 
                                                            <>
                                                                <div className='input-group-flex  mb-3'>
                                                                    <div  className="input-tag no-select">
                                                                        ServidorX11:
                                                                    </div>
                                                                    <input type="text" className="form-input"  name="ServidorX11" value={ServidorX11} onChange={handleChange} />
                                                                </div>

                                                                <div className='input-group-flex  mb-3'>
                                                                    <div  className="input-tag no-select">
                                                                        UsrSo Autorizacion:
                                                                    </div>
                                                                    <select className="form-select form-select-lg " aria-label="" value={UsrSoAutorizacion} name="UsrSoAutorizacion" onChange={handleChange}>
                                                                        <option value="0">MIT</option>
                                                                        <option value="1">XDMP</option>
                                                                    </select>
                                                                </div>
                                                            </>
                                                        }
                                                    </>
                                                    }
                                            </div>
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                            { 
                            (UsrSo == 40 || UsrSo == 50) && 
                            <>
                            <div className="content-main">
                                <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                        
                                        <div className= "card  shadow border-0 flex" >
                                            <div className='card-body'>
                                                
                                                <div className='input-group mb-1' style= {{ paddingLeft : "8.5px" }}>
                                                    <p className='subtitulo'>Datos Telnet</p>
                                                </div>

                                                <div className='input-group-flex mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Envia Enter:
                                                    </div>
                                                    <select className="form-select form-select-lg " aria-label="" value={EnviaEnter} name="EnviaEnter" onChange={handleChange}>
                                                        <option value="0">No</option>
                                                        <option value="1">Si</option>
                                                    </select>
                                                </div>
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Envia Password:
                                                    </div>
                                                    <select className="form-select form-select-lg " aria-label="" value={EnviaPassword} name="EnviaPassword" onChange={handleChange}>
                                                        <option value="0">No</option>
                                                        <option value="1">Si</option>
                                                    </select>
                                                </div>
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Envia Usuario:
                                                    </div>
                                                    <select className="form-select form-select-lg " aria-label="" value={EnviaUsuario} name="EnviaUsuario" onChange={handleChange}>
                                                        <option value="0">No</option>
                                                        <option value="1">Si</option>
                                                    </select>
                                                </div>

                                                <div className='input-group-flex mb-3 '>
                                                    <div  className="input-tag no-select">
                                                        Prompt de Password:
                                                    </div>
                                                    <input type="text" className="form-input"  name="PwdPrompt" value={PwdPrompt} onChange={handleChange} />
                                                </div>
                                                <div className='input-group-flex mb-3 '>
                                                    <div  className="input-tag no-select">
                                                        Prompt de Usuario:
                                                    </div>
                                                    <input type="text" className="form-input"  name="UsrPrompt" value={UsrPrompt} onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </>
                            }

                        </div>

                        <div label="Informacion">
                            <div className= "content-main">
                                <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                        <div className= "card  shadow border-0 flex" >

                                            <div className='card-body'>
                                                <div className='input-group mb-1' style= {{ paddingLeft : "8.5px" }}>
                                                    <p className='subtitulo'>Informacion</p>
                                                </div>

                                                <div className='input-group-flex mb-3'>
                                                    
                                                <div  className="input-tag no-select">
                                                    Log de Conexion:
                                                </div>
                                                <select className="form-select form-select-lg "  value={selRegistrarLog} onChange={handleChange} name="selRegistrarLog">
                                                    <option value="1">Registrar Log</option>
                                                    <option value="2">Ascendiente</option>
                                                </select>

                                                </div> 

                                                <div className='input-group-flex mb-3'>

                                                <div  className="input-tag no-select">
                                                    Segundos Log:
                                                </div>
                                                    <input type="text" className="form-input"  placeholder="SegundosScreenshot" value={SegundosScreenshot} onChange={handleChange} />
                                                </div> 
                                            
                                                { LoggingSesionHabilitado &&
                                                <>
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Conexion sin Registro de Log:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="selConexionSinLog" value={selConexionSinLog} onChange={handleChange} >
                                                        <option value="1">Pemritir</option>
                                                        <option value="2">Cancelar</option>
                                                    </select>
                                                </div> 
                                                </>
                                                }

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Control de la Clave del Usuario	:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="ControlUsr" value={ControlUsr} onChange={handleChange} >
                                                        <option value="1">Manual</option>
                                                        <option value="2">Automatico</option>
                                                    </select>
                                                </div>  
                                                
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Cambio de Clave por Tiempo de No Uso:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="CambioAct" value={CambioAct} onChange={handleChange} >
                                                        <option value="1">Utilizar Por Defecto</option>
                                                        <option value="2">Ascendiente</option>
                                                    </select>
                                                </div>   
                                                { 
                                                UsrSo != 63  && 
                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag">
                                                        Periodo Control Automatico de Clave:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="UsrSoPeriodoCtrlClaveAuto" value={UsrSoPeriodoCtrlClaveAuto} onChange={handleChange} >
                                                        <option value="0">Utilizar Por Defecto</option>
                                                        <option value="1">Utilizar el Especificado</option>
                                                        <option value="2">No realizar Control Automatico de Clave</option>
                                                    </select>
                                                </div> 
                                                }

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Usuario Responsable	:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="Responsable" value={Responsable} onChange={handleChange} >
                                                        <option value="1">No responsable</option>
                                                        <option value="2">Ascendiente</option>
                                                    </select>
                                                </div> 

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Grupo Responsable:
                                                    </div>
                                                    
                                                    <select className="form-select form-select-lg " name="GrupoResp" value={GrupoResp} onChange={handleChange} >
                                                        <option value="1">No responsable</option>
                                                        <option value="2">Ascendiente</option>
                                                    </select>
                                                </div> 

                                                <div className='input-group-flex  mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Archivo Relacionado:
                                                    </div>
                                                    <label htmlFor="hdArchivoAdjuntoAttachId_adj1" className="btn btn-neutral flex" {...hdArchivoAdjuntoAttachId_adj1 != '' && { style : { backgroundColor: "#f5f9fc" , fontWeight : "100", fontSize:"12px" } }}>
                                                        {hdArchivoAdjuntoAttachId_adj1 != '' ?  hdArchivoAdjuntoAttachId_adj1.replace(/C:\\fakepath\\/i, '')  : 'Seleccionar Archivo'}{hdArchivoAdjuntoAttachId_adj1 != '' ?  <BsArchiveFill style={{ marginLeft: "10px"}} /> : <BsArchive style={{ marginLeft: "10px"}} />}
                                                    </label>
                                                    <input id="hdArchivoAdjuntoAttachId_adj1"  filename={hdArchivoAdjuntoAttachId_adj1} name="hdArchivoAdjuntoAttachId_adj1" type="file" onChange={handleChange} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>


                        <div label="Notificadores" >
                            <div className= "content-main">
                                <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                    <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                        <div className= "card  shadow border-0 flex" >
                                                <div className='mb-2'>
                                                {/*
                                                <div className='input-group' style= {{ paddingLeft : "8.5px" }}>
                                                    <p className='subtitulo'>Notificadores</p>
                                                </div>*/
                                                    }
                                                </div>
                                            <ComponenteSeleccionTarjetasUC 
                                                listaExterna={listaNotificadores}
                                                OnError = { (value) => { OnError(value); }} 
                                                guardarOnClick = {true}
                                                guardarHandler = {guardarHandler}
                                                multiSelect = {true}
                                                openModalListado = { openModalListado }
                                                isDoubleTable = {true}
                                                AgregarNuevo = {handleAddNotificador}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div label= { EditUser && 'Datos Estadisticos' } >
                            { EditUser &&
                            <>  
                            <div label="Informacion">
                                <div className= "content-main">
                                    <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card  shadow border-0 flex" >

                                                <div className='card-body'>
                                                    
                                                    <div className='input-group mb-1' style= {{ paddingLeft : "8.5px" }}>
                                                        <p className='subtitulo'>Datos Estadisticos</p>
                                                    </div>
                                                    
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Fecha Ultima Modificacion	
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xxx" value={"13/11/2022  22:39:36" || ''}  />
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Usuario Ultima Modificacion
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx1" value={"nova\\administrador" || ''}  />
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Fecha Ultimo Cambio de Clave Exitoso	                                                        
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx3" value={"06/10/2022  16:13:38" || ''}  />
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Fecha Proximo Cambio Clave Automatico		                                                        
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx4" value={"06/10/2022  16:13:38" || ''}  />
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Estado Ultimo Cambio Clave	                                                        
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx6" value={"No se Efectuo el Cambio" || ''}  />
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Fecha Proximo Control Clave Automatico	                                                       
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx7" value={"25/10/2022  15:02:34" || ''}  />
                                                    </div>  
                                                    
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Estado Ultimo Control Clave Automatico	                                                
                                                        </div>
                                                        <input type="text" className="form-input" readOnly  name="xx8" value={"25/10/2022  15:02:34" || ''}  />
                                                    </div>
                                                
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                            
                            </>
                            }
                        </div>
                    </Tabs>
                            
                    <ContainerFlex>
                        <div>
                            <div className='input-group-flex mb-3 mt-5'>
                                <div type='input' className="btn btn-sm btn-neutral white" onClick={() => navigate('/TablaFetchData')/*navigate(-1)*/}>Cancelar </div>
                                <button type='submit' className="btn btn-sm btn-neutral white" onClick={handleSubmit}> Aceptar</button>
                                <button type='input' className="btn btn-sm btn-neutral white" onClick={handleClear}> Reset</button>
                            </div>
                        </div>
                    </ContainerFlex>
                </div>    
            </div>
        </div>       
    </>
    )
}
