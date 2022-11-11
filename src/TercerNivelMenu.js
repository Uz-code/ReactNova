import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const TercerNivelMenu = ( { item , index , current , setCurrent} ) => {
	
const [subnav, setSubnav] = useState(false);
	  
const showSubNav = () => setSubnav(!subnav);

	if( item.subNav.length <= 0 ) {
		return (
			<>
			<li className={current === item.title ? 'item-active' : 'item'} key= { index } >
				<Link to={item.path}  key={item.title} >
					<span className={current === item.title ? 'links_name menu__link--active' : 'links_name'} >{item.title}</span>	
				</Link>
			</li>
			</>
		)
	}else{
		return (
		<>
			<li>
			<div key={item.title} onClick={item.subNav && showSubNav} className=' flex' >
				<a onClick = {showSubNav}  >
				<span className={'links_name'} >{item.title}</span>	
				<span className={subnav ? 'filter-small rotation-360' : 'filter-small rotation-270'} ></span>	
				</a>
			</div>
			</li>

			{subnav && item.subNav.map((item) => {
			  return (
				<>
				<li className={current === item.title ? 'item-active' : 'item'} onClick = { () => setCurrent(item.title) } >
				<div className="tercerNivel" >
					<Link to={item.path} className='active'  >
					  <span className={current === item.title ? 'links_name menu__link--active' : 'links_name'}>{item.title}</span>
					</Link>
				</div>
				</li>
				</>
			  	)})
			}
		</>
		)
	}

}

export default TercerNivelMenu