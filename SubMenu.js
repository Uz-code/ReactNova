import React, { useState } from 'react';
import TercerNivelMenu from './TercerNivelMenu';

import { Link } from 'react-router-dom';

const SubMenu = ( { item , index, sidebarState } ) => {
	
const [classToggle, setclassToggle] = useState(false);

const ToggleSwitch = (  ) => { setclassToggle(!classToggle); }

const [subnav, setSubnav] = useState(true);
const [current , setCurrent] = useState('');

const showSubNav = (  ) => { setSubnav(!subnav); }

		return  (
			<>
			<li key={index} className={classToggle ? 'item active ' : 'item '} onClick= { () => ToggleSwitch() } >
				<a onClick = { showSubNav } >
				  <span className="links_name menu__link--active">{item.title}</span>
				</a>
			</li>

					{ subnav && item.subNav.map((item2, index) => {
					  return (
						<div className={sidebarState ? 'SidebarData-active' : 'subMenu SidebarData-closed'} key= { index } onClick = { () => !item2.subNav.length && setCurrent(item2.title) }  >
						 <TercerNivelMenu 
						  item= { item2 } 
						  index= { index }
						  current = { current }
						  setCurrent = { setCurrent }
						  />
						</div>	
					  );
					  
					})
					}	
			</>
		)
	
}

export default SubMenu