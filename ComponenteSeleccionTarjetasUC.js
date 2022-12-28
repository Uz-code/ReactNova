import React, { useState, useReducer } from "react";
import { useMemo } from 'react';
import { AddFilter } from './components/AddFilter';
import { SeleccionarItem } from './SeleccionarItem';
import { DataList } from './components/DataList';

export const ComponenteSeleccionTarjetasUC = ({  OnError , guardarHandler, guardarOnClick, cancelHandler, listaExterna , multiSelect , openModalListado, AgregarNuevo}) => {

    const onAddCampoBusqueda = ( newCampoBusqueda ) => {
        setCampoBusqueda( newCampoBusqueda );
    }

    const [limit, setLimit] = useState('6');
    
    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        if ( newLimit > maxResultados ){ return; }
        setLimit( newLimit );
    }
    const [update] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const [maxResultados, setMaxResultados] = useState('0');

    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );
   
    return (
        <>
            <div className='recent-search mb-1'>
                <div className="card-filter" style={{width: '100%', paddingTop : '.5rem' }}>
                    <div className="content-header-actions">
                        <AddFilter  onNewCampoBusqueda={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } />  	
                    </div>
                </div>
            </div>
            <SeleccionarItem AgregarNuevo ={AgregarNuevo} openModalListado = {openModalListado}  hasListaUsuarios= {true} guardarOnClick = {guardarOnClick}  hasButtons = {false} limit={limit}  guardarHandler = { (arr) => { guardarHandler(arr); } } cancelHandler={cancelHandler}  listaExterna={listaExterna} multiSelect={multiSelect} isDoubleTable={true}>
                <DataList 
                key={ campoBusqueda } 
                setMaxResultados={ setMaxResultados } 
                options={ options }
                forceUpdate = { update }
                onError = { (value) => { OnError(value); }}
                cardSize={2} 
                />
            </SeleccionarItem> 
        </>
    )
}