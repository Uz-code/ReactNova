import React, { useState, useEffect , useReducer } from 'react';
import { AddFilter } from './components/AddFilter';
import { useMemo } from 'react';
import Pagination from './components/Pagination';

export const SeleccionarItem = ({ children, setMensajeAlerta  , guardarHandler , cancelHandler, listaExterna, multiSelect}) => {
    
    const [listItems , setListItems ] = useState( listaExterna );

    const [campoBusqueda, setCampoBusqueda ] = useState( '' );

    const [update, forceUpdate] = useReducer((x) => x + 1, 0);

    const [PaginaActual, setPaginaActual ] = useState(1);

    const onAddUserToList = ( userName , id ) => {
        
        // validar si el item se encuentra en la lista 
        const userAlreadyInList = listItems.find( user => user.id === id ) != null;

        // if the user is already in the list, do nothing
        if ( userAlreadyInList  ) { onRemoveUserToList( id ); return; }

        // reemplazo el nuevo valor en la lista
        multiSelect ?  setListItems( [ ...listItems, { name : userName , id : id } ] ) : setListItems( [ { name : userName , id : id } ] );

    }


    const onRemoveUserToList = ( id ) => {

        setListItems(listItems.filter( (user) => user.id !== id ));

    }

    const [showItems, SetshowItems] = useState(false);

    const SaveList = () => {
        if ( listItems.length > 0 ) {
            guardarHandler(listItems);
        }
    }

    const Cancel = () => {
        CleanUserList();
        cancelHandler();
    }

    const CleanUserList = () => {
        setListItems( [] );
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

    //childrenWithProps es la unica forma para pasarle props a los hijos, en este caso la tabla que va a usarse para seleccionar items
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            //lo clono y le paso los props que necesito
          return React.cloneElement(child, { listUsers: listItems , setMaxResultados : setMaxResultados , options : options , forceUpdate : forceUpdate , setMensajeAlerta : setMensajeAlerta , onAddUserToList : onAddUserToList ,listUsers : listItems , hasActions : false , isSelectable : true });
        }
        return child;
      });

    return (
        <>
       <div className='Container-Search-User'>
            <div className="card-body" style={{width: '100%'}}>
                <div className="content-header-actions ">
                    <AddFilter  onNewCategory={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update }  />
                </div>
              
                <div className="recent-search start-section mb-1">
                    
                    <div className='clear-btn cursor-normal'> Seleccionado: </div> { multiSelect && <button className="clear-btn" disabled= { listItems.length > 0 ? '' : 'disabled' } onClick={ () => CleanUserList() } > { listItems.length > 0 ? 'Limpiar lista' : 'No hay Items' } </button> } 
                    {
                        listItems.map( (user,index) => {
                            return (
                                <div key={index} className="clear-btn search-item no-select">
                                    <a> {user.name} </a> <a className="search-item__close" onClick={ () => onRemoveUserToList(user.id) } >x</a>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
            
                {
                    <>
                    <div>{childrenWithProps}</div>
                    </>
                }

                <div className= " g-6 mb-6 " >
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
                <button className="btn btn-neutral clear-btn" { ...listItems.length > 0  ? {onClick: () => SaveList()} : {disabled: true} } >Guardar</button>
                <button className="btn btn-neutral" onClick={ () => Cancel() } > Cancelar</button>
                </div>
            </div>
        </div>
        </>
    )

}
