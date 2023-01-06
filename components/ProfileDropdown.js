import { useAuth } from './Auth';
import { DropdownItems } from './DropdownItems';

export const ProfileDropdown = ( ) => {

const auth = useAuth();

return( 
 <> 
	<DropdownItems titulo={`Hola ${ auth.user.username}`}
	Items={[
	{ img: 'https://img.icons8.com/ios/512/user-male-circle--v2.png', text: 'Mi Perfil',  path:'/MiPerfil' , action: 'redirect'},
	{ img: 'https://img.icons8.com/ios/50/000000/logout-rounded-left.png', text: 'Log out', action: 'logout' },
	]} />
</> 
)}

