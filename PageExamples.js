import React, { useState } from 'react';
import styled from 'styled-components';
import { DialogComponent } from './components/DialogComponent';
import { DialogHook } from './hooks/DialogHook';

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

  const { dialog, setDialog } = DialogHook ( { title: '', message: '' } );

  const openAlertModal = () => {
    setDialog({ title: "Alert! 👋", message:'Podemos Cancelar, o podemos Aceptar 👇' , AcceptHandler: CancelHandler  , CancelHandler: CancelHandler })
    setShowModal(prev => !prev);
  };

  const openErrorModal = () => {
    setDialog({ title: "Error! ☠️" , AcceptHandler: () => console.log(document.getElementById('👋')) , CancelHandler: CancelHandler })
    setShowModal(prev => !prev);
  };

  function CancelHandler() {
    setShowModal(prev => !prev);
  }

  return (
    <>
      <DialogComponent dialog={dialog} showModal={showModal} setShowModal={setShowModal}>
          <div id="👋" onClick={() => CancelHandler()}>👀👌✔</div>
      </DialogComponent>

      <Container>

      <button className="BtnPrincipal" onClick={openAlertModal}>👋 I'm Alet modal</button>

      <button className="BtnPrincipal" onClick={openErrorModal}>👋 I'm Error modal</button>
      
      </Container>
    </>
  );
}
