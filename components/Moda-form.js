import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color:red;
`;

const ModalWrapper = styled.div`
  width: 470px;
  height: 220px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 100fr 0fr;
  position: relative;
  z-index: 10;
  border-radius: 1rem;
  
`;

const ModalImg = styled.img`

  width: 100%;
  height: 100%;
  object-fit: cover;
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

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal , type , titulo, subtitulo, clickHandler}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration:150
    },
    opacity: showModal ? 1 : 1,
    transform: showModal ? `translateY(-15%)` : `translateY(-20%)` ? `translateY(-0%)` : `translateY(-10%)`
    
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        //console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>

              <ModalContent>
              <component/>
                <h1> {titulo}</h1> 
             
                <p>
                {subtitulo}
                </p>
                <div className="buttons">

                { type === 1 ? (
                  <>
                  
                  <button className="BtnPrincipal" onClick={() => setShowModal(prev => !prev)} >Cancelar</button>

                  <button className="BtnPrincipal" onClick={() => clickHandler() } >Aceptar</button>

                  </>
                  ) : (
                  <>
                  
                    <button className="BtnPrincipal" onClick={() => setShowModal(prev => !prev)} >Cancelar</button>

                  </>
                )}
                
                </div>
              </ModalContent>
              { type === 1 ? (
                  <>
                  
                  </>
                  ) : (
                  <>
                  <a href="#" title="Close" className="modal-close" onClick={() => setShowModal(prev => !prev)} >Cerrar</a>
                  </>
                )}

            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};