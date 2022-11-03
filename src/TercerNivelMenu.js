import React, { useState } from 'react';

import { Link } from 'react-router-dom';


const TercerNivelMenu = ( { item , index } ) => {
	
const [subnav, setSubnav] = useState(false);
	  
const showSubNav = () => setSubnav(!subnav);

	if( item.subNav.length <= 0 ) {
		return  (
			<>
			<Link to={item.path}  key={index} className={subnav ? 'item active' : 'item '}  >
				<a>
				  <span className="links_name ">{item.title}</span>	
				</a>
			</Link>
			</>
		)
	}else{
		return  (
			<>
			<div key={index} onClick={item.subNav && showSubNav} className='negrita flex' >
				<a onClick = {showSubNav } >
				<span className="links_name ">{item.title}</span>	
				<span className={subnav ? 'filter-small rotation-180' : 'filter-small '} ></span>	
				</a>
			</div>
			
			{  subnav && item.subNav.map((item, index) => {
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

}

export default TercerNivelMenu