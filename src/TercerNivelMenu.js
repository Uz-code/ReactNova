import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const TercerNivelMenu = ( { item , index } ) => {
	
const [subnav, setSubnav] = useState(false);
	  
const showSubNav = () => setSubnav(!subnav);

	if( item.subNav.length <= 0 ) {
		return  (
			<>
			<Link to={item.path}  key={item.title} className={subnav ? 'item active' : 'item '}  >
				  <span className="links_name ">{item.title}</span>	
			</Link>
			</>
		)
	}else{
		return  (
			<>
			<div key={item.title} onClick={item.subNav && showSubNav} className=' flex' >
				<a onClick = {showSubNav} >
				<span className="links_name ">{item.title}</span>	
				<span className={subnav ? 'filter-small rotation-360' : 'filter-small rotation-270'} ></span>	
				</a>
			</div>
			
			{subnav && item.subNav.map((item, index) => {
			  return (
				<>
				<div className="tercerNivel" key={item.title}>
					<Link to={item.path} >
					  <span className="links_name">{item.title}</span>
					</Link>
				</div>
				</>
			  	)})
			}

		</>
		)
	}

}

export default TercerNivelMenu