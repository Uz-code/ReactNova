import { DropdownItem } from './DropdownItem';
import { LoadingComponent } from './LoadingComponent';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export const DropdownItems = ( { titulo, Items , isLoading} ) => {
	const navigate = useNavigate()
	const auth = useAuth();

return( 
	<>
		{ titulo != null && <h3 style={{textAlign: 'center', paddingBottom:'10px'}}>{titulo}</h3> }
		
		<LoadingComponent loading={isLoading} type='loader-1' centerTable={true} >
			{ Items != null &&
				<ul>
					{Items.length > 0 ? Items.map((item, index) => (
						<DropdownItem key={index} img={item.img} text={item.text} onclick = {() => item.action =='redirect' ? (item.path && navigate(item.path)) : item.action == 'logout' && auth.logout()} />
					)) 
					: 
						<DropdownItem  text={"No hay Notificaciones"} />
					}
				</ul>
			}
		</LoadingComponent>
	</>
)}

