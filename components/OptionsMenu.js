import {  useState } from 'react';
import { OpenModulePicker } from './OpenModulePicker';
import { OpenUserProfileComponent} from './OpenUserProfileComponent';
import { useReducer } from 'react';
 
export const OptionsMenu = () => {

	const [moduloActual, setModuloActual] = useState('SATCS');
	
    const [moduleClose, forceModuleClose] = useReducer((x) => x + 1, 0);
	const [userProfileClose, forceProfileClose] = useReducer((x) => x + 1, 0);

return( 
 <> 
	<OpenModulePicker forceClose={forceModuleClose} close={userProfileClose} moduloActual = {moduloActual} setModuloActual = {setModuloActual}/>
	<OpenUserProfileComponent forceClose={forceProfileClose} close={moduleClose}/>
</> 
)}

export default OptionsMenu;
