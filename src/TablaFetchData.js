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
    const [ listLocalizacion, setListLocalizacion ] = useState( [] );

    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const [limit, setLimit] = useState('10');

    const [maxResultados, setMaxResultados] = useState('0');

    const [showModal, setShowModal] = useState(false);

    const [typeButtons, setTypeButtons] = useState(1);

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
      
        setTypeButtons(2);
        settituloAlerta('Error! ☠️');
        
        setMensajeAlerta(value);
        openModal();

      };

    const openOptionModal = ( value ) => {
      
        setTypeButtons(1);
        settituloAlerta('Alerta');
        
        setMensajeAlerta(value);
        openModal();

      };

    function AcceptHandler() {
        //alert("usuario pepito eliminado exitosamente");

        setShowModal(false);
        forceUpdate(1);

    }

    function cancelHandler() {
        setShowModal(false);
    }

    const [userID, setUser] = useState(null);

    useEffect ( () => {
        if (userID != null) {
            navigateTo();
        }
    }, [userID]) 

    const PageComponent = () => {
            
        return <AlertComponent titulo={tituloAlerta} subtitulo={MensajeAlerta} type={typeButtons} cancelHandler={cancelHandler} AcceptHandler={AcceptHandler}  />
    }

    let navigate = useNavigate();

    function navigateTo() {
        navigate('/EditUser',{state:{id:userID}});
    }
    
    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );

    console.log("App reendering");

    return (
        <>
            
            <Modal showModal={showModal} setShowModal={setShowModal}  >
                <PageComponent/>
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
                                                
                                                <div className="card-header">
                                                    <div>
                                                        <h3>Filtro</h3>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="content-header-actions">
                                                        <AddFilter  onNewCategory={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } />  	
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            
                                            <div className= "card shadow border-0 flex" >
                                            
                                                <div className="card-header">
                                                    <h5 className="mb-0">Usuarios</h5>
                                                </div>

                                                <SeleccionarItem  setMensajeAlerta={ (value) => openErrorModal(value)  }  guardarHandler = { (arr) => { setListLocalizacion(arr); } } cancelHandler={cancelHandler}  listaExterna={listLocalizacion} multiSelect={true}>
                                                <CustomTablaUsuariosControlados
                                                     options = { options }
                                                     key={ campoBusqueda } 
                                                     setMaxResultados={ setMaxResultados } 
                                                     forceUpdate = { update }
                                                     onError={ (value) => openErrorModal(value) }
                                                     setUser = {setUser}
                                                     onDelete = { (value) => openOptionModal(value) }
                                                     hasActions = {true}
                                                     isSelectable = {false}
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
