import { useEffect, useState } from 'react';
import { DropDownComponent } from './DropDownComponent';
import { DropDownItems} from './DropDownItems';

export const OpenUserProfileComponent = ( { forceClose, close } ) => {

	const [open, setOpen] = useState(false);
	
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
		<label className="tab" onClick={()=>{openComponent()}}>Perfil</label>
	</div>
	<DropDownComponent open={open} setOpen={setOpen}>
		<DropDownItems/>
	</DropDownComponent>
</div>
</> 
)}

export default OpenUserProfileComponent;
