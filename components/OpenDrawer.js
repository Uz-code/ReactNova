import { useEffect, useState, useCallback } from 'react';
import { DropDownComponent } from './DropDownComponent';
import img from '../img/profile.jpg';
import * as Icons from "@heroicons/react/outline";


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
	
		{ titulo === 'Perfil' ? 
		<label className='tab'>
			<img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-100 dark:ring-gray-500" src={img} alt="Bordered avatar"/>
		</label>
		 : 
		<label className="tab" {...(CountNotifications > 0 ) && { 'data-badge': CountNotifications }}  data-tooltip-global="You have unread notifications" >
		<Icons.BellIcon  className="h-6 w-6 text-gray-500" />
		</label>
  } 
		
		
	</div>
	{ 
	<DropDownComponent open={open} profile ={ titulo === 'Perfil' ? true : false } notifications ={ titulo === 'Notificaciones' ? true : false }>
		{ children }
	</DropDownComponent>
	}
</div>
</> 
)}
