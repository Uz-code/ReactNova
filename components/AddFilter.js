import { useEffect , useState} from 'react';
import { ContainerFlex } from '../components/ContainerFlex';
import { Button } from '../components/Button';

export const AddFilter = ({ onNewCategory, limit, onNewLimit , forceUpdate  , titulo }) => {

    const [ filter, setFilter ] = useState(false);

    const [ inputValue, setInputValue ] = useState('');

    const [ placeholder, setPlaceholder ] = useState('Buscar...');

    const [ itemActive , SetItemActive ] = useState('1');

    const [ limitValue, setlimitValue ] = useState(limit);

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const OnButtonClick = ( event ) => {
        event.preventDefault();
        setFilter(!filter);
    }

    const onLimitChange = ({ target }) => {
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
       
        if (isNaN(limitValue)){  return; }
 
        onNewLimit( limitValue.trim() );
    }

    useEffect( () => {
        Submitting();
    }, [forceUpdate]);

    const itemActivo = ( id ) => {
        const placeholder = id === '1' ? 'Buscar por Nombre' : id === '2' ? 'Buscar por Detalle' : id === '3' ? 'Buscar por Localizacion' : 'Buscar...';
        setPlaceholder(placeholder);
        SetItemActive( id );
    }

    return (
        <>
        <form onSubmit={ onSubmit }>

            <div className={`container-filter ${filter ? 'container-filter-active' : ''}`}>
            
            { titulo &&
            <div class="input-group mb-2" style={ { paddingLeft: "0.25rem" } }>
                <p class="subtitulo"> { titulo } </p>
            </div>  
            }
            
            <div className= "row g-6 mb-3" style={{ display: "flex", flexDirection: "row" , gap:"3px"}}>
                
                <input 
                    className="input-fancy input-large"
                    type="text"
                    placeholder=  { placeholder }
                    value={ inputValue }
                    onChange={ onInputChange }
                />
                
                <button
                className= {`btn btn-sm btn-neutral input-small btn-filter ${ filter == '1' ? 'rotation-180' : '' }`}
                type="text"
                onClick ={ OnButtonClick }
                />

                {/*
                <Button 
                    type="submit"
                    label="Filtrar"
                />*/}

                <input 
                    className="btn btn-neutral" 
                    type="submit"
                    value="Filtrar"
                />
            </div>

                { filter &&
                  
                    <div className='container-mt'>   
                        <div className="row g-6 mb-3" >
                         
                                <div class="flex-wrap" >
                                
                                    <div className=" input-group2" >
                                        <div  className="input-tag ">
                                            Plataforma:
                                        </div>
                                    
                                        <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                            <option value="1">Todos</option>
                                            <option value="2">Ascendiente</option>
                                        </select>
                                    </div>

                                    <div className="input-group2" >
                                        <div  className="input-tag">
                                            Sistema:
                                        </div>
                                        
                                        <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                            <option value="1">Todos</option>
                                            <option value="2">Ascendiente</option>
                                        </select>
                                    </div>


                                    <div className="input-group2" >
                                        <div  className="input-tag">
                                            Inactivo:
                                        </div>
                                        
                                        <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                            <option value="1">Todos</option>
                                            <option value="2">Si</option>
                                            <option value="3">No</option>
                                        </select>
                                    </div>

                                    <div className="input-group2" >
                                        <div  className="input-tag">
                                            Ordenamiento:
                                        </div>
                                        
                                        <select className="form-select form-select-lg " aria-label="" defaultValue={'1'}>
                                            <option value="1" disabled>Seleccionar</option>
                                            <option value="2">Ascendiente</option>
                                        </select>
                                    </div>

                                    <div className="input-group2" >
                                    <div  className="input-tag">
                                        resultados:
                                    </div>
                                    
                                    <input 
                                        className= "input-fancy input-small " 
                                        style= {{ backgroundColor: "#fff" }}
                                        type="text"
                                        value={ limitValue }
                                        onChange={ onLimitChange } />
                                    </div>

                                </div>
                            </div>
                        
                            <ContainerFlex paddingTop={false} justifyContent={"flex-start"}>
                                <div  className="input-tag ">
                                    <h3>Filtrar Por</h3>
                                </div>
                            </ContainerFlex>

                            <ContainerFlex paddingTop={false} justifyContent={"flex-start"} gap={"0px"}>
                                    <Button type="button" label="Nombre" medium={true} active = { itemActive == '1'} onClick ={ () => itemActivo('1') } />

                                    <Button type="button" label="Descripcion" active = { itemActive == '2'} onClick ={ () => itemActivo('2') } />
                                  
                                    <Button type="button" label="Localizacion" active = { itemActive == '3'} onClick ={ () => itemActivo('3') } />
                            </ContainerFlex>
                    </div>
                }
                
            </div>

        </form>
    
     </>
    )
}