import { AddFilter } from './components/AddFilter';
import { DataList } from './components/DataList';

import Pagination from './components/Pagination';

import React, { useState, useEffect , useReducer } from 'react';

export const SearchForUser = ({ setMensajeAlerta , usersId , setUsersId }) => {
    
    const [ listUsers, setListUsers ] = useState( [] );

    const [ categories, setCategories ] = useState( '' );

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const onAddUserToList = ( userName, id ) => {
       
        
        // validar si el usuario se encuentra en la lista 
        const userAlreadyInList = listUsers.find( user => user[1] === id );
        // if the user is already in the list, do nothing
        if ( userAlreadyInList ) { onRemoveUserToList( id ); return; }

        // si el usuario no esta en la lista adherirlo
        setListUsers( [ ...listUsers, [userName, id] ] );

    }

    useEffect ( () => {

        var userId = listUsers.map( user =>  user[1] );
        //array to string 
        var userIdString = userId.join(',');

        setUsersId( userIdString );
        
    }, [listUsers] );

    const onRemoveUserToList = ( id ) => {
       
        setListUsers(listUsers.filter( (user) => user[1] !== id ));

    }

    const [showItems, SetshowItems] = useState(false);

    const SaveList = () => {
        SetshowItems(!showItems);
    }

    const CleanUserList = () => {
        setListUsers( [] );
    }
    
    const onAddCategory = ( newCategory ) => {
        setCategories( newCategory );
    }

    const [limit, setLimit] = useState('4');

    const [maxResultados, setMaxResultados] = useState('0');

    const onAddLimit = ( newLimit ) => {
        if ( newLimit <= 0 ){ return; }
        if ( newLimit > maxResultados ){ return; }
        setLimit( newLimit );
    }

      useEffect( () => {
        SetshowItems(true);
    }, [categories]);

    return (
        <>
        <div>
        </div>
        <div className="card-body">
            <div className="content-header-actions">
                <AddFilter  onNewCategory={ (value) => onAddCategory(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update }  />
            </div>
            
            <div className="container-filter " >
                <div className="recent-search start-section">
                    <button className="clear-btn" disabled= { listUsers.length > 0 ? '' : 'disabled' } onClick={ () => CleanUserList() } > { listUsers.length > 0 ? 'Limpiar lista' : 'No hay Items' } </button>
                    {
                        listUsers.map( (user,index) => {
                            return (
                                <div key={index} className="clear-btn search-item">
                                    <a className="" >{user[0]} </a> <a className="search-item__close" onClick={ () => onRemoveUserToList(user[1]) } >x</a>
                                </div>
                            )
                        }
                        )
                    }
                    { listUsers.length > 0 ? <a className="clear-btn save-btn" onClick={ () => SaveList() } > { showItems ? 'Guardar' : 'Editar' } </a> : '' }
                </div>
            </div>
        </div>

        { showItems ? 

        <div className="card-body start-section" style={{  flex:1 }}>
        { 
            <DataList 
                key={ categories } 
                category={ categories }
                limit={ limit } 
                setMaxResultados={ setMaxResultados } 
                PaginaActual={ PaginaActual }
                forceUpdate = { update }
                onError={ (value) => setMensajeAlerta(value)}
                cardSize={2} 
                onAddUser={ (userName, id) => onAddUserToList(userName, id) }
                listUsers = { listUsers } 
            />
        }
        </div>

            : '' }
        <div className="card-body start-section" style={{  flex:1 }}>
        <Pagination
            className="pagination-bar"
            currentPage={PaginaActual}
            totalCount={maxResultados}
            pageSize={limit}
            onPageChange={page => setPaginaActual(page)}
            siblingCount={1}
            />
            
        </div>
        <div className="card-footer footer-start">
            { showItems ? 
                <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
            : '' }
        </div>

        </>
    )

}