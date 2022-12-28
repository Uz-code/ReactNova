import { useEffect, useCallback ,useState} from 'react';
import styled from 'styled-components';
import { ClampMessage } from '../utils/ClampMessage';

export const AlertComponent = ({  title, message, cancelHandler, AcceptHandler}) => {
    /* enter listener on keypress */

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                AcceptHandler();
            }
        },
        [AcceptHandler]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);


  return (
    <>
        
        <h1>{title}</h1> 
        
        <ClampMessage message={message} />
        
        <div className="buttons">

            { cancelHandler ? (
                <>
                    <button className="BtnPrincipal" onClick={() => cancelHandler()} >Cancelar</button>
                </>
            ) : null }

            { AcceptHandler ? (

                <button className="BtnPrincipal" onClick={() => AcceptHandler()} >Aceptar</button>
            ) : null }

        </div>
    </>
  );
};