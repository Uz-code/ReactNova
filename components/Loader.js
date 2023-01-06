import { useSpring, animated } from 'react-spring'
import { useEffect, useState } from 'react'

export const Loader = ( { isLoading, duration , type, centerTable }  ) => {

      const [setAnimation, setSetAnimation] = useState( false );

      const animation = useSpring({
        config: {
          duration: duration
        },
        opacity: setAnimation ? 0 : 1,
        transform: setAnimation ? `translateY(-100%)` : `translateY(0%)`
      });

      useEffect(() => {
        !isLoading && setSetAnimation(true);
        }, [isLoading]);


    return (
        <>
           
            {               
                type == 'envelope' &&

                <animated.div style={animation}>
                    <div className="center flex" { ...type == 'envelope' && {style: {minHeight: '30vh'}}}>
                        <div className="content-loader">
                            <div className="envelope" style={{cursor: 'pointer'}} onClick={() => setSetAnimation(!setAnimation)}></div>
                            <div className="shadow-envelope"></div>
                        </div>                  
                    </div>          
                </animated.div>
            }

            {
                type == 'spinner' &&
                <div className="center flex" {...centerTable && {style: {minHeight: '30vh'}}}>
                    <div className="spinner"></div>
                </div>
            }
             
            {
                type == 'text' &&
                <div className="center flex" {...centerTable && {style: {minHeight: '30vh'}}}>
                    Cargando...
                </div>
            }
            
            {
                type == 'loader-1' &&
                <div className="center flex" {...centerTable && {style: {minHeight: '30vh'}}}>
                    <div className="content-loader">
                        <div className="loader-1"><span></span></div>
                    </div>
                </div>
            } 
        </>
    )
}