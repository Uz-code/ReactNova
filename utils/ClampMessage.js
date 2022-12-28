import React, { useState, useEffect, useRef } from 'react';

export function ClampMessage ({message, lineClamp = 3}) {
  const [toggleClamp , setToggleClamp] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    //containerRef.current.clientHeight > 21 && console.log(containerRef.current.clientHeight);
    
    if (containerRef.current.clientHeight > (21 * lineClamp)) {
      setToggleClamp(true);
    }

    return () => {
      setToggleClamp(false);
    }
    
  }, [message]);


  return (
    <>
      <p className= {toggleClamp ? 'texto-alerta line-clamp' : 'texto-alerta '} style={{ WebkitLineClamp : lineClamp }} ref={containerRef}> {message} </p>
      {toggleClamp && <a className="pointer" onClick={() => setToggleClamp(!toggleClamp) }>Ver más</a>}
    </>
  );
}
