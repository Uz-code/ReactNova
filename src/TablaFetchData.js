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
            <h2 >
                Tabla de Usuarios 
            </h2>

                <button type='' className="BtnPrincipal" onClick={openAlertModal}>👋 I'm Alet modal</button>

                <button type='' className="BtnPrincipal" onClick={openErrorModal}>👋 I'm Error modal</button>

            
                <AddFilter  onNewCategory={ (value) => onAddCategory(value) } />
                <table className="styled-table ">
                    <thead>
                        <tr className='thread-table'>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                    // categories.map( ( category ) => (
                            <DataGrid 
                                key={ categories } 
                                category={ categories } />
                        //))
                    }
                    
                    </tbody>
                </table>
            </div>
        </>
    )

}
