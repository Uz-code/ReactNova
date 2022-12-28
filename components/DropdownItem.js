import { ClampMessage } from '../utils/ClampMessage';

export const DropdownItem = ( { img , text , onclick } ) => {
	return(
	  <li className = 'dropdownItem' onClick={ onclick } >
		{img && 
			<img src={img} style={{width: '20px', height: '20px'}}/>
		} 
		<div style={{  textAlign : 'left' }}>
		 	<ClampMessage message={text} lineClamp={1} />
		</div>
	  </li>
	);
  }
