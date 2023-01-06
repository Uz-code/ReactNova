import { AddFilter } from './components/AddFilter';
import { DataList2 } from './components/DataList2';
import React, { useState , useReducer } from 'react';
import { Modal } from './components/Modal';
import { AlertComponent } from './components/AlertComponent';
import Pagination from './components/Pagination';
import { useMemo } from 'react';
import { Wrapper } from './components/Wrapper';
import { MainHeader } from './components/MainHeader';
import { ContainerFlex } from './components/ContainerFlex';
import { Card } from './components/Card';
import { ContentMain } from './components/ContentMain';
import { Title } from './components/Title';

export const ReporteAuditoria = () => {

    const [ campoBusqueda, setCampoBusqueda ] = useState( '' );

    const onAddCampoBusqueda = ( newCategory ) => {
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
       
             <Modal showModal={showModal} setShowModal={setShowModal} >
                <AlertComponent title={tituloAlerta} message={MensajeAlerta} cancelHandler={cancelHandler} AcceptHandler={AcceptHandler} customButtonText={"Reintentar"}/>
            </Modal>
            
            <Wrapper>
                <MainHeader>
                    <Title title='Reporte de Auditoria'/>
                </MainHeader>

                <ContentMain>
                    <ContainerFlex>
                        <Card flex={1}>
                            <div className="content-header-actions">
                                <AddFilter onNewCampoBusqueda={ (value) => onAddCampoBusqueda(value) } onNewLimit={ (value) => onAddLimit(value) } limit = {limit} forceUpdate = { update } titulo={"Filtro"} />
                            </div>
                        </Card>
                    </ContainerFlex>

                    <ContainerFlex>
                        <Card flex={1}>
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
                        </Card>
                    </ContainerFlex>

                    <ContainerFlex>
                        <div className= "card shadow border-0 flex" >
                            <div className="card-body" style={{minHeight: '800px' , padding: '1.24rem'}}>
                                <DataList2
                                    key={ campoBusqueda }
                                    options = { options } 
                                    setMaxResultados={ setMaxResultados } 
                                    forceUpdate = { update }
                                    onError={ (value) => openErrorModal(value) }
                                    cardSize={1}
                                />
                            </div>
                            
                            <div className="card-footer footer-start">
                                <span className="text-muted text-sm">Mostrando {limit > maxResultados ? maxResultados : limit } items de {maxResultados} resultados encontrados</span>
                            </div>
                        </div>
                    </ContainerFlex>

                    <ContainerFlex>
                        <Card flex={1}>
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
                        </Card>
                    </ContainerFlex>
                </ContentMain>
            </Wrapper>
        </>
    )
}

