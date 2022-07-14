import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from './components/Modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93vh;
  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
  overflow-y:hidden;
`;

export function PageExamples() {

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
      <Container>

      <button className="BtnPrincipal" onClick={openAlertModal}>👋 I'm Alet modal</button>

      <button className="BtnPrincipal" onClick={openErrorModal}>👋 I'm Error modal</button>
      
      <Modal showModal={showModal} setShowModal={setShowModal} type={typeModal} titulo={tituloModal} subtitulo={subtituloModal} clickHandler={clickHandler}/>

      </Container>
    </>
  );
}
