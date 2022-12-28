import { DropdownItems } from './DropdownItems';
import { OpenDrawer } from './OpenDrawer';
import { useNavigate } from 'react-router-dom';

//TODO : Implementar notificaciones


export const Notifications = ( {forceClose } ) => {
const navigate = useNavigate(); // <-- use hook in component

const notificaciones = [
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Alta Usuario' },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Baja de Usuario' },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Nuevo Sobre' },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Nuevos Reportes de Auditoria Disponibles!',  onclick: () => navigate('/reporteAuditoria') },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Atento! Este mensaje requiere de tu atención, aunque no es tan importante.' },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Cuidado! Es muy importante que leas este mensaje de alerta. Error! Haz algunos cambios antes de volver a enviar el formulario.' },
	{ img: 'https://img.icons8.com/ios/512/add-reminder.png', text: 'Error! Haz algunos cambios antes de volver a enviar el formulario.' }
]

return( 
<> 
	<OpenDrawer titulo='Notificaciones' forceClose={forceClose} dataBadgeCount = {notificaciones.length} >
		{notificaciones.length != 0 ?	
			<DropdownItems titulo='Notificaciones' Items={notificaciones} />
			:
			<DropdownItems titulo='No hay Notificaciones' />
		}	
	</OpenDrawer>
</> 
)}
