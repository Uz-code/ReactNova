import React, { useState } from 'react';
import TercerNivelMenu from './TercerNivelMenu';

import { Link } from 'react-router-dom';

const SubMenu = ( { item , index, sidebarState } ) => {
	
const [classToggle, setclassToggle] = useState(false);

const ToggleSwitch = (  ) => { setclassToggle(!classToggle); }

const [subnav, setSubnav] = useState(true);
	  
const showSubNav = (  ) => { setSubnav(!subnav); }
	
	if (Object.keys(item.subNav).length > 0 )
	{ 
		return  (
			<>
			<li key={index} className={classToggle ? 'item active ' : 'item '} onClick={ToggleSwitch} >
				<a onClick = {item.subNav.length > 0 && showSubNav } >
				  <span className="links_name negrita">{item.title}</span>
				</a>
			</li>

					{ subnav && item.subNav.map((item, index) => {
					
					  return (
						<li className={sidebarState ? 'subMenu SidebarData-active' : 'subMenu SidebarData-closed'} key= { index } >

						 <TercerNivelMenu 
						  item= { item } 
						  index= { index }
						  />
						</li>	

					  );
					  
					})
					}	
			</>
		)
	}else{ 
	
		return  (
			<li key={index} className={classToggle ? 'item active' : 'item '} onClick={ToggleSwitch} >
				<Link to={item.path} >
				  <span className="links_name negrita">{item.title}</span>
				</Link>
			</li>
		)
	}
}

export default SubMenu