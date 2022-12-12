import { useAuth } from './Auth';

export const DropDownItems = () => {
const auth = useAuth();
	
return( 
 <> 
	<h3>Hola <span>{auth?.user?.username}</span></h3>
	<ul>
		<DropdownItem img="https://img.icons8.com/ios/50/000000/plus-math.png" text="Agregar Modulo"/>
		<div onClick={auth.logout}>
			<DropdownItem text="Log out" img="https://img.icons8.com/ios/50/000000/logout-rounded-left.png" />
		</div>
	</ul>
</> 
)}

function DropdownItem(props){
	return(
	  <li className = 'dropdownItem'>
		<img src={props.img} style={{width: '20px', height: '20px'}}/>
		<a> {props.text} </a>
	  </li>
	);
  }
