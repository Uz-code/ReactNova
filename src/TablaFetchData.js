import { AddFilter } from './components/AddFilter';
import { DataGrid } from './components/DataGrid';
import React, { useState } from 'react';
import { Modal } from './components/Modal';

import './Tabla.css';

export const TablaFetchData = () => {

    const [ categories, setCategories ] = useState( '' );

    //const [ categories, setCategories ] = useState([ 'Mario' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
            setCategories([ newCategory ]);
    }
    
    const [showModal, setShowModal] = useState(false);

    const [typeModal, setTypeModal] = useState(1);

    const [tituloModal, settituloModal] = useState('');
    
    const [subtituloModal, setSubTituloModal] = useState('');
  
    const [limit, setLimit] = useState(10);

    const openAlertModal = () => {
      setTypeModal(1);
      setSubTituloModal('Podemos Cancelar, o podemos Aceptar 👇');
      settituloModal('Alert! 👋');
      setShowModal(prev => !prev);
    };
  
    const openErrorModal = () => {
      setTypeModal(2);
      setSubTituloModal('Ocurrio un error');
      settituloModal('Error! ☠️');
      setShowModal(prev => !prev);

    };

    function clickHandler() {
        setShowModal(prev => !prev);
        console.log('click');
    }

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} type={typeModal} titulo={tituloModal} subtitulo={subtituloModal} clickHandler={clickHandler} />

            <div className= "App-header">
                <div className= "App-body">
                    <div className= "responsive-wrapper  container-fluid ">
                        <div className= "main-header">
                      
                            <h1>Tabla de Usuarios</h1>

                            <a className="button btn-submit" onClick={openAlertModal}>
                                <i className="ph-faders-bold"></i>
                                <span>Crear Nuevo</span>
                            </a>
                        </div>
                        
                        <div className="content VietnamPro-Font">
                            <div className="content-main">

                                <div className= "container-fluid">
                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            <div className= "card shadow border-0 flex card-noheigth" >

                                                {/*<button type='' className="BtnPrincipal" onClick={openAlertModal}> Alet modal</button>*/}

                                                {/*<button type='' className="BtnPrincipal" onClick={openErrorModal}> Error modal</button>*/}
                                                
                                                <div className="card-header">
                                                    <div>
                                                        <h3>Filtro</h3>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="content-header-actions">
                                                        <AddFilter  onNewCategory={ (value) => onAddCategory(value) } />  	
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>

                                    <div className= "row mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            
                                            <div className= "card shadow border-0 flex" >
                                            
                                                <div className="card-header">
                                                    <h5 className="mb-0">Usuarios</h5>
                                                </div>
                                               
                                                <table className="table ">
                                                    <thead className="thead-light">
                                                        <tr>
                                                            <th scope="col">Nombre</th>
                                                            <th scope="col">Direccion</th>
                                                            <th scope="col">Genero</th>
                                                            <th scope="col">E-mail</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className='table-body'>
                                                    { 
                                                        <DataGrid 
                                                            key={ categories } 
                                                            category={ categories }
                                                            limit={ limit } />
                                                    }
                                                    </tbody>
                                                </table>

                                                <div className="card-footer footer-start">
                                                    <span className="text-muted text-sm">Mostrando { limit } items de 250 resultados encontrados</span>
                                                </div>

                                            </div>
                                            

                                        </div>
                                    </div>

                                    <div className= "row g-6 mb-6" style={{ display: "flex", flexDirection: "row" }}>
                                        <div className= "col-xl-3 col-sm-6 col-12 flex" style={{  flex:1 }}>
                                            
                                            <div className= "card shadow border-0 flex card-noheigth" >
                                            
                                                <div className="card-header">
                                                    <nav aria-label="">
                                                    <ul className="pagination ">
                                                        <li className="page-item "><a className="page-link text-muted" href="#">Anterior</a></li>
                                                        <li className="page-item"><a className="page-link text-muted" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link text-muted" href="#">2</a></li>
                                                        <li className="page-item"><a className="page-link text-muted" href="#">3</a></li>
                                                        <li className="page-item"><a className="page-link text-muted" href="#">Siguiente</a></li>
                                                    </ul>
                                                    </nav>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
