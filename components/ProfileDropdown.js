import { useAuth } from './Auth';
import { DropdownItems } from './DropdownItems';
import { useNavigate } from 'react-router-dom';

export const ProfileDropdown = ( ) => {

const auth = useAuth();
const navigate = useNavigate();

return( 
 <> 

<div class="px-1 py-2 text-sm text-gray-900 dark:text-white">
      <div>Bienvenido</div>
      <div class="font-medium truncate">{ auth.user.username}</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
	  <li class="py-1">
      <small href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" 
		   onClick={()=>navigate('/MiPerfil')}>Perfil</small>
	  </li>
	  <li class="py-1">
	  	<small href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >
        Settings
        </small>
	  </li>
	  <li class="py-1">
		<small href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" >FAQ</small>
	  </li>
      <li class="py-1">
        <small href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=> auth.logout()}>
          Sign out
        </small>
      </li>
    </ul>

</> 
)}

