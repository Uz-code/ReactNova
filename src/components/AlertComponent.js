import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 470px;
  height: 100%;
  padding:20px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 100fr 0fr;
  position: relative;
  z-index: 10;
  border-radius: 1rem;
  
`;

const ModalContent = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    text-align: center;
    margin: 1rem;
  }
  `;

export const AlertComponent = ({ type , titulo, subtitulo, cancelHandler, AcceptHandler}) => {
  /*const keyPress = useCallback(
    e => {

      console.log(e.key);
      if (e.key === '' ) {
          cancelHandler();
      }
    },
    []
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
*/
  return (
    <>
        <h1> {titulo}</h1> 
        
        <p>{subtitulo}</p>

        <div className="buttons">

            { type === 1 ? (
                <>
                
                    <button className="BtnPrincipal" onClick={() => cancelHandler()} >Cancelar</button>

                    <button className="BtnPrincipal" onClick={() => AcceptHandler() } >Aceptar</button>

                </>
                ) : (
                <>
                
                    <button className="BtnPrincipal" onClick={() => cancelHandler()} >Cancelar</button>

                </>
            )}

        </div>
        { type === 1 ? (
            <>
            
            </>
            ) : (
            <>
            <div title="Close" className="modal-close" onClick={() => cancelHandler()} >Cerrar</div>
            </>
        )}
    </>
  );
};