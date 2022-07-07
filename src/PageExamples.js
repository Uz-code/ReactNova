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
      <Container>

      <button className="BtnPrincipal" onClick={openAlertModal}>👋 I'm Alet modal</button>

      <button className="BtnPrincipal" onClick={openErrorModal}>👋 I'm Error modal</button>
      
      <Modal showModal={showModal} setShowModal={setShowModal} type={typeModal} text={textModal} />

      </Container>
    </>
  );
}
