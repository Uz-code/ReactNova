import { AddFilter } from './components/AddFilter';
import { DataList2 } from './components/DataList2';
import React, { useState, useEffect , useReducer } from 'react';
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';
import Pagination from './components/Pagination';
import { useMemo } from 'react';

export const ReporteAuditoria = () => {

    const [ campoBusqueda, setCampoBusqueda ] = useState( '' );

    const onAddCategory = ( newCategory ) => {
            setCampoBusqueda( newCategory );
    }

    const [limit, setLimit] = useState('5');

    const [maxResultados, setMaxResultados] = useState('0');

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        if ( newLimit > maxResultados ){ return; }
        setLimit( newLimit );
    }

    const [showModal, setShowModal] = useState(false);

    const [typeButtons, setTypeButtons] = useState(1);

    const [tituloAlerta, settituloAlerta] = useState('');
    
    const [MensajeAlerta, setMensajeAlerta] = useState('');
  
    const [ComponentType , setComponentType] = useState(1);

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [totalPages, setTotalPages ] = useState(3);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );

    const openModal = () => {
        setComponentType(2); 
        setShowModal(prev => !prev);
      };
  
      const openErrorModal = ( value ) => {
        
        setComponentType(1);
        setTypeButtons(2);
        
        settituloAlerta('Error! ☠️');
        setMensajeAlerta(value);
  
        setShowModal(prev => !prev);
      };
  
      function AcceptHandler() {
          setShowModal(false);
          forceUpdate(1);
      }
  
      function cancelHandler() {
          setShowModal(false);
      }

    return (
        <>
       
            <Modal showModal={showModal} setShowModal={setShowModal} Page={AlertComponent}  />

            <div className= "App-header">
                <div className= "App-body">
                    <div className= "responsive-wrapper  container-fluid ">
                        <div className= "main-header">
                      
                            <h1>Reporte de Auditoria</h1>

                        </div>
                        
                        <div className="content VietnamPro-Font">
                            <div className="content-main">

                                <div className= "container-fluid">
                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card shadow border-0 flex card-noheigth" >

                                                <div className="card-header">
                                                    <div>
                                                        <h3>Filtro</h3>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="content-header-actions">
                                                        <AddFilter  onNewCategory={ (value) => onAddCategory(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } />  	
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className= "row g-6 mb-6 mh-1" style={{ display: "flex", flexDirection: "row" }}>
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

                                    <div className= "row mb-6 mh-5" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            
                                            <div className= "card shadow border-0 flex" >
                                                <div className="card-body" >

                                                { 
                                                    <DataList2
                                                        key={ campoBusqueda }
                                                        options = { options } 
                                                        setMaxResultados={ setMaxResultados } 
                                                        forceUpdate = { update }
                                                        onError={ (value) => openErrorModal(value) }
                                                        cardSize={1}
                                                    />
                                                }
                                                </div>

                                                <div className="card-footer footer-start">
                                                    <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
                                                </div>

                                            </div>

                                            

                                        </div>
                                    </div>

                                    <div className= "row g-6 mb-6 mh-1" style={{ display: "flex", flexDirection: "row" }}>
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
