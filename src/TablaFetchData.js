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

    const [typeModal, seTypeModal] = useState(1);
  
    const [textModal, seTextModal] = useState('Podemos Cancelar, o podemos Aceptar 👇');
  
    const openAlertModal = () => {
      seTypeModal(1);
      seTextModal('Podemos Cancelar, o podemos Aceptar 👇');
      setShowModal(prev => !prev);
    };
  
    const openErrorModal = () => {
      seTypeModal(2);
      seTextModal('Ocurrio un error');
      setShowModal(prev => !prev);
    };

    return (
        <>
 <Modal showModal={showModal} setShowModal={setShowModal} type={typeModal} text={textModal} />

        <div className= "App-header">
		<h2 >
			Tabla de Usuarios 
		</h2>

            <button className="BtnPrincipal" onClick={openAlertModal}>👋 I'm Alet modal</button>

            <button className="BtnPrincipal" onClick={openErrorModal}>👋 I'm Error modal</button>

           
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
