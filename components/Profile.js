import { OpenDrawer} from './OpenDrawer';
import { ProfileDropdown } from './ProfileDropdown';

export const Profile = ( {forceClose } ) => {
	
return( 
<> 
	<OpenDrawer titulo='Perfil' forceClose={forceClose} >
		<ProfileDropdown/>
	</OpenDrawer>
</> 
)}
