import  Tabs  from './components/Tabs';
import Tab from './components/Tab';

import { useState} from 'react';

import { ListContent } from './components/ListContent';
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { InputGroup } from './components/InputGroup';
import { InputFancy } from './components/InputFancy';
import { FormCheckbox } from './components/FormCheckbox';
import { useForm } from './hooks/useForm';
import { useEffect } from 'react';

import { SelectComponent } from './components/SelectComponent';
import { TextareaComponent } from './components/TextareaComponent';
import { Button } from './components/Button';

import { DialogHook } from './hooks/DialogHook';
import { DialogComponent } from './components/DialogComponent';

export const AddUF = ( {AcceptHandler} ) => {

	const EditUser = true;
	const id = 0;

    const [ currentTab, setCurrentTab ] = useState( "" );
	
	var 
    {
    formState,
    setShowModal,
    showModal,
    handleChange,
	setValue,
	setValues,
	LogonNT,
	nombre,
	email,
	emailAlt,
	TipoAuth,
	Responsable_chk,
	SeguridadRol,
	SeguridadRolTipo,
	SeguridadLog,
	selTipoMetodoAutenticacion,
	chkEnviarInvitacionEnrolamientoSATAG,
	txtComentarioInvitacionSATAG,
	chkDispositivoHabilitado_SATWeb,
	chkDispositivoHabilitado_SATMobile,
	chkDispositivoHabilitado_AppExt,
	chkDispositivoHabilitado_SATApi,
    } = useForm({
    //Datos por defecto del formulario mas adelante ver como cargarlos desde la base de datos
    LogonNT: '',
	nombre: '',
	email: '',
	emailAlt: '',
	TipoAuth: '0',
	Responsable_chk : false,
	SeguridadRol: '3',
	SeguridadLog: '0',
	selTipoMetodoAutenticacion: '0',
	chkEnviarInvitacionEnrolamientoSATAG: false,
	txtComentarioInvitacionSATAG: '',
	chkDispositivoHabilitado_SATWeb: false,
	chkDispositivoHabilitado_SATMobile: false,
	chkDispositivoHabilitado_AppExt: false,
	chkDispositivoHabilitado_SATApi: false,
    });

	const [ dictionary, setDictionary ] = useState( [
		{ value: '0', label: 'Windows' },
		{ value: '1', label: 'Azure' }
	  ] );

	  useEffect ( () => {

		if ( formState.TipoAuth === '0' ) {
			setDictionary( [
				{ value: '0', label: 'Windows' },
				{ value: '1', label: 'Azure' }
			  ] );

			  setValues( {
				...formState,
				selTipoMetodoAutenticacion: '0',
				chkEnviarInvitacionEnrolamientoSATAG: false,
			  } );	
		}
		else {
			setDictionary( [
				{ value: '3', label: 'Preguntas SATAG' }
			] );
			setValues( { ...formState, selTipoMetodoAutenticacion: '3' } );
		}

	}, [ formState.TipoAuth ] );	
	
	useEffect ( () => {
		if (formState.SeguridadRol == 3 || formState.SeguridadRol == 4) // Si es Admiinistrador o Sub-Admiinistrador 
		{
			
			if (formState.SeguridadRol == 3) //Admiinistrador
			{
				
			}
			else //Sub-Admiinistrador 
			{

			}
			
			
		}
		else
		{
		
			
			if (formState.SeguridadRol == 5) //Usuario Normal
			{
				
			}
			else
			{
			
			}
		}
		
	}, [ formState.SeguridadRol ] );
	
	const handleSubmit = (e) => {
        e.preventDefault();
		
		console.log(formState);
		let valid = true; //validar el submit del usuario, retornar el id del usuario y el nombre del usuario para el listado de usuarios funcionales

		if(formState != null && valid){
			
			/* TODO Crear Objeto nombre, id para el listado*/
			if(formState.LogonNT != ''){

			let username = formState.LogonNT;
			
			formState.nombre && (username = username + ' (' + formState.nombre + ')');

			let obj = { name : username , id : 1 }

				AcceptHandler && AcceptHandler(obj);
			}
		}
    }

	const { dialog, setDialog } = DialogHook ({
		title: '',
		message: '',
	} );

	const AcceptModal = () => {
		setShowModal(false);
		AcceptHandler && AcceptHandler(null); /* else back to page */
	}
	
	const CancelModal = () => {
		setShowModal(false);
	}

	const handleCancel = (e) => {
		e.preventDefault();
		
		if(formState.LogonNT != '' || formState.nombre != '' || formState.email != '' || formState.emailAlt != ''){
			
			setDialog({
				title: '¿Desea cancelar la operación?',
				message: 'Se perderán los datos ingresados',
				AcceptHandler: AcceptModal,
				CancelHandler: CancelModal
			});

			setShowModal(true);
			
			return;
		}

		AcceptHandler && AcceptHandler(null); /* else back to page */

	}

	return (
    <>
		<DialogComponent dialog={dialog} showModal = {showModal} setShowModal = {setShowModal} />
		<Wrapper>
			<MainHeader>
				<h1> Usuarios Funcionales / { EditUser ? `Editar Usuario ${id}`: 'Crear Usuario' } </h1>
			</MainHeader>

			<form onSubmit={handleSubmit}>
				<Tabs Tab={currentTab} setTab={setCurrentTab}>
					<Tab label = "Datos Basicos">
						<ContainerFlex>
							<Card flex={1}>
								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"LogonNT"} value={LogonNT} required={true} name="LogonNT" onChange = {handleChange} />
								</InputGroup>

								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"Apellido y Nombre"} value={nombre}  name="nombre" onChange = {handleChange} />
								</InputGroup>

								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"Email"} value={email}  name="email" onChange = {handleChange} />
								</InputGroup>

								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"Email Alternativo"} value={emailAlt}  name="emailAlt" onChange = {handleChange} />
								</InputGroup>
							</Card>

							<Card flex={1}>
								<InputGroup marginTop="5" flex={true}>
									<SelectComponent label="Rol" name="SeguridadRol" value={SeguridadRol} onChange = {handleChange}
									options = { [
										{ value: '3', label: 'Administrador' },
										{ value: '4', label: 'Sub-Admiinistrador ' },
										{ value: '6', label: 'Soporte Tecnico ' },
										{ value: '5', label: 'Usuario Normal' },
										{ value: '2', label: 'Custom' }
									] } />
								</InputGroup>
								
								{SeguridadRol == 4 &&
									<InputGroup marginTop="5" flex={true}>
										<SelectComponent label="Tipo Rol" name="SeguridadRolTipo" value={SeguridadRolTipo} onChange = {handleChange}
										options = { [
											{ value: '0', label: 'Por Defecto' },
											{ value: '1', label: 'Usuarios' },
											{ value: '2', label: 'Recursos' },
											{ value: '3', label: 'Usuarios y Recursos' }
										] } />
									</InputGroup>
								}
	
								{(SeguridadRol == 3 || SeguridadRol == 4) &&
									<InputGroup marginTop="5" flex={true}>
										<FormCheckbox flex= {true} width="50%" disabled={SeguridadRol == 4} label="Responsable" name="Responsable_chk" value={Responsable_chk} onChange = {handleChange} />
									</InputGroup>
								}
								
								<InputGroup marginTop="5" flex={true}>
									<SelectComponent label="Tipo Autenticacion" name="TipoAuth" value={TipoAuth} onChange = {handleChange}
									options = { [
										{ value: '0', label: 'Autenticacion Interna' },
										{ value: '1', label: 'Autenticacion Externa' }
									] } />
								</InputGroup>
							

								{(SeguridadRol == 3 || SeguridadRol == 4  || SeguridadRol == 6) &&
									<InputGroup marginTop="5" flex={true}>
										<SelectComponent label="Ver Log Actividad" name="SeguridadLog" value={SeguridadLog} onChange = {handleChange}
										options = { [
											{ value: '0', label: 'Activado' },
											{ value: '1', label: 'Desactivado' }
										] } />
									</InputGroup>		
								}	
								<br/>	
							</Card>
						</ContainerFlex>

						<ContainerFlex half={true} justifyContent = {"space-between"}>
							<Card flex={1}>
								<InputGroup marginTop="1" flex={true}>
									<SelectComponent label="Metodo Autenticacion" name="selTipoMetodoAutenticacion" value={selTipoMetodoAutenticacion} onChange = {handleChange} options = { dictionary } />
								</InputGroup>
								
								{selTipoMetodoAutenticacion == 3 &&
									<FormCheckbox flex= {true} width="50%" label="Invitacion Enrolamiento" name={"chkEnviarInvitacionEnrolamientoSATAG"} value={chkEnviarInvitacionEnrolamientoSATAG} onChange = {handleChange} />
								}

								{chkEnviarInvitacionEnrolamientoSATAG &&
									<InputGroup marginTop="5" marginBottom={"2"} flex={true}>
										<TextareaComponent rows={4} label="Mensaje Invitacion" name="txtComentarioInvitacionSATAG" value={txtComentarioInvitacionSATAG} onChange = {handleChange} />
									</InputGroup>
								}

							</Card>
							
							<Card minHeight={true} flex={1} cardSmall={true}>
								<div className='input-tag no-select'>
									<small className='subtitulo'>Acceso:</small>
								</div>
								<FormCheckbox label="Sat Web" name={"chkDispositivoHabilitado_SATWeb"} width="20%" flex={true} value={chkDispositivoHabilitado_SATWeb} onChange = {handleChange} />
								<FormCheckbox label="Sat Mobile" name={"chkDispositivoHabilitado_SATMobile"}   width="20%" flex={true} value={chkDispositivoHabilitado_SATMobile} onChange = {handleChange} />
								<FormCheckbox label="Applicacion Externa" name={"chkDispositivoHabilitado_AppExt"}  width="20%" flex={true} value={chkDispositivoHabilitado_AppExt} onChange = {handleChange} />
								<FormCheckbox label="Sat Extension API" name={"chkDispositivoHabilitado_SATApi"}  width="20%" flex={true} value={chkDispositivoHabilitado_SATApi} onChange = {handleChange} />
							</Card>

						</ContainerFlex>
					</Tab>
					
					<Tab { ...EditUser ? { label:"Elementos relacionados" } : { label:"" } } >
						<ContainerFlex>
							<Card flex={1}>
							<div className='drop__container'>
								<div className='card-body'>
									<h1>Grupos Asignados</h1>
								</div>
									<div className='drop__list'>
										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Grupo 1" content3={ 'grupo administradores'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Grupo 2" content3={ 'grupo notificadores'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Grupo 3" content3={ 'grupo personas'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
									</div>
								</div>
								<br/>
							</Card>
							<Card flex={1}>
								<div className='drop__container'>
									<div className='card-body'>
										<h1>Sobres Asignados</h1>
									</div>	

									<div className='drop__list'>	
										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Sobre 1" content3={ 'Sobre administradores'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
										
										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Sobre 2" content3={ 'sobres numero 2'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>

										<div  className= { `card  border-0 flex` } style= {{ boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Sobre 3" content3={ 'sobre 1430'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
									</div>
								</div>
							</Card>
							<Card flex={1}>
								<div className='drop__container'>
									<div className='card-body'>
										<h1>Sobres de Grupos</h1>
									</div>	

									<div className='drop__list'>	
										<div  className= { `card  border-0 flex` } style= {{ flexDirection: 'row' , justifyContent: 'space-between' , boxShadow: '4px 4px 16px rgb(10 22 70 / 6%), -2px -2px 16px #fff '}}>
											<ListContent content1="Sobre 3" content3={ 'grupo administrador'} content4= { 'Localizacion'} content5= { 'nova (128.128.10.65)'} />
										</div>
									</div>
								</div>
							</Card>
						</ContainerFlex>
					</Tab>
				</Tabs>
				<ContainerFlex center={true} >
					<Button label="Cancelar" onClick={handleCancel} type="button" />
					<Button label="Guardar" onClick={handleSubmit} type="submit" />   
				</ContainerFlex>
			</form>
		</Wrapper>
    </>
  );
  
}
