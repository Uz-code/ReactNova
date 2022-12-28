import { React, useEffect,useState } from 'react';
import { useForm } from './hooks/useForm';
import { useLocation } from 'react-router'
import { AddUF } from './AddUF';

import miniatura from './img/miniatura.png';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

import { Modal } from './components/Modal';
import { DialogHook } from './hooks/DialogHook';
import { useNavigate } from 'react-router-dom';

import { BsKeyFill } from 'react-icons/bs';

import { ComponenteSeleccionUsuarioControlado } from './ComponenteSeleccionUsuarioControlado';
import { ComponenteSeleccionTarjetasUC } from './ComponenteSeleccionTarjetasUC';

import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { InputGroup } from './components/InputGroup';
import { InputFancy } from './components/InputFancy';
import { FormCheckbox } from './components/FormCheckbox';

import { SelectComponent } from './components/SelectComponent';
import { TextareaComponent } from './components/TextareaComponent';
import { Button } from './components/Button';

import { DialogComponent } from './components/DialogComponent';
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { SeleccionarArchivo } from './components/SeleccionarArchivo';
import { SeleccionarItem } from './SeleccionarItem';
import { FormSubtituleComponent } from './components/FormSubtituleComponent';
import { PasswordComponent } from './components/PasswordComponent';
/**tablade usuarios */

import {UserDefaultData} from './helpers/UserDefaultData';

export const EditUser = () => {

    const [EditUser , setEditUser] = useState(false);

    const location = useLocation();
    
    const FetchData = async (Username, Localizacion, Sistema) => {
        let response = await UserDefaultData(Username,Localizacion,Sistema);
        return await response;
    }

    useEffect (() => {
        
        if( location.state != null )
        {

            let id = location?.state.id; 
           
            setEditUser(true);

            if (id != null)
            {
                FetchData('Nombre','Localizacion','Sistema').then(data => {
                setFormState(data);
                // console.log(data.notificadores);
                //TODO conseguir los nombres de los notificadores actuales en formato [{ name : "Terry Medust" , id : 1 }]
                //getListaNotificadores(data.notificadores);
                setListaNotificadores([{ name : "Sheldon Quigley" , id : 2 }]) ;
                });  
            }
    
        }
    
    }, []);
     
    var 
    {
    formState,
    setFormState,
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
    } = useForm( {
        //Datos por defecto del formulario mas adelante ver como cargarlos desde la base de datos
        username: '',
        Password: '',
        passchk: '',
        Passwordc: '',
        passcchk: '',
        cambiarPassword : false,
        SatPssh: '3840',
        SatPromptUC : 'regex:[\\.\\$\\]%#>~@]( )?$',
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
        DefaultShell : '/bin/bash',
        ServidorX11: 'localhost',
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
    } );

    const [ toggleCambiarComponente, setToggleCambiarComponente ] = useState(false);

    const UsrADDescripcion = 'Administrador de dominio';
   
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

    const [ listaNotificadores, setListaNotificadores ] = useState( [] );

    const [ currentTab, setCurrentTab ] = useState( "" );

    const [ typeModal, setTypeModal ] = useState( 1 );

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

    //para el boton de generar por satCS
    const togglePassc = () => {
        setToggleGenerarPassc(!toggleGenerarPassc);
    };
    const togglePass = () => {
        setToggleGenerarPass(!toggleGenerarPass);
        
    };

    // para los handlers de el modal
    function AcceptHandler() {
        setShowModal(false);
    }

    function CancelHandler() {
        setShowModal(false);
    }

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

            setCurrentTab("Notificadores");

        }
        setToggleCambiarComponente(false);

        setToggleMiniatura(false);

        
    };

    const handleAddNotificador = () => {

        setToggleMiniatura(true);
        
        setToggleCambiarComponente(true);
    };
    
    const { dialog, setDialog } = DialogHook ( { title: '', message: '' } );

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
            {toggleMiniatura &&
                <div className="card shadow miniatura" style={{ width: '195px', height:'120px', cursor: 'pointer', position: 'absolute', top: '92%', left: '91%', transform: 'translate(-50%, -50%)', zIndex: '1000' }} onClick={() => setToggleCambiarComponente(true)}>
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
            <Wrapper>
			    <MainHeader>
                    <h1> Usuarios Controlados / { EditUser ? `Editar Usuario `: 'Crear Usuario' } </h1>
                </MainHeader>
                        <Tabs Tab={currentTab} setTab={setCurrentTab} >
                            <Tab label = "Datos del Usuario">
                                <ContainerFlex>
                                    <Card flex={1}>
                                        <div className='mb-4'></div>
                                        {
                                        //<div className='input-group mb-6'>
                                        //<label className='LabelForm'>Datos Basicos </label>
                                            //<p className='subtitulo'>Datos Basicos</p>
                                        //</div>
                                        /*    <form onSubmit={handleSubmit}>
                                        </form>*/
                                        }
                                        <InputGroup marginTop="5" >
                                            <InputFancy type={"text"} placeholder={"Nombre"} value={username} required={true} name="username" onChange = {handleChange} />
                                        </InputGroup>
                                        
                                        <InputGroup marginTop="5" >
                                            <InputFancy type={"text"} placeholder={"Descripción"} value={descripcion} required={false} name="descripcion" onChange = {handleChange} />
                                        </InputGroup>

                                        <div className='mt-5 flex'>
                                            <label className='input-group'>
                                                <input type="text"className="input-fancy" name="localizacion" placeholder="  " required={true} value={(UsrSo == 61  || UsrSo == 62 || UsrSo == 56) ?  nombreLocalizacion : localizacion } disabled = {(UsrSo == 61  || UsrSo == 62 || UsrSo == 56) && {disabled: true}} onChange={handleChange} />
                                                <p className="required">Localizacion </p>
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

                                        <div className='mt-5 flex'>
                                            <label className='input-group'>
                                                <PasswordComponent   title = {'Password'} value = {Password} name="Password" required={true} onChange = {handleChange} toggleTypePass = {toggleTypePass} typePass = {typePass}  toggleGenerarPass = {toggleGenerarPass} />
                                            </label>

                                            <label className='input-group'>
                                                <PasswordComponent  title = {'Verificacion'} value = {passchk} name="passchk" required={true} onChange = {handleChange} toggleTypePass = {toggleTypePass} typePass = {typePass}  toggleGenerarPass = {toggleGenerarPass} />
                                            </label>
                                            <div className="button-fancy" onClick={togglePass} title="Generar Password" > <BsKeyFill style={toggleGenerarPass && { color: "#434ce8" }} /> </div>
                                        </div>

                                        <div className='mt-5 flex'>
                                            <label className='input-group'>
                                                <PasswordComponent  title = {'Password Combinada'} value = {Passwordc} name="Passwordc" onChange = {handleChange} toggleTypePass = {toggleTypePassc} typePass = {typePassC}  toggleGenerarPass = {toggleGenerarPassc} />
                                            </label>

                                            <label className='input-group'>
                                            <PasswordComponent  title = {'Verificacion'} value = {passcchk} name="passcchk" onChange = {handleChange} toggleTypePass = {toggleTypePassc} typePass = {typePassC}  toggleGenerarPass = {toggleGenerarPassc} />
                                            </label>
                                            <div className="button-fancy" onClick={togglePassc} title="Generar Password" > <BsKeyFill style={toggleGenerarPassc && { color: "#434ce8" }} /> </div>
                                        </div>

                                        { EditUser && 
                                            <InputGroup marginTop="5" flex={true}>
                                                <FormCheckbox flex= {true} width="50%"label="Cambiar Clave en Plataforma al Aceptar" name="cambiarPassword" value={cambiarPassword} onChange = {handleChange} />
                                            </InputGroup>
                                        }
                                    </Card>

                                    <Card flex={1}>
                                        {/*
                                        <div className='input-group mt-0'>
                                            <p className='subtitulo'  style= {{ paddingLeft : "1rem" }}>Datos Adicionales</p>
                                        </div>*/}

                                        <InputGroup marginTop="5" flex={true}>
                                            <SelectComponent label="Plataforma" name="UsrSo" value={UsrSo} onChange = {handleChange}
                                            options = { [
                                                { value: '99', label: 'ADM Dominio not trusted' },
                                                { value: '11', label: 'AIX' },
                                                { value: '63', label: 'Amazon Web Services - IAM' },
                                                { value: '20', label: 'AS/400 Iseries' },
                                                { value: '61', label: 'Azure AD' },
                                                { value: '62', label: 'Google Workspace' },
                                                { value: '13', label: 'HP-Ux' },
                                                { value: '66', label: 'Huawei - IAM' },
                                                { value: '9', label: 'Linux' },
                                                { value: '65', label: 'MongoDB' },
                                                { value: '58', label: 'MySql Server' },
                                                { value: '60', label: 'Oracle' },
                                                { value: '51', label: 'Otros con Soporte SSH' },
                                                { value: '55', label: 'Otros con Soporte TCP' },
                                                { value: '50', label: 'Otros con Soporte Telnet' },
                                                { value: '23', label: 'Proceso Manual' },
                                                { value: '3', label: 'Proceso Manual Windows' },
                                                { value: '56', label: 'SAP' },
                                                { value: '57', label: 'SAP Adaptive Server Enterprise' },
                                                { value: '5', label: 'Servicio Windows' },
                                                { value: '24', label: 'Sin Conexion' },
                                                { value: '15', label: 'Solaris' },
                                                { value: '2', label: 'SQL Server' },
                                                { value: '41', label: 'SSH (Routers-Switchs-Firewalls)' },
                                                { value: '17', label: 'Tandem' },
                                                { value: '40', label: 'Telnet (Routers-Switch-Firewall-Etc)' },
                                                { value: '7', label: 'Unix' },
                                                { value: '59', label: 'Web Service' },
                                                { value: '1', label: 'Windows' },
                                                { value: '30', label: 'Windows No Trusted' },
                                                { value: '19', label: 'Z/OS Racf' },
                                                { value: '191', label: 'Z/OS Top Secret' },
                                                { value: '21', label: 'Z/VM' },
                                            ]} />
                                        </InputGroup>
                                      
                                        <InputGroup marginTop="3" flex={true}>
                                            <SelectComponent label="Modelo de generacion de Password" name="IdModelos" value={IdModelos} onChange = {handleChange}
                                            options = { [
                                                { value: '1', label: 'Alfanumerico' },
                                                { value: '2', label: 'Ascendiente' },
                                            ]} />
                                        </InputGroup>

                                        <InputGroup marginTop="3" flex={true}>
                                            <SelectComponent label="Politica de Confiuracion" name="PoliticaConfiguracion" value={PoliticaConfiguracion} onChange = {handleChange}
                                            options = { [
                                                { value: '0', label: 'No Asignada' },
                                                { value: '1', label: 'Asignado' },
                                            ]} />
                                        </InputGroup>

                                        { 
                                        (UsrSo != 191 && UsrSo != 21 && UsrSo != 3 && UsrSo != 23 && UsrSo != 24) && 
                                        <>
                                        <InputGroup marginTop="3" flex={true}>
                                            <SelectComponent label="Usuario Administrador Asignado" name="UsrAdmin" value={UsrAdmin} onChange = {handleChange} 
                                            options = { [
                                                { value: '0', label: 'Sin Administrador' },
                                                { value: '1', label: 'nova\\administrador' },
                                            ]} />
                                        </InputGroup>
                                        </>
                                        }

                                        { 
                                        UsrAdmin != "0" && 
                                            <>
                                            <InputGroup marginTop="3" flex={true}>
                                                <InputFancy fancy={false} disabled={true} placeholder="Descripcion del Usuario Administrador" name="UsrADDescripcion" value={UsrADDescripcion} onChange = {handleChange} type={"text"} />
                                            </InputGroup>

                                            <div className='flex main-header mt-3'  >
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

                                        <InputGroup marginTop="3" flex={true}>
                                            <SelectComponent label="Sistema" name="Sistema" value={Sistema} onChange = {handleChange}
                                            options = { [
                                                { value: '1', label: 'Dominio' },
                                                { value: '2', label: 'Aplicacion' },
                                            ]} />
                                        </InputGroup>

                                    </Card>
                                </ContainerFlex>

                                { 
                                (UsrSo == 63 || UsrSo == 2 || UsrSo == 60 || UsrSo == 57 || UsrSo == 11  || UsrSo == 15 || UsrSo == 17  
                                || UsrSo == 41 || UsrSo == 50 || UsrSo == 51 || UsrSo == 20 || UsrSo == 55 || UsrSo == 59
                                || UsrSo == 1 || UsrSo == 3 || UsrSo == 9 
                                || UsrSo == 23 || UsrSo == 30 || UsrSo == 99 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65 
                                || UsrSo == 7  || UsrSo == 13 ||  UsrSo == 40 ) &&    
                                <>
                                    <ContainerFlex>
                                        <Card flex={1}>
                                                { 
                                                UsrSo == 63  && 
                                                <>
                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <InputFancy fancy={false} placeholder="ID Clave de Acceso (aws)" name="AccessKeyID" value={AccessKeyID} onChange = {handleChange} />
                                                    </InputGroup>
                                                   
                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <InputFancy fancy={false} placeholder="Clave de Acceso Secreta (aws)" name="SecretAccessKey" value={SecretAccessKey} onChange = {handleChange} />
                                                    </InputGroup>

                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <InputFancy fancy={false} placeholder="ID o Alias (aws)" name="AcountID" value={AcountID} onChange = {handleChange} />
                                                    </InputGroup>
                                                </>
                                                }

                                                { 
                                                    (UsrSo == 2 || UsrSo == 60 || UsrSo == 57 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65) && 
                                                    <>
                                                        { 
                                                        UsrSo == 65 && 
                                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                                <InputFancy fancy={false} placeholder="Nombre Base de Datos" name="NombreBD" value={NombreBD} onChange = {handleChange} />
                                                            </InputGroup>
                                                        }

                                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                            <FormCheckbox flex= {true} width="50%" label="Utilizar Cadena de Conexion" name="utilCadenaConexion" value={utilCadenaConexion} onChange = {() => setUtilCadenaConexion(!utilCadenaConexion) } />
                                                        </InputGroup>

                                                        { 
                                                        utilCadenaConexion && 
                                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                            <TextareaComponent label="Cadena Conexion" rows={4} name="CadenaConexionUsuario" value={CadenaConexionUsuario || ''} onChange = {handleChange} />
                                                        </InputGroup>
                                                        }

                                                    </>
                                                }
                                                
                                                { 
                                                    (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 40 || UsrSo == 41 || UsrSo == 50 || UsrSo == 51 || UsrSo == 20 || UsrSo == 55 || UsrSo == 59) && 
                                                    <>
                                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                            <SelectComponent fancy={false} label="Script para Cambio Clave" name="UsrScript" value={UsrScript} onChange = {handleChange} 
                                                            options = { [
                                                                { value: '0', label: 'Sin Script' },
                                                                { value: '1', label: 'Con Script' },
                                                            ]} />
                                                        </InputGroup>
                                                       
                                                        {
                                                        UsrSo == 59 &&
                                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                                <SelectComponent fancy={false} label="Script para Control Clave" name="UsrScriptControlClave" value={UsrScriptControlClave} onChange = {handleChange}
                                                                options = { [
                                                                    { value: '0', label: 'Sin Script' },
                                                                    { value: '1', label: 'Con Script' },
                                                                ]} />
                                                            </InputGroup>   
                                                        }

                                                        {
                                                        UsrSo != 40 &&
                                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                                <SelectComponent label="Protocolo de Conexion" name="Protocol" value={Protocol} onChange={handleChange} 
                                                                options = { [
                                                                    { value: '4', label: 'SSH Automatico' },
                                                                    { value: '1', label: 'Telnet' },
                                                                    ] } />
                                                            </InputGroup>
                                                        }

                                                    </>
                                                }

                                                { (UsrSo == 1 || UsrSo == 3 || UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 20 || UsrSo == 50 || UsrSo == 51 || UsrSo == 40 ||
                                                   UsrSo == 41 || UsrSo == 55 || UsrSo == 23 || UsrSo == 30 || UsrSo == 99 || UsrSo == 20 || UsrSo == 58 || UsrSo == 64 || UsrSo == 65) &&
                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <InputFancy fancy={false} placeholder="Puerto SSH" name="SatPssh" value={SatPssh} onChange = {handleChange} />
                                                    </InputGroup>
                                                }

                                                { 
                                                (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17 || UsrSo == 40 || UsrSo == 41 || UsrSo == 50 || UsrSo == 51) &&
                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <InputFancy fancy={false} placeholder="Prompt de Usuario" name="SatPromptUC" value={SatPromptUC} onChange = {handleChange} />
                                                    </InputGroup>
                                                }

                                                { 
                                                UsrSo == 11 && 
                                                    <>
                                                    <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                        <FormCheckbox label="Autenticacion por Clave Publica" name="chkArchivoAdjunto_pk" checked={chkArchivoAdjunto_pk} onChange={ () => setChkArchivoAdjunto_pk(!chkArchivoAdjunto_pk) } />
                                                    </InputGroup>
                                                    
                                                    { 
                                                    chkArchivoAdjunto_pk && 
                                                    <>
                                                        
                                                        <InputGroup marginTop="2" marginBottom="2" flex={true} >
                                                            <SeleccionarArchivo label="Archivo PK" name="ArchivoAdjunto_pk" value={ArchivoAdjunto_pk} onChange={handleChange} />
                                                        </InputGroup>

                                                        <InputGroup marginTop="2" marginBottom="2" flex={true} >
                                                            <InputFancy fancy={false} label="Phassphrase" value={txtPassphrase_pk} onChange = {handleChange} />
                                                        </InputGroup>

                                                        <InputGroup marginTop="2" marginBottom="2" flex={true} >
                                                            <SeleccionarItem label="Autenticacion a Utilizar"  name="selUsrSoAutenticacionUsr" value={selUsrSoAutenticacionUsr} onChange={handleChange}
                                                            options = { [
                                                                { value: '0', label: 'Autenticacion por Password' },
                                                                { value: '1', label: '...' },
                                                            ]} />
                                                        </InputGroup>
                                                        
                                                    </>
                                                    }

                                                    <InputGroup marginTop="2" marginBottom="2"  flex={true}>     
                                                    prompt de usuario?
                                                    </InputGroup>

                                                </>
                                                }

                                                { 
                                                    (UsrSo == 7 || UsrSo == 9 || UsrSo == 11 || UsrSo == 13 || UsrSo == 15 || UsrSo == 17) && 
                                                        <>
                                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                            <InputFancy fancy={false} placeholder="Shlell por Defecto" name="DefaultShell" value={DefaultShell} onChange = {handleChange} />
                                                        </InputGroup>

                                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                            <SelectComponent fancy={false} label="Puerto X11" name="x11Opt" value={x11Opt} onChange = {handleChange} 
                                                            options = { [
                                                                { value: '0', label: 'Desactivado' },
                                                                { value: '1', label: 'Activado' },
                                                            ] } />
                                                        </InputGroup>

                                                        
                                                        { 
                                                            x11Opt == 1 && 
                                                            <>
                                                                <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                                    <InputFancy fancy={false} placeholder="Servidor X11" name="ServidorX11" value={ServidorX11} onChange = {handleChange} />
                                                                </InputGroup>

                                                                <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                                    <SelectComponent fancy={false} placeholder="UsrSoAutorizacion" name="UsrSoAutorizacion" value={UsrSoAutorizacion} onChange = {handleChange}
                                                                    options = { [
                                                                        { value: '0', label: 'MIT' },
                                                                        { value: '1', label: 'XDMP' },
                                                                    ]} />
                                                                </InputGroup>

                                                            </>
                                                        }
                                                    </>
                                                }
                                            
                                        </Card>
                                    </ContainerFlex>
                                </>
                                }

                                { 
                                (UsrSo == 40 || UsrSo == 50) && 
                                <>
                                    <ContainerFlex>
                                        <Card>
                                            <div className='input-group mt-1'>
                                                <p className='subtitulo'  style= {{ paddingLeft : "1rem" }}>Datos Telnet</p>
                                            </div>
                                           
                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <SelectComponent fancy={false} label="Envia Enter" name="EnviaEnter" value={EnviaEnter} onChange = {handleChange}
                                                options = { [
                                                    { value: '0', label: 'No' },
                                                    { value: '1', label: 'Si' },
                                                ]} />
                                            </InputGroup>

                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <SelectComponent fancy={false} label="Envia Password" name="EnviaPassword" value={EnviaPassword} onChange = {handleChange}
                                                options = { [
                                                    { value: '0', label: 'No' },
                                                    { value: '1', label: 'Si' },
                                                ]} />
                                            </InputGroup>

                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <SelectComponent fancy={false} label="Envia Usuario" name="EnviaUsuario" value={EnviaUsuario} onChange = {handleChange}
                                                options = { [
                                                    { value: '0', label: 'No' },
                                                    { value: '1', label: 'Si' },
                                                ]} />
                                            </InputGroup>

                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <InputFancy fancy={false} placeholder="User Prompt" name="UsrPrompt" value={UsrPrompt} onChange = {handleChange} />
                                            </InputGroup>
                                            
                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <InputFancy fancy={false} placeholder="PasswordPrompt" name="PwdPrompt" value={PwdPrompt} onChange = {handleChange} />
                                            </InputGroup>

                                        </Card>
                                    </ContainerFlex>
                                </>
                                }

                            </Tab>

                            <Tab label="Informacion">
                                <ContainerFlex>
                                    <Card flex={1}>
                                        <div className='input-group mt-1'>
                                            <p className='subtitulo'  style= {{ paddingLeft : "1rem" }}>Informacion</p>
                                        </div>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                           <SelectComponent label="Log de Conexion" name="selRegistrarLog" value={selRegistrarLog} onChange = {handleChange}
                                            options = { [
                                                { value: '0', label: 'No' },
                                                { value: '1', label: 'Si' },
                                            ]} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false} placeholder="Segundos Log" name="SegundosScreenshot" value={SegundosScreenshot} onChange = {handleChange} />
                                        </InputGroup>
                                    
                                        { LoggingSesionHabilitado &&
                                            <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                                <SelectComponent label="Conexion sin Registro Log" name="selConexionSinLog" value={selConexionSinLog} onChange = {handleChange}
                                                options = { [
                                                    { value: '1', label: 'Permitir' },
                                                    { value: '2', label: 'Cancelar' },
                                                ]} />
                                            </InputGroup>
                                        }

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <SelectComponent label="Control de la Clave del Usuario" name="ControlUsr" value={ControlUsr} onChange = {handleChange} 
                                            options = { [
                                                { value: '1', label: 'Manual' },
                                                { value: '2', label: 'Automatico' },
                                            ]} />
                                        </InputGroup>
                                        
                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <SelectComponent label="Cambio de Clave por Tiempo No Uso" name="CambioAct" value={CambioAct} onChange = {handleChange}
                                            options = { [
                                                { value: '0', label: 'No' },
                                                { value: '1', label: 'Si' },
                                            ]} />
                                        </InputGroup>

                                        { 
                                        UsrSo != 63  && 
                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <SelectComponent label="Periodo Control Automatico de Clave" name="UsrSoPeriodoCtrlClaveAuto" value={UsrSoPeriodoCtrlClaveAuto} onChange = {handleChange}
                                            options = { [
                                                { value: '0', label: 'Utilizar Por Defecto' },
                                                { value: '1', label: 'Utilizar el Especificado' },
                                                { value: '2', label: 'No realizar Control Automatico de Clave' },
                                            ]} />
                                        </InputGroup>
                                        }

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <SelectComponent label="Usuario Responsable" name="Responsable" value={Responsable} onChange = {handleChange}
                                            options = { [
                                                { value: '0', label: 'No' },
                                                { value: '1', label: 'Si' },
                                            ]} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <SelectComponent label="Grupo Responsable" name="GrupoResp" value={GrupoResp} onChange = {handleChange}
                                            options = { [
                                                { value: '1', label: 'No responsable' },
                                                { value: '2', label: 'Ascendiente' },
                                            ]} />
                                        </InputGroup>

                                        <InputGroup marginTop={3} flex={true} >
                                            <SeleccionarArchivo label="Archivo Relacionado" name="hdArchivoAdjuntoAttachId_adj1" value={hdArchivoAdjuntoAttachId_adj1} onChange={handleChange} />
                                        </InputGroup>
                                    </Card>
                                </ContainerFlex>
                            </Tab>


                            <Tab label="Notificadores" >
                               <ContainerFlex >
                                    <Card flex={1}>
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
                                    </Card>
                                </ContainerFlex>
                            </Tab>
                            
                            <Tab { ...EditUser && {label : "Datos Estadisticos"} } > { EditUser &&
                                <ContainerFlex >
                                    <Card flex={1}>
                                        
                                        <FormSubtituleComponent name="Datos Estadisticos" />
                                       
                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Fecha Ultima Modificacion" name="FechaUltimaModificacion" value={"13/11/2022  22:39:36"} disabled = {true} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Usuario Ultima Modificacion" name="UsuarioUltimaModificacion" value={"nova\\administrador"} disabled = {true} />
                                        </InputGroup>
                               
                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Fecha Ultimo Cambio de Clave Exitoso" name="FechaCC" value={"06/10/2022  16:13:38"} disabled = {true} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Fecha Proximo Cambio Clave Automatico" name="Fechca" value={"06/10/2022  16:13:38"} disabled = {true} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Estado Ultimo Cambio Clave" name="Fechca" value={"No se Efectuo el Cambio"} disabled = {true} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Fecha Proximo Control Clave Automatico" name="Fechca1" value={"25/10/2022  15:02:34"} disabled = {true} />
                                        </InputGroup>

                                        <InputGroup marginTop="2" marginBottom="2" flex={true}>
                                            <InputFancy fancy={false}  placeholder="Estado Ultimo Control Clave Automatico" name="xx8" value={"25/10/2022  15:02:34"} disabled = {true} />
                                        </InputGroup>

                                    </Card>
                                </ContainerFlex>
                            }</Tab>
                        </Tabs>
                            
                        <ContainerFlex center={true} gap={false} >
                            <Button label="Cancelar" onClick={() => navigate('/TablaFetchData')} type="button" />
                            <Button label="Aceptar" onClick={handleSubmit} type="submit" />
                            <Button label="Reset" onClick={handleClear} type="button" />
                        </ContainerFlex>
            </Wrapper>
            </>
        }

           
           
    </>
    )
}
