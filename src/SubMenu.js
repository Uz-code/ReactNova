import React, { useState } from 'react';
import TercerNivelMenu from './TercerNivelMenu';

import { Link } from 'react-router-dom';

const SubMenu = ( { item , index, sidebarState } ) => {
	
const [classToggle, setclassToggle] = useState(false);

const ToggleSwitch = (  ) => { setclassToggle(!classToggle); }

const [subnav, setSubnav] = useState(false);
	  
const showSubNav = (  ) => { setSubnav(!subnav); }
	
	if (Object.keys(item.subNav).length > 0 )
	{ 
		return  (
			
			<li key={index} className={classToggle ? 'item active ' : 'item '} onClick={ToggleSwitch} >
				{/*<a onClick = {item.subNav && sidebarState && showSubNav } >*/}
				<a onClick = {item.subNav.length > 0 && showSubNav } >
				<i>{item.icon}</i>	
				  <span className="links_name">{item.title}</span>
				</a>
				<div className={sidebarState ? 'subMenu SidebarData-active' : 'subMenu SidebarData-closed'} >
					{ subnav && item.subNav.map((item, index) => {
					
					  return (
						 <TercerNivelMenu 
						  item= { item } 
						  key= { index }
						  
						  />
					  );
					})
					}	
				</div>	
				<span className="tooltip">{item.title}</span>
			</li>
			
		)
	}else{ 
	
		return  (
			<li key={index} className={classToggle ? 'item active' : 'item '} onClick={ToggleSwitch} >
				<Link to={item.path} >
				<i>{item.icon}</i>	
				  <span className="links_name">{item.title}</span>
				</Link>
				<span className="tooltip">{item.title}</span>
			</li>
		)
	}
}

export default SubMenu