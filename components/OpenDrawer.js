import { useEffect, useState, useCallback } from 'react';
import { DropDownComponent } from './DropDownComponent';

export const OpenDrawer = ( { forceClose, close, titulo , children , dataBadgeCount = 0 } ) => {
	const [CountNotifications, setCountNotifications] = useState(dataBadgeCount);
	//console.log(dataBadgeCount);
	//const ref = useRef(null);
	//useOutsideAlerter(ref,setOpen);
	
	const [open, setOpen] = useState(false);
	
	const openComponent = () => {
		setOpen(!open);
		!open && forceClose(1);
	}

	useEffect(() => {
		setOpen(false);
	}, [close]);

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
 <> 
<div className="container-module" onMouseEnter={()=>{setOpen(true);forceClose(1);setCountNotifications(0);}}  onMouseLeave={()=>{setOpen(false);}} /*onClick={()=>{openComponent();} ref={ref}*/ >
	<div className="drawer tabs notification-badges" onClick={()=>{openComponent();}} >
	
		<label className="tab" {...(CountNotifications > 0 ) && { 'data-badge': CountNotifications }}  data-tooltip-global="You have unread notifications" >
			{ titulo }
		</label>
		
	</div>
	{ 
	<DropDownComponent open={open} profile ={ titulo === 'Perfil' ? true : false } notifications ={ titulo === 'Notificaciones' ? true : false }>
		{ children }
	</DropDownComponent>
	}
</div>
</> 
)}
