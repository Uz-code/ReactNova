import { useEffect, useState } from 'react';
import { DropDownComponent } from './DropDownComponent';
import { Notifications} from './Notifications';

export const OpenNotifications = ( { forceClose, close } ) => {

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
		<label className="tab" onClick={()=>{openComponent()}}>Notificaciones</label>
	</div>
	<DropDownComponent open={open} setOpen={setOpen} notifications={true}>
		<Notifications/>
	</DropDownComponent>
</div>
</> 
)}
