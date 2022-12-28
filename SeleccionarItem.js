import React, { useState, useEffect , useReducer } from 'react';
import { AlertComponent } from './components/AlertComponent';
import Listado from './components/Listado';

export const SeleccionarItem = ({ children  , guardarHandler , openModalListado, cancelHandler, listaExterna, multiSelect , hasButtons ,hasListaUsuarios , guardarOnClick , AgregarNuevo, isDoubleTable , minimoSeleccion ,limpiarLista }) => {
    
    const [listItems , setListItems ] = useState ( listaExterna ? listaExterna : [] );

    const minimoSeleccionable = listItems.length >= minimoSeleccion ? true : false;

    useEffect (() => {
        if ( listaExterna != undefined && isDoubleTable ) {
            //cosa que no se si deberia hacer, para sincronizar las dos listas, no se si es mejor hacerlo desde afuera
            // lo que deberia hacer es que si se cambia la lista externa, se cambie la lista interna
            // y eso lo hago con el useEffect
            // pero no se si es mejor hacerlo desde afuera, osea que el componente padre se encargue de sincronizar las dos listas
            // y que el componente hijo solo se encargue de mostrarlas
            setListItems( listaExterna );
        }
       
    }, [listaExterna]);

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

    const SaveList = () => {
        guardarHandler(listItems);
    }

    useEffect ( () => {
        guardarOnClick && ( listItems != listaExterna )&& 
         
            guardarHandler(listItems);
           

    }, [listItems]);

    useEffect ( () => {
        limpiarLista && CleanUserList();
    }, [limpiarLista]);
    
    
    const Cancel = () => {
        CleanUserList();
        cancelHandler();
    }

    const CleanUserList = () => {
        setListItems( [] );
    }
    
    //childrenWithProps es la unica forma para pasarle props a los hijos, en este caso la tabla que va a usarse para seleccionar items
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            //lo clono y le paso los props que necesito
          return React.cloneElement(child, { listUsers: listItems , onAddUserToList : onAddUserToList , isSelectable : true  });
        }
        return child;
      });
//container-filter 
    return (
        <>
            <div className="container-filter flex">
                <Listado hasListaUsuarios={hasListaUsuarios} multiSelect={multiSelect} listItems={listItems} CleanUserList={CleanUserList} onRemoveUserToList={onRemoveUserToList} openModalListado={openModalListado} />
                {AgregarNuevo && 
                <div className="list" style={{ marginLeft:'auto', marginRight:'0px' }}>
                    <div className='clear-btn cursor-normal' style={{marginLeft: '0px'}}> Acciones: </div> <button className="clear-btn no-select" onClick={AgregarNuevo}>Agregar</button>
                </div>}
            </div>
            {
                <>
                <div>{childrenWithProps}</div>
                </>
            }
            { hasButtons &&
            <div className="card-footer no-border" style={{width: '100%',paddingBottom:'0'}}>
                <div className="card-footer-actions">
                    <button className="btn btn-neutral clear-btn" { ...minimoSeleccionable  ? {onClick: () => SaveList()} : {disabled: true} } >Guardar</button>
                    <button className="btn btn-neutral" onClick={ () => Cancel() } > Cancelar</button>
                </div>
            </div>
            }
        </>
    )

}
