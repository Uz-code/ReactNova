import { useEffect,useState } from "react";

export const ModulePicker = ( {moduloActual, seleccionarModulo } ) => {

	const [ disable, setDisable ] = useState(false);

	const seleccionado = (value) => {
		setDisable(true);
		seleccionarModulo(value);

		return setTimeout(() => {
			setDisable(false);
		}	, 800);
	}


return( 
   
<div className="container-module">
	<div className="tabs">
		<input type="radio" id="radio-1" name="tabs" onClick={ ()=>{seleccionado("SATCS")}} disabled={disable} checked={moduloActual === "SATCS"}/>
		<label className="tab" htmlFor="radio-1">SATCS</label>
		<input type="radio" id="radio-2" name="tabs" onClick={()=>{seleccionado("SATAG")}} disabled={disable} checked={moduloActual === "SATAG"}/>
		<label className="tab" htmlFor="radio-2" >SATAG</label>
		<input type="radio" id="radio-3" name="tabs" onClick={()=>{seleccionado("SATND")}} disabled={disable} checked={moduloActual === "SATND"} />
		<label className="tab" htmlFor="radio-3">SATND<span className="notification">2</span></label>

		<span className="glider"></span>
	</div>
</div>
)}

export default ModulePicker;
