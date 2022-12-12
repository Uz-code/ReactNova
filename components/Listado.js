const Listado = ({ hasListaUsuarios , multiSelect , listItems , CleanUserList , onRemoveUserToList , openModalListado  }) => {

return(
    <>
        <div className="list">
            {hasListaUsuarios ? 
            <>
                <div className='clear-btn cursor-normal' style={{marginLeft: '0px'}}> Seleccionado: </div> { multiSelect && <button className="clear-btn" disabled= { listItems.length > 0 ? '' : 'disabled' } onClick={ () => CleanUserList() } > { listItems.length > 0 ? 'Limpiar lista' : 'No hay Items' } </button> } 
                {
                    listItems.map( (user,index) => {
                        return index < 4 ? 
                        <div key={index} className="clear-btn search-item no-select">
                                <a> {user.name} </a> <a className="search-item__close" onClick={ () => onRemoveUserToList(user.id) } >x</a>
                        </div>
                        : index === 4 ? <><button tooltip="ver todos" className="clear-btn search-item no-select" > { listItems.length - 4 } más </button> 
                        <button className="clear-btn success-btn no-select" onClick={ () => openModalListado() } > Ver todos </button>    
                        </> 
                        : null
                    })
                }
            </>
            :
            <>

                { multiSelect && <><button className="clear-btn" disabled= { listItems.length > 0 ? '' : 'disabled' } onClick={ () => CleanUserList() } > { listItems.length > 0 ? 'Limpiar lista' : 'No hay Items' } </button> 
                { listItems.length > 0 && <button className="clear-btn search-item no-select" onClick={ () => openModalListado() } > Seleccionado ({ listItems.length }) </button> } </> }

            </>
            }
        </div>
    </>
)
}

export default Listado;
