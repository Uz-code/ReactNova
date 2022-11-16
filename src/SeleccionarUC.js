import { AddFilter } from './components/AddFilter';
import { DataList } from './components/DataList';
import { useMemo } from 'react';
import { Modal } from './components/Modal';

import Pagination from './components/Pagination';

import React, { useState, useEffect , useReducer } from 'react';
import { DataGrid } from './components/DataGrid';

export const SeleccionarUc = ({ setMensajeAlerta  , guardarHandler , cancelHandler, listaExterna }) => {
    
    const [listUser , setListUser ] = useState( listaExterna );

    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const onAddUserToList = ( userName, id ) => {
        
        // validar si el usuario se encuentra en la lista 
        const userAlreadyInList = listUser.find( user => user[1] === id );
       
        // if the user is already in the list, do nothing
        if ( userAlreadyInList ) { onRemoveUserToList( id ); return; }

        // reemplazo el nuevo valor en la lista
        setListUser( [ [userName, id] ] );

    }


    const onRemoveUserToList = ( id ) => {
       
        setListUser(listUser.filter( (user) => user[1] !== id ));

    }

    const [showItems, SetshowItems] = useState(false);

    const SaveList = () => {
        if ( listUser.length > 0 ) {
            guardarHandler(listUser);
        }
    }

    const Cancel = () => {
        CleanUserList();
        cancelHandler();
    }

    const CleanUserList = () => {
        setListUser( [] );
    }
    
    const onAddCampoBusqueda = ( newCampoBusqueda ) => {
        setCampoBusqueda( newCampoBusqueda );
    }

    const [limit, setLimit] = useState('5');

    const [maxResultados, setMaxResultados] = useState('0');

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        if ( newLimit > maxResultados ){ return; }
        setLimit( newLimit );
    }

      useEffect( () => {
        SetshowItems(true);
    }, [campoBusqueda]);

    const options = useMemo( () => ({ campoBusqueda , limit , PaginaActual}), [campoBusqueda, limit, PaginaActual] );

    return (
        <>
       
        <div className="card-body" style={{width: '100%'}}>
            <div className="content-header-actions ">
                <AddFilter  onNewCategory={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update }  />
            </div>
            
            <div className="" >
                <div className="recent-search start-section mb-1">
                    <div className='clear-btn cursor-normal'> Usuario Seleccionado: </div> { listUser.length == 0 && <button className="clear-btn" disabled= { listUser.length > 0 ? '' : 'disabled' } onClick={ () => CleanUserList() } >  No hay Usuario  </button> } 
                    {
                        listUser.map( (user,index) => {
                            return (
                                <div key={index} className="clear-btn search-item no-select">
                                    <a> {user[0]} </a> <a className="search-item__close" onClick={ () => onRemoveUserToList(user[1]) } >x</a>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            
        </div>
     
    
            <table className="table mb-6" >
                
                <thead className="thead-light">
                <colgroup> 
                    <col span="1" style={{width: "16%"}} />
                    <col span="1" style={{width: "0*"}} />
                    <col span="1" style={{width: "0*"}} />
                    <col span="1" style={{width: "20%"}} />  
                </colgroup>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Genero</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody className='table-body' style={{ minHeight: '250px', overflowX : 'hidden' }}>
                { 
                    <DataGrid 
                        key={ campoBusqueda } 
                        setMaxResultados={ setMaxResultados } 
                        options={ options }
                        forceUpdate = { update }
                        onError={ (value) => setMensajeAlerta(value)}
                        onSelectUser={ (userName, id) => onAddUserToList(userName, id) }
                        listUsers = { listUser }
                    />
                }
            </tbody>
            </table>

            <div className= "row g-6 mb-6 "  style={{width: '100%',paddingBottom:'0'}}>
                <div className="card-header ">
                    <nav aria-label="">

                        <Pagination
                        className="pagination-bar "
                        currentPage={PaginaActual}
                        totalCount={maxResultados}
                        pageSize={limit}
                        onPageChange={page => setPaginaActual(page)}
                        siblingCount={1}
                        />

                    </nav>
                </div>
            </div>
            
           
        <div className="card-footer actions" style={{width: '100%',paddingBottom:'0'}}>
            
            <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>

            <div className="card-footer-actions">
            <button className="btn btn-neutral clear-btn" { ...listUser.length > 0  ? {onClick: () => SaveList()} : {disabled: true} } >Guardar</button>
            <button className="btn btn-neutral" onClick={ () => Cancel() } > Cancelar</button>
            </div>
        </div>

        </>
    )

}
