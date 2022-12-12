import { useCallback ,useEffect, useRef} from "react";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

export const DropDownComponent = ( {children, open,setOpen,delay, RoundCorners } ) => {
	
	const ref = useRef(null);
	useOutsideAlerter(ref,setOpen);

	const keyPress = useCallback(
		e => { (e.key === 'Escape') && setOpen(false)},
		[open]
	);
		  
	useEffect(
		() => {
		  document.addEventListener('keydown', keyPress);
		  return () => document.removeEventListener('keydown', keyPress);
		},
		[keyPress]
	  );

return( 
	<div ref={ref} className={`dropdown-menu ${RoundCorners ? 'roundCorners' : ''} ${open? 'active' : (delay) ? 'inactive delay' : 'inactive '}`} >
		{children}
	</div>
)}

export default DropDownComponent;
