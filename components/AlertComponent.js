import { useEffect, useCallback ,useState} from 'react';
import styled from 'styled-components';


export const AlertComponent = ({  title, message, cancelHandler, AcceptHandler}) => {
    const [toggleClamp , setToggleClamp] = useState(true);
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
        
        <p className= {toggleClamp ? 'texto-alerta line-clamp' : 'texto-alerta '}>{message}</p>
        {(toggleClamp && message.length > 200) &&
         <a className="pointer" style={{paddingBottom: '.5rem'}} onClick={() => setToggleClamp(false)}>Ver más</a>}

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