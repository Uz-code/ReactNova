import { useEffect,useState } from 'react';
import { useForm } from './hooks/useForm';
import React from 'react';
import { useLocation } from 'react-router'
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';
import { useNavigate } from 'react-router-dom';
import { SearchForUser } from './SearchForUser';
import  Tabs  from './components/Tabs';
import { BsKeyFill } from 'react-icons/bs';

export const EditUser = () => {
   

    const [ ArchivoAdjunto_pk, setArchivoAdjunto_pk ] = useState( false );
    
    const [ usersId, setUsersId ] = useState( '' );
    useEffect ( () => {
        setValue("notificadores", usersId);
    }, [usersId] );

 
    const 
    {
    formState,
    setShowModal,
    showModal,
    handleChange,
    handleSubmit,
    handleClear,
    setValue,
    StateMessageError,
    setStateMessageError,
    title,
    UsrSo,
    UsrScript,
    Protocol,
    x11Opt,
    TipoAutorizacion,
    EnviaEnter,
    EnviaPassword,
    EnviaUsuario,
    PwdPrompt,
    UsrPrompt,
    username,
    puertoDeConexion,
    localizacion,
    descripcion,
    Password,
    passchk,
    Passwordc,
    passcchk,
    cambiarPassword,
    txtPassphrase_pk,
    toggleGenerarPass, setToggleGenerarPass,
    toggleGenerarPassc, setToggleGenerarPassc,
    IdModelos,
    PoliticaConfiguracion,
    UsrAdmin,
    Sistema,
    selTipoAutenticacionUsr,
    UserPrompt,
    Shell,
    ServidorX11,
    } = useForm({
    //Datos por defecto del formulario mas adelante ver como cargarlos desde la base de datos
    username: '',
    Password: '',
    passchk: '',
    Passwordc: '',
    passcchk: '',
    cambiarPassword : false,
    puertoDeConexion: '3840',
    localizacion: '',
    descripcion: '',
    notificadores : '',
    UsrSo: 99,
    Protocol: '4',
    UsrScript: 0,
    txtPassphrase_pk : '',
    x11Opt: 0,
    TipoAutorizacion: 0,
    IdModelos : 1,
    PoliticaConfiguracion : 0,
    UsrAdmin : 0,
    Sistema : 2,
    selTipoAutenticacionUsr : 0,
    UserPrompt : 'regex:[\\.\\$\\]%#>~@]( )?$',
    Shell : '/bin/bash',
    ServidorX11: 'localhost',
    });
    
    let navigate = useNavigate();

    const openModal = () => {
        setShowModal(prev => !prev);
    };
    
    const togglePassc = () => {
        setToggleGenerarPassc(!toggleGenerarPassc);
    };
    const togglePass = () => {
        setToggleGenerarPass(!toggleGenerarPass);
        
    };

    function AcceptHandler() {
        setShowModal(false);
    }

    function cancelHandler() {
        setShowModal(false);
    }

    const location = useLocation();
 
    var id = 0;
    var EditUser = false;
    if( location.state != null )
    {
        id = location?.state.id; 
        EditUser = true;
    }




    return (
        <>
        
        <Modal showModal={showModal} setShowModal={setShowModal} >
            <AlertComponent titulo="Error" subtitulo={StateMessageError} type={2} cancelHandler={cancelHandler} AcceptHandler={cancelHandler}  />
        </Modal> 
        
        <div className="App-header App-body">
            <div className= "responsive-wrapper container-fluid ">
                <div className= "main-header">
                    <h1> { EditUser ? `Editar Usuario ${id}`: 'Crear Usuario' } </h1>
                </div>
                
                <form onSubmit={handleSubmit} className = '' >

                </form>

                    <div >
                        <Tabs> 
                            <div label = "Datos del Usuario">
                                <div className= "content-main">
                                    <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 main-section form-user" style={{  flex:1 }}>

                                            <div className= "card a45w shadow border-0 " >

                                                <div className='card-body'>

                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Datos Basicos </label>
                                                    </div>

                                                    <div className='input-group mb-3'>
                                                        <input type="text"  className="input-fancy"name="username" placeholder="Nombre" value={username} onChange={handleChange} />
                                                    </div>
                                                    <div className='input-group mb-3'>
                                                        <input type="text"  className="input-fancy"name="descripcion" placeholder="Descripcion" value={descripcion || ''} onChange={handleChange} />
                                                    </div>
                                                    <div className='input-group mb-3'>
                                                        <input type="text"  className="input-fancy"name="localizacion" placeholder="Localizacion" value={localizacion || ''} onChange={handleChange} />
                                                    </div>
                                            
                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Seguridad </label>
                                                    </div>

                                                    <div className='input-group-flex mb-3'>
                                                        <input type="password"  className="input-fancy" name="Password" placeholder="Password" value={Password}  {...toggleGenerarPass && {readOnly: true}} onChange={handleChange} /> 
                                                        <input type="password"  className="input-fancy" name="passchk" placeholder="Verificacion" value={passchk} {...toggleGenerarPass && {readOnly: true}} onChange={handleChange} />
                                                        <div className="button-fancy" onClick={togglePass} title="Generar Password" > <BsKeyFill style={toggleGenerarPass && { color: "blue" }} /> </div>
                                                    </div> 
                                            
                                                    <div className='input-group-flex  mb-3'>
                                                        <input type="password"  className="input-fancy"name="Passwordc" placeholder="Password Combinada" value={Passwordc} {...toggleGenerarPassc && {readOnly: true}}  onChange={handleChange} />
                                                        <input type="password"  className="input-fancy"name="passcchk" placeholder="Verificacion" value={passcchk} {...toggleGenerarPassc && {readOnly: true}}  onChange={handleChange} />
                                                        <div className="button-fancy" onClick={togglePassc} title="Generar Password" > <BsKeyFill style={toggleGenerarPassc && { color: "blue" }} /> </div>
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
                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Datos Adicionales </label>
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

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Usuario Administrador Asignado:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={UsrAdmin} onChange={handleChange} name="UsrAdmin">
                                                            <option value="1">No tiene</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div> 

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

                                                <div className='card-body'>
                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Datos de Conexion</label>
                                                    </div>
                                
                                                    { 
                                                    UsrSo == 11 && 
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
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Protocolo de Conexión:
                                                        </div>
                                                        <select className="form-select form-select-lg " aria-label="" value={Protocol} name="Protocol" onChange={handleChange}>
                                                            <option value="4">SSH Automatico</option>
                                                            <option value="1">Telnet</option>
                                                        </select>                                                   
                                                    </div> 
                                                
                                                </>
                                                }

                                                <div className='input-group-flex mb-3'>
                                                    <div  className="input-tag no-select">
                                                        Puerto:
                                                    </div>
                                                    <input type="text" className="form-input" value={puertoDeConexion || ''} name="puertoDeConexion" onChange={handleChange} />
                                                </div> 

                                                { 
                                                UsrSo == 11 && 
                                                    <>
                                                
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Autenticacion por Clave Publica:
                                                        </div>
                                                        <div className="form-check form-switch" style={{ width: "50%"}}>
                                                            <label className="toggle">
                                                                <input type="checkbox" checked={ArchivoAdjunto_pk} name="chkArchivoAdjunto_pk" onChange={ () => setArchivoAdjunto_pk(!ArchivoAdjunto_pk) } />
                                                                <span  style={{ top: "10px"}}></span>
                                                            </label>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    { 
                                                    ArchivoAdjunto_pk && 
                                                    <>
                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Archivo Pk:
                                                            </div>
                                                            <div type='file' name="file" className="btn btn-neutral flex" >Upload File </div>
                                                        </div>

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Phassphrase:
                                                            </div>
                                                            <input type="text" className="form-input"  name="txtPassphrase_pk" value={txtPassphrase_pk || ''} onChange={handleChange} />
                                                        </div>

                                                        <div className='input-group-flex  mb-3'>
                                                            <div  className="input-tag no-select">
                                                                Tipo Autenticacion a Utilizar:
                                                            </div>
                                                            <select className="form-select form-select-lg " aria-label="" value={selTipoAutenticacionUsr} name="selTipoAutenticacionUsr" onChange={handleChange}>
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

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Shell Por Defecto:
                                                        </div>
                                                        <input type="text" className="form-input"  name="Shell" value={Shell} onChange={handleChange} />
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
                                                                    Tipo Autorizacion:
                                                                </div>
                                                                <select className="form-select form-select-lg " aria-label="" value={TipoAutorizacion} name="TipoAutorizacion" onChange={handleChange}>
                                                                    <option value="0">MIT</option>
                                                                    <option value="1">XDMP</option>
                                                                </select>
                                                            </div>
                                                        </>
                                                    }
                                                </>
                                                
                                                }
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="content-main">
                                    <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            { 
                                            UsrSo == 11 && 
                                            <>
                                            <div className= "card  shadow border-0 flex" >
                                                <div className='card-body'>
                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Datos Telnet</label>
                                                    </div>

                                                    <div className='input-group-flex  mb-3'>
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

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Prompt de Password:
                                                        </div>
                                                        <input type="text" className="form-input"  name="PwdPrompt" value={PwdPrompt} onChange={handleChange} />
                                                    </div>
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Prompt de Usuario:
                                                        </div>
                                                        <input type="text" className="form-input"  name="UsrPrompt" value={UsrPrompt} onChange={handleChange} />
                                                    </div>

                                                </div>
                                            </div>
                                            </>
                                            }
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div label="Informacion">
                                <div className= "content-main">
                                    <div className= "row g-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card  shadow border-0 flex" >

                                                <div className='card-body'>
                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Datos de Conexion</label>
                                                    </div>

                                                    <div className='input-group-flex mb-3'>
                                                        
                                                    <div  className="input-tag no-select">
                                                            Log de Conexion:
                                                    </div>

                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">Registrar Log</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>

                                                    </div> 

                                                    <div className='input-group-flex mb-3'>

                                                    <div  className="input-tag no-select">
                                                            Segundos Log:
                                                    </div>
                                                        <input type="text" className="form-input"  placeholder="Segundos" value={'0'} />
                                                    </div> 
                                                
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Conexion sin Registro de Log:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">Pemritir</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div> 

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Control de la Clave del Usuario	:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">Manual</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div>  
                                                    
                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Cambio de Clave por Tiempo de No Uso:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">Utilizar Por Defecto</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div>   

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Periodo Control Automatico de Clave:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">Utilizar Por Defecto</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div> 

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Usuario Responsable	:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">No responsable</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div> 

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Grupo Responsable:
                                                        </div>
                                                        
                                                        <select className="form-select form-select-lg " aria-label="" value={'1'}>
                                                            <option value="1">No responsable</option>
                                                            <option value="2">Ascendiente</option>
                                                        </select>
                                                    </div> 

                                                    <div className='input-group-flex  mb-3'>
                                                        <div  className="input-tag no-select">
                                                            Archivo Relacionado	:
                                                        </div>
                                                        <div type='file' name="file" className="btn btn-neutral flex" >Upload File </div>

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
                                                <div className='card-body'>

                                                    <div className='input-group mb-3'>
                                                        <label className='LabelForm'>Usuarios Notificadores </label>
                                                    </div>
                                                    
                                                </div>

                                                <SearchForUser setMensajeAlerta={ setStateMessageError }  usersId = { usersId } setUsersId = { setUsersId }   />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div label= { EditUser && 'Datos Estadisticos' } >
                                { EditUser && 'content' }
                            </div>
                        </Tabs>

                        <div className= "mb-6">
                            <div className= "row g-6 mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                <div className= "col-xl-3 col-sm-6 col-12 main-section form-user" style={{  flex:1 }}>
                                    <div className= " a45w  border-0 " >
                                        <div className='card-body'>
                                            <div className='input-group-flex mb-3'>
                                                <div type='input' className="btn btn-sm btn-neutral flex" onClick={() => navigate('/TablaFetchData')/*navigate(-1)*/}>Cancelar </div>
                                                <button type='submit' className="btn btn-sm btn-neutral flex" onClick={handleSubmit}> Aceptar</button>
                                               <button type='input' className="btn btn-sm btn-neutral flex" onClick={handleClear}> Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
              
                
            </div>
        </div> 
    </>
    )
}
