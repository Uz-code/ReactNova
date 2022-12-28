import { useState } from 'react';
import { OpenModulePicker } from './OpenModulePicker';
import { useReducer } from 'react';

import { Notifications} from './Notifications';
import { Profile } from './Profile';

export const OptionsMenu = () => {

	const [moduloActual, setModuloActual] = useState('SATCS');
	
    const [moduleClose, setForceModuleClose] = useReducer((x) => x + 1, 0);

return( 
<> 
	<OpenModulePicker close={moduleClose} moduloActual = {moduloActual} setModuloActual = {setModuloActual}/>

	<Notifications forceClose={setForceModuleClose} />
	
	<Profile forceClose={setForceModuleClose} />

</> 
)}

export default OptionsMenu;
