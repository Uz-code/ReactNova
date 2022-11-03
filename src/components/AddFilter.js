import { useEffect , useState} from 'react';

export const AddFilter = ({ onNewCategory, limit, onNewLimit , forceUpdate  }) => {

    const [ filter, setFilter ] = useState(false);

    const [ inputValue, setInputValue ] = useState('');

    const [ limitValue, setlimitValue ] = useState(limit);

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const OnButtonClick = ( event ) => {
        event.preventDefault();
        setFilter(!filter);
    }

    const onLimitChange = ({ target }) => {
        //if ( isNaN(target.value) ){  return; }
        
        //sif ( target.value <= "0" ){  return; }
        
        setlimitValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //if( inputValue.trim().length <= 0) return;

        // setCategories( categories => [ inputValue, ...categories ]);
       //setInputValue('');
       Submitting();

    }

    function Submitting() {

        onNewCategory( inputValue.trim() );
       
        if ( isNaN(limitValue)  ){  return; }
 
        onNewLimit( limitValue.trim() );
    }

    useEffect( () => {
        Submitting();
    }, [forceUpdate]);

    const [ itemActive , SetItemActive ] = useState('1');

    return (
        <>
        <form onSubmit={ onSubmit }>

            <div className= "container-filter">

                <div className= "row g-6 mb-7" style={{ display: "flex", flexDirection: "row" }}>
                    <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>

                            <input 
                                className="input-fancy input-large"
                                type="text"
                                placeholder="Buscar..."
                                value={ inputValue }
                                onChange={ onInputChange }
                            />
                            
                            <div
                            className= {`btn btn-sm btn-neutral input-small btn-filter ${ filter == '1' ? 'rotation-180' : '' }`}
                            type="text"
                            onClick ={ OnButtonClick }
                            />

                            <input 
                                className="button btn-submit" 
                                type="submit"
                                value="Filtrar"
                            />
                        
                    </div>
                </div>

                { filter &&
                  
                    <div className='container-mt'>
                        <div className="row g-6 mb-7">
                    
                            <div className= "col-xl-3 col-sm-6 col-12 flex filter-content" style={{  flex:1 }}>
                                
                                <div  className="input-tag">
                                    Cantidad de resultados:
                                </div>
                                
                                <input 
                                    className= "input-fancy input-small " 
                                    style= {{ backgroundColor: "#fff" }}
                                    type="text"
                                    value={ limitValue }
                                    onChange={ onLimitChange } />

                            </div>

                            <div className= "col-xl-3 col-sm-6 col-12 flex  filter-content" style={{  flex:1 }}>
                                
                                <div  className="input-tag">
                                    Ordenamiento:
                                </div>
                                
                                <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                    <option value="1">Descendiente</option>
                                    <option value="2">Ascendiente</option>
                                </select>

                            </div>

                            <div className= "col-xl-3 col-sm-6 col-12 flex filter-content" style={{  flex:1 }}>
                                
                                <div  className="input-tag">
                                    Ordenamiento por:
                                </div>
                                
                                <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                    <option value="1" disabled>Seleccionar</option>
                                    <option value="2">Ascendiente</option>
                                </select>

                            </div>
                        </div>


                    <div className="row g-6 mb-7 ">
                    
                        <div className= "col-xl-3 col-sm-6 col-12 flex " style={{  flex:1 }}>
                            <div  className="input-tag ">
                                Plataforma:
                            </div>
                            
                            <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                <option value="1">Todos</option>
                                <option value="2">Ascendiente</option>
                            </select>

                            <div  className="input-tag">
                                Sistema:
                            </div>
                            
                            <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                <option value="1">Todos</option>
                                <option value="2">Ascendiente</option>
                            </select>

                            <div  className="input-tag">
                                Inactivo:
                            </div>
                            
                            <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                <option value="1">Todos</option>
                                <option value="2">Si</option>
                                <option value="3">No</option>
                            </select>

                        </div>
                        
                    </div>

                    <div className="row g-6 mb-7" >
                        <div className="col-xl-3 col-sm-6 col-12 flex ">
                            <div  className="input-tag ">
                                <h3>Filtrar Por</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row g-6 mb-7 ">
                        <div className= "col-xl-3 col-sm-6 col-12 flex " style={{  flex:1 }}>
                            <div  className={`btn btn-sm btn-neutral pd-1  ${ itemActive == '1' ? 'active' : '' }`}  onClick ={ () => SetItemActive('1') }>
                                Nombre
                            </div>
                            <div  className={`btn btn-sm btn-neutral pd-1  ${ itemActive == '2' ? 'active' : '' }`} onClick ={ () => SetItemActive('2') }>
                                Descripcion
                            </div>
                            <div  className={`btn btn-sm btn-neutral pd-1  ${ itemActive == '3' ? 'active' : '' }`}  onClick ={ () => SetItemActive('3') }>
                                Localizacion
                            </div>
                        </div>
                        
                    </div>
                </div>

                }
                
            </div>

        </form>
    
     </>
    )
}