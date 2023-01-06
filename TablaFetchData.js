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

    return (
        <>

            <DialogComponent dialog={ dialog } showModal={showModal}  setShowModal={setShowModal} />

            <Wrapper>
            
                <MainHeader>
                    <Title title={'Usuarios Controlados'} >
                        <div className="button btn-submit" onClick={() => { navigate('/EditUser'); }}> 
                            <i className="ph-faders-bold"></i>
                            <span>Crear Nuevo</span>
                        </div>
                    </Title>
                </MainHeader>
                        
                <ContentMain>
                    <ContainerFlex>
                            <Card flex={1}>
                                <div className="content-header-actions">
                                    <AddFilter onNewCampoBusqueda={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } titulo={"Filtro"} />
                                </div>
                            </Card>
                    </ContainerFlex>

                    <ContainerFlex>
                        <div className= "card shadow border-0 flex" >
                            <div className="card-header">
                                <div style={ { paddingLeft: "6px" } }>
                                    <p className="subtitulo">Usuarios</p>
                                </div>  
                                <button className="btn btn-primary" onClick={() => { openModalListado(); }} >Simulacion de accion masiva</button>

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
