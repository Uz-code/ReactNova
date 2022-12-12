import { ModulePicker } from './ModulePicker';
import { useEffect, useState } from 'react';
import { DropDownComponent } from './DropDownComponent';

export const OpenModulePicker = ({ forceClose , close, moduloActual, setModuloActual }) => {

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
		}, 1000);
		return () => clearTimeout(timer);
	}, [open]);

	const openComponent = () => {
		setOpen(!open);
		!open && forceClose(1);
	}

	useEffect(() => {
		setOpen(false);
	}, [close]);

return( 
 <> 

<div className="container-module">
	<div className="drawer tabs">
		<label className="tab"onClick={()=>{openComponent()}}>{moduloActual}</label>
	</div>
	<DropDownComponent open={open} setOpen={setOpen} RoundCorners={true} delay={delay}>
		<ModulePicker moduloActual = {moduloActual} seleccionarModulo = { value => seleccionarModulo(value)}/>
	</DropDownComponent>
</div>

</> 
)}

export default OpenModulePicker;
