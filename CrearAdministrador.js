import  Tabs  from './components/Tabs';
import Tab from './components/Tab';

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import * as Icons from "@heroicons/react/outline";

import { useState} from 'react';

import { ListadoTarjetas } from './components/ListadoTarjetas';
import { Title } from './components/Title';
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

export const CrearAdministrador = ( {} ) => {

	const EditUser = false;
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

	const handleSubmit = (e) => {
        e.preventDefault();
		
		console.log(formState);
    }

	const { dialog, setDialog } = DialogHook ({
		title: '',
		message: '',
	} );

	const AcceptModal = () => {
		setShowModal(false);
	}
	
	const CancelModal = () => {
		setShowModal(false);
	}

	const handleCancel = (e) => {
		e.preventDefault();
		
		/*if(formState.LogonNT != '' || formState.nombre != '' || formState.email != '' || formState.emailAlt != ''){
			
			setDialog({
				title: '¿Desea cancelar la operación?',
				message: 'Se perderán los datos ingresados',
				AcceptHandler: AcceptModal,
				CancelHandler: CancelModal
			});

			setShowModal(true);
			
			return;
		}*/

	}


	const people = [
		{
			id: 0,
			name: 'Seleccionar Usuario',
			avatar:
			  'https://imgs.search.brave.com/1vEmtyV9i7XagfazE3tc75L8odX1eerXIt4KRq24VRU/rs:fit:840:880:1/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/cG5ncy9tLzM0LTM0/OTY5M19jaXJjbGVk/LXVzZXItaWNvbi10/cmFuc3BhcmVudC1i/YWNrZ3JvdW5kLXVz/ZXJuYW1lLWljb24t/aGQucG5n',
		  },
		{
		  id: 1,
		  name: 'Wade Cooper',
		  avatar:
			'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 2,
		  name: 'Arlene Mccoy',
		  avatar:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 3,
		  name: 'Devon Webb',
		  avatar:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
		},
		{
		  id: 4,
		  name: 'Tom Cook',
		  avatar:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 5,
		  name: 'Tanya Fox',
		  avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 6,
		  name: 'Hellen Schmidt',
		  avatar:
			'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 7,
		  name: 'Caroline Schultz',
		  avatar:
			'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 8,
		  name: 'Mason Heaney',
		  avatar:
			'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 9,
		  name: 'Claudie Smitham',
		  avatar:
			'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		{
		  id: 10,
		  name: 'Emil Schaefer',
		  avatar:
			'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	  ]

	  const [selected, setSelected] = useState(people[3])

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }
	return (
    <>
		<DialogComponent dialog={dialog} showModal = {showModal} setShowModal = {setShowModal} />
		<Wrapper>
			<MainHeader>
				<Title title= { ` Usuarios Administradores / Crear Usuario`} />
			</MainHeader>

			<form onSubmit={handleSubmit}>
				<Tabs Tab={currentTab} setTab={setCurrentTab}>
					<Tab label = "Datos Basicos">
						<ContainerFlex>
							<Card flex={1}>
								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"Nombre"} value={LogonNT} required={true} name="Nombre" onChange = {handleChange} />
								</InputGroup>

								<InputGroup marginTop="5" >
									<InputFancy type={"text"} placeholder={"Descripcion"} value={nombre}  name="nombre" onChange = {handleChange} />
								</InputGroup>
							
								<InputGroup marginTop="5">

								
								</InputGroup>

								
							
							</Card>
					
							<Card flex={1}>
							<div style={{width: '100%'}} className="px-2">
								<Listbox value={selected} onChange={setSelected}>
										{({ open }) => (
											<>
											<Listbox.Label className="block text-sm font-medium text-gray-700">Usario Controlado Asignado</Listbox.Label>
											<div className="relative mt-1">
												<Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
												<span className="flex items-center">
													<img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
													<span className="ml-3 block truncate">{selected.name}</span>
												</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
													<Icons.ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
												</span>
												</Listbox.Button>

												<Transition
												show={open}
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
												>
												<Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{people.map((person) => (
													<Listbox.Option
														key={person.id}
														className={({ active }) =>
														classNames(
															active ? 'text-white bg-indigo-600' : 'text-gray-900',
															'relative cursor-default select-none py-2 pl-3 pr-9'
														)
														}
														value={person}
													>
														{({ selected, active }) => (
														<>
															<div className="flex items-center">
															<img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
															<span
																className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
															>
																{person.name}
															</span>
															</div>

															{selected ? (
															<span
																className={classNames(
																active ? 'text-white' : 'text-blue-500',
																'absolute inset-y-0 right-0 flex items-center pr-4'
																)}
															>
																<Icons.CheckIcon className="h-5 w-5" aria-hidden="true" />
															</span>
															) : null}
														</>
														)}
													</Listbox.Option>
													))}
												</Listbox.Options>
												</Transition>
											</div>
											</>
										)}
										</Listbox>
										</div>

										<div className='mt-7 mb-3 flex'>
											<label className='input-group'>
												<InputFancy type={"text"} placeholder={"Nombre Usuario"} value={LogonNT} required={true} name="Nombre" onChange = {handleChange} />
											</label>

											<label className='input-group'>
												<InputFancy type={"text"} placeholder={"Descripcion Usuario"} value={LogonNT} required={true} name="Nombre" onChange = {handleChange} />
											</label>
										</div>

										<InputGroup marginTop="5" >
											<InputFancy type={"text"} placeholder={"Sistema"} value={LogonNT} required={true} name="Nombre" onChange = {handleChange} />
										</InputGroup>

										<InputGroup marginTop="5" >
											<InputFancy type={"text"} placeholder={"Localizacion"} value={nombre}  name="nombre" onChange = {handleChange} />
										</InputGroup>
										
							</Card>
							</ContainerFlex>

							<ContainerFlex>

								<Card flex={1}>
									<InputGroup marginTop="2" marginBottom="2" flex={true}>
										<SelectComponent label="Protocolo de Conexion" name="ProtocoloConexion" value={1} onChange={handleChange} 
										options = { [
											{ value: '4', label: 'SSH Automatico' },
											{ value: '1', label: 'Telnet' },
											] } />
									</InputGroup>
									<InputGroup marginTop="2" marginBottom="2" flex={true}>
										<SelectComponent label="Protocolo de Conexion" name="ProtocoloConexion" value={1} onChange={handleChange} 
										options = { [
											{ value: '4', label: 'SSH Automatico' },
											{ value: '1', label: 'Telnet' },
											] } />
									</InputGroup>
									<InputGroup marginTop="2" marginBottom="2" flex={true}>
										<SelectComponent label="Protocolo de Conexion" name="ProtocoloConexion" value={4} onChange={handleChange} 
										options = { [
											{ value: '4', label: 'SSH Automatico' },
											{ value: '1', label: 'Telnet' },
											] } />
									</InputGroup>
									<InputGroup marginTop="2" marginBottom="2" flex={true}>
										<SelectComponent label="Protocolo de Conexion" name="ProtocoloConexion" value={1} onChange={handleChange} 
										options = { [
											{ value: '4', label: 'SSH Automatico' },
											{ value: '1', label: 'Telnet' },
											] } />
									</InputGroup>
								
								</Card>
							</ContainerFlex>
						</Tab>
					
					<Tab { ...EditUser ? { label:"Elementos relacionados" } : { label:"" } } >
						
					</Tab>
				</Tabs>
				<ContainerFlex center={true} gap={false}>
					<Button label="Cancelar" onClick={handleCancel} type="button" />
					<Button label="Guardar" onClick={handleSubmit} type="submit" />   
				</ContainerFlex>
			</form>
		</Wrapper>
    </>
  );
  
}
