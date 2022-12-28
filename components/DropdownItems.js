import { DropdownItem } from './DropdownItem';

export const DropdownItems = ( { titulo, Items } ) => {
	
console.log(Items);

return( 
 <> 
	{ titulo != null && <h3 style={{textAlign: 'center', paddingBottom:'10px'}}>{titulo}</h3> }
	{ Items != null &&
		<ul>
			{Items.map((item, index) => (
				<DropdownItem key={index} img={item.img} text={item.text} onclick={item.onclick} />
			))}
		</ul>
	}
</> 
)}

