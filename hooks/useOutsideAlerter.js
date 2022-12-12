import { useEffect  } from "react"

export function useOutsideAlerter(ref, Set) {
    useEffect(() => {
      /**
       * Alerta si se clickeo fuera del elemento
       */
      function handleClickOutside(event) {

        if (ref.current && !ref.current.contains(event.target) && event.target.className !== 'tab' && event.target.className.animVal !== 'closeBtn') {
          Set(false);
        }
      }

      // Crear el evento listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Destruir el evento listener al desmontar
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }