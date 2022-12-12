import { AddFilter } from './components/AddFilter';
import React, { useState, useEffect , useReducer } from 'react';
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Pagination from './components/Pagination';

import { CustomTablaUsuariosControlados } from './CustomTablaUsuariosControlados';
import { SeleccionarItem } from './SeleccionarItem';

import './Tabla.css';

export const TablaFetchData = () => {
    const [ listaUsuarios, setListaUsuarios ] = useState( [] );
    const [ listaIDUsuarios , setListaIDUsuarios ] = useState( [] );

    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const [limit, setLimit] = useState('10');

    const [maxResultados, setMaxResultados] = useState('0');

    const [showModal, setShowModal] = useState(false);

    const [tituloAlerta, settituloAlerta] = useState('');
    
    const [MensajeAlerta, setMensajeAlerta] = useState('');
  
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
      
        settituloAlerta('Error! ☠️');
        
        setMensajeAlerta(value);
        
        openModal();

      };

      const openOptionModal = ( value ) => {
      
        settituloAlerta('Alerta');

        setMensajeAlerta(value);
        openModal();

    };

    const openModalListado = ( ) => {
        
        if(listaIDUsuarios === undefined || listaIDUsuarios.length == 0){
            openErrorModal('No hay usuarios seleccionados');
            return;
        }

        settituloAlerta('Lista de usuarios seleccionados');
        
        setMensajeAlerta(listaIDUsuarios);
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

    const [userID, setUser] = useState(null);

    useEffect ( () => {
        if (userID != null) {
            navigateTo();
        }
    }, [userID]) 

    let navigate = useNavigate();

    function navigateTo() {
        navigate('/EditUser',{state:{id:userID}});
    }
    
   

    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );

    //console.log("App reendering");
    return (
        <>
            
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <AlertComponent title={tituloAlerta} message={MensajeAlerta} cancelHandler={cancelHandler} AcceptHandler={AcceptHandler}  />
            </Modal>
                
            <div className= "App-header">
                <div className= "App-body">
                    <div className= "responsive-wrapper  container-fluid ">
                        <div className= "main-header">
                            <h1>Usuarios Controlados</h1>
                            <div className="button btn-submit" onClick={() => { navigate('/EditUser'); }}> 
                                <i className="ph-faders-bold"></i>
                                <span>Crear Nuevo</span>
                            </div>
                        </div>
                        
                        <div className="content VietnamPro-Font">
                            <div className="content-main">

                                <div className= "container-fluid">
                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card shadow border-0 flex card-noheigth" >

                                                {/*<button type='' className="BtnPrincipal" onClick={openModal}> Alet modal</button>*/}

                                                {/*<button type='' className="BtnPrincipal" onClick={openErrorModal}> Error modal</button>*/}
                                                
                                                <div className="card-body">
                                                 
                                                    <div className="content-header-actions">
                                                        <AddFilter onNewCategory={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } 
                                                        titulo={"Filtro"} />
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            
                                            <div className= "card shadow border-0 flex" >
                                            
                                                <div className="card-header">
                                                     <div class="" style={ { paddingLeft: "6px" } }>
                                                        <p class="subtitulo">Usuarios</p>
                                                    </div>  
                                                    <button className="btn btn-primary" onClick={() => { openModalListado(); }} >Simulacion de accion masiva</button>

                                                </div>

                                                <SeleccionarItem minimoSeleccion = {0} hasListaUsuarios={false}  openModalListado={openModalListado} guardarOnClick={true} listaExterna={listaUsuarios} guardarHandler = { (arr) => { guardarHandler(arr); } } cancelHandler={cancelHandler} multiSelect={true} limpiarLista={update} >
                                                    <CustomTablaUsuariosControlados
                                                        options = { options }
                                                        key={ campoBusqueda } 
                                                        setMaxResultados={ setMaxResultados } 
                                                        forceUpdate = { update }
                                                        onError={ (value) => openErrorModal(value) }
                                                        setUser = {setUser}
                                                        onDelete = { (value) => openOptionModal(value) }
                                                        hasActions = {true}
                                                    />
                                                </SeleccionarItem>
                                                
                                                <div className="card-footer footer-start">
                                                    <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className= "row g-6 mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card shadow border-0 flex card-noheigth" >
                                                <div className="card-header">
                                                    <nav aria-label="">

                                                        <Pagination
                                                        className="pagination-bar"
                                                        currentPage={PaginaActual}
                                                        totalCount={maxResultados}
                                                        pageSize={limit}
                                                        onPageChange={page => setPaginaActual(page)}
                                                        siblingCount={1}
                                                        />

                                                    </nav>
                                                </div>
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
