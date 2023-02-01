import { AddFilter } from './components/AddFilter';
import { useState , useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { CustomTablaUsuariosControlados } from './CustomTablaUsuariosControlados';
import { SeleccionarItem } from './SeleccionarItem';
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { DialogHook } from './hooks/DialogHook';
import { DialogComponent } from './components/DialogComponent';
import { ContentMain } from './components/ContentMain';
import { Title } from './components/Title';
import Pagination from './components/Pagination';
import { AccentButton} from './components/AccentButton';

import * as Icons from "@heroicons/react/outline";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import './Tabla.css';

export const TablaFetchData = () => {

    const { dialog, setDialog } = DialogHook ( { title: '', message: '' } );

    const [ listaUsuarios, setListaUsuarios ] = useState( [] );
    const [ listaIDUsuarios , setListaIDUsuarios ] = useState( [] );

    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const [limit, setLimit] = useState('10');

    const [maxResultados, setMaxResultados] = useState('0');

    const [showModal, setShowModal] = useState(false);

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const onAddCampoBusqueda = ( newCampoBusqueda ) => {
        setCampoBusqueda( newCampoBusqueda );
    }

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        setLimit( newLimit );
    }

    const openModal = () => {
      setShowModal(prev => !prev);
    };
   

    const openErrorModal = ( value ) => {
      
        setDialog( { title: "Error! ☠️", message: value , AcceptHandler: () => setShowModal(false) , CancelHandler: () => setShowModal(false) } );

        openModal();

    };

    const openOptionModal = ( value, customButtonText = "Aceptar"  ) => {
        
        setDialog( { title: "Alerta!", message: value , customButtonText : customButtonText, AcceptHandler: () =>  AcceptHandler() , CancelHandler: () => setShowModal(false) } );

        openModal();

    };

    const OpenDesactivarModal = ( value ) => {

        const AcceptHndlr = ( ) => {
            alert("desactivando...");
            setShowModal(false);
            forceUpdate(1);
        }

        setDialog( { title: "Alerta! ", message: value , AcceptHandler: () => AcceptHndlr() , CancelHandler: () => setShowModal(false) } );

        openModal();

    };

    const openModalListado = ( ) => {
        
        if(listaIDUsuarios === undefined || listaIDUsuarios.length == 0){
            
            openErrorModal('No hay usuarios seleccionados');
            
            return;
        }

        setDialog( { title: "Lista de usuarios seleccionados! ", message: listaIDUsuarios , AcceptHandler: () => AcceptHandler() , CancelHandler: () => setShowModal(false) } );

        openModal();
        
    };

    function AcceptHandler() {
        setShowModal(false);
        forceUpdate(1);
    }

    function cancelHandler() {
        setShowModal(false);
    }

    const guardarHandler = ( arr ) => {
        
        if (arr.length > 0) {

            let listId;
            let listNombre;

            if (arr.length > 1) {
               const arrlistId = arr.map( (item) => item.id );
               listId = arrlistId.join(',');

               listNombre = arr.map( (item) => item.name );

            } else {
                listId = arr[0].id;

                listNombre = arr[0].name;
            }


            setListaUsuarios(arr);
            setListaIDUsuarios(listId);
            
        }
        else
        {
            setListaUsuarios([]);
            setListaIDUsuarios([]);
        }

        setShowModal(false);

    }

    let navigate = useNavigate();

    function navigateTo(userID) {
        navigate('/EditUser',{state:{id:userID,Nombre:'Usuario1',Localizacion:'128.128.10.221',Sistema:'Aplicacion'}});
    }
    
    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <>

            <DialogComponent dialog={ dialog } showModal={showModal}  setShowModal={setShowModal} />

            <Wrapper>
            
                <MainHeader>
                    <Title title='Usuarios Controlados'>
                        <AccentButton label='Crear Nuevo' onClick={() => { navigate('/EditUser'); }}  ></AccentButton>
                    </Title>
                </MainHeader>
                        
                <ContentMain>
                    <ContainerFlex>
                            <Card flex={1}>
                                <AddFilter onNewCampoBusqueda={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } titulo={"Filtro"} />
                            </Card>
                    </ContainerFlex>

                    <ContainerFlex>
                        <div className= "card shadow border-0 flex" >
                            <div class=" px-5 pt-8 grid justify-items-end ...">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                    <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  focus:ring-offset-gray-100">
                                        Acciones
                                    <Icons.ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                    </div>

                                    <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                onClick={() => { openModalListado(); }}
                                                >
                                                Editar
                                                </a>
                                            )}
                                            </Menu.Item>
                                            </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'                                                    
                                                )}
                                                onClick={() => { forceUpdate(1); }}
                                                >
                                                Eliminar
                                                </a>
                                            )}
                                            </Menu.Item>
                                        </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>

                            <SeleccionarItem minimoSeleccion = {0} hasListaUsuarios={false}  openModalListado={openModalListado} guardarOnClick={true} listaExterna={listaUsuarios} guardarHandler = { (arr) => { guardarHandler(arr); } } cancelHandler={cancelHandler} multiSelect={true} limpiarLista={update} >
                                <CustomTablaUsuariosControlados
                                    options = { options }
                                    key={ campoBusqueda } 
                                    setMaxResultados={ setMaxResultados } 
                                    forceUpdate = { update }
                                    onError={ (value) => openOptionModal(value,'Reintentar') }
                                    setUser = { (value) => navigateTo(value) }
                                    onDesactivar = { (value) => OpenDesactivarModal(value)}
                                    onDelete = { (value) => openOptionModal(value)}
                                    hasActions = {true}
                                />
                            </SeleccionarItem>
                            
                            <div className="card-footer footer-start">
                                <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
                            </div>
                        </div>
                    </ContainerFlex>
                    
                    <ContainerFlex>
                            <Card>
                                <Pagination
                                    className="pagination-bar"
                                    currentPage={PaginaActual}
                                    totalCount={maxResultados}
                                    pageSize={limit}
                                    onPageChange={page => setPaginaActual(page)}
                                    siblingCount={1}
                                />
                            </Card>
                    </ContainerFlex>
                </ContentMain>
            </Wrapper>
        </>
    );
}
