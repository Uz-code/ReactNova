import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const TercerNivelMenu = ( { item , index , sidebarState} ) => {
	
const [subnav, setSubnav] = useState(false);
	  
const showSubNav = () => setSubnav(!subnav);


	return  (
		<>
			<Link key={index} to={item.path} onClick = {item.subNav && showSubNav} >
			  <span className="links_name">{item.title}</span>
			</Link>
			
			
			{ item.subNav.length > 0 && subnav && item.subNav.map((item, index) => {
			  return (
				<>
				<div className="tercerNivel">
					<Link to={item.path}  key={index} >
					  <span className="links_name">{item.title}</span>
					</Link>
				</div>
				</>
			  	);
			  
				})
			}

		</>
	)
}

export default TercerNivelMenu