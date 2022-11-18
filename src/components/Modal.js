import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 90%;
  margin-left: -60px !important;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalWrapper = styled.div`
  min-width: 470px;
  max-width: 1100px;
  height: 100%;
  
  padding-top:20px;
  padding-bottom:20px;

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

export const Modal = ({ showModal, setShowModal, children}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration:150
    },
    opacity: showModal ? 1 : 1,
    transform: showModal ? `translateY(-10%)` : `translateY(-20%)`
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
                  {children}
               </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};