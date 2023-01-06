import { useEffect, useCallback } from 'react';
import { ClampMessage } from '../utils/ClampMessage';

export const AlertComponent = ({  title, message, children, cancelHandler, AcceptHandler , customButtonText = "Aceptar"}) => {
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
       
        {children &&
        <>
            <br/>
            {children}
        </>
        }

        <ClampMessage message={message} />

        <div className="buttons">

            { cancelHandler ? (
                <>
                    <button className="BtnPrincipal" onClick={() => cancelHandler()} >Cancelar</button>
                </>
            ) : null }

            { AcceptHandler ? (

                <button className="BtnPrincipal" onClick={() => AcceptHandler()} >{customButtonText}</button>
            ) : null }

        </div>
    </>
  );
};