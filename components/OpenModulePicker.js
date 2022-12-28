import { ModulePicker } from './ModulePicker';
import { useEffect, useState , useRef, useCallback} from 'react';
import { DropDownComponent } from './DropDownComponent';
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

export const OpenModulePicker = ({ close, moduloActual, setModuloActual }) => {

	const [open, setOpen] = useState(false);
	
	const [delay, setDelay] = useState(false);

	const seleccionarModulo = (value) => {
		
		setModuloActual(value);
		setDelay(true);
		setOpen(false);

	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setDelay(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [open]);

	const openComponent = () => {
		setOpen(!open);
	}

	const keyPress = useCallback(
		e => { (e.key === 'Escape') && setOpen(false)},
		[open]
	);

	useEffect(() => {
		setOpen(false);
	}, [close]);
		  
	useEffect(
		() => {
		  document.addEventListener('keydown', keyPress);
		  return () => document.removeEventListener('keydown', keyPress);
		},
		[keyPress]
	  );

	const ref = useRef(null);

	useOutsideAlerter(ref,setOpen);

return( 
 <> 

<div className="container-module" ref={ref} onClick={()=>{openComponent()}} >
	<div className="drawer tabs">
		<label className="tab">{moduloActual}</label>
	</div>
	<DropDownComponent open={open} setOpen={setOpen} RoundCorners={true} delay={delay}>
		<ModulePicker moduloActual = {moduloActual} seleccionarModulo = { value => seleccionarModulo(value)}/>
	</DropDownComponent>
</div>

</> 
)}

export default OpenModulePicker;
