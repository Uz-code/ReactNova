import React, { useState, useReducer } from "react";
import { useMemo } from 'react';
import Pagination from './components/Pagination';
import { AddFilter } from './components/AddFilter';
import { SeleccionarItem } from './SeleccionarItem';
import { CustomTablaUsuariosControlados } from './CustomTablaUsuariosControlados';

export const ComponenteSeleccionUsuarioControlado = ({ setStateMessageError , OnError ,guardarHandler, cancelHandler, listaExterna ,multiSelect , hasListaUsuarios , isDoubleTable ,minimoSeleccion, AgregarNuevo}) => {

    const onAddCampoBusqueda = ( newCampoBusqueda ) => {
        setCampoBusqueda( newCampoBusqueda );
    }

    const [limit, setLimit] = useState('5');
    
    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        if ( newLimit > maxResultados ){ return; }
        setLimit( newLimit );
    }
    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const [maxResultados, setMaxResultados] = useState('0');

    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );
   
    return (
        <>
            <div className='recent-search'>
                <div className="card-filter" style={{width: '100%', paddingTop : '.5rem' }}>
                    <div className="content-header-actions">
                        <AddFilter  onNewCampoBusqueda={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } />  	
                    </div>
                </div>
            </div>

            <SeleccionarItem AgregarNuevo = {AgregarNuevo} minimoSeleccion = {minimoSeleccion} isDoubleTable= {isDoubleTable} hasListaUsuarios= {hasListaUsuarios} hasButtons = {true} limit={limit}  setMensajeAlerta={ setStateMessageError }  guardarHandler = { (arr) => { guardarHandler(arr); } } cancelHandler={cancelHandler}  listaExterna={listaExterna} multiSelect={multiSelect}>
                <CustomTablaUsuariosControlados
                    options = { options }
                    key={ campoBusqueda } 
                    setMaxResultados={ setMaxResultados } 
                    forceUpdate = { update }
                    onError={ (value) => OnError(value) }
                    hasActions = {false} />

                <div className="content-header-noborder card-footer" >
                    <nav>
                        <Pagination
                        className="pagination-bar"
                        currentPage={PaginaActual}
                        totalCount={maxResultados}
                        pageSize={limit}
                        onPageChange={page => setPaginaActual(page)}
                        siblingCount={1}
                        />
                    </nav>
                    <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
                </div>
            
            </SeleccionarItem> 
        </>
    )
}