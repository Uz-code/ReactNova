import { DropdownItems } from './DropdownItems';
import { OpenDrawer } from './OpenDrawer';
import { useEffect, useState } from 'react';
import { useFetchNotifications } from '../hooks/useFetchNotifications';
//TODO : Implementar notificaciones


export const Notifications = ( {forceClose } ) => {

const onError = (error) => {console.log(error);};

let { notifications, isLoading } = useFetchNotifications( onError );

const [badgeCount,setBadgeCount] = useState(7);

useEffect(() => {
	setBadgeCount(notifications.length);
}, [notifications]);

return( 
<> 
	<OpenDrawer titulo='Notificaciones' forceClose={forceClose} dataBadgeCount = {badgeCount}>
		<DropdownItems titulo='Notificaciones' Items={notifications} isLoading={isLoading} />
	</OpenDrawer>
</> 
)}
