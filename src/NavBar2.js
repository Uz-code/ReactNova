import React, { useState } from 'react';
import './NavBar2.css';

import SubMenu from './SubMenu';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoMdIcons from 'react-icons/io';

import { Link,NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';

import { SetState } from './hooks/SetState';

export const Navbar = ({sidebar}) => {
	  
    return (
        < >  
		  <div className={`sidebar ${sidebar && 'open' }`}>

			
			<ul className="nav-list">
			
			{SidebarData.map((item, index) => {
			
				  return (
					
					 <SubMenu 
				  item= { item } 
				  key= { index }
				  sidebarState =  { sidebar }
				  />
						
				  );
				})}
					
			  <ul  className='nav-list category-list'> 
				
				  	  <li key ='8' className="item">
						<a href="./FormWithCustomHook" >
						<i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
					<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
					<circle cx="9" cy="7" r="4"></circle>
					<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
					<path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></i>	
						  <span className="links_name">Perfil</span>
						</a>
						 <span className="tooltip">Perfil</span>
				  </li>
				
				
				  <li key ='9' className="item">
						<a href="#" >
						<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-sun" viewBox="0 0 24 24">
							<circle cx="12" cy="12" r="5"></circle>
							<path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
						  </svg>
						</i>	
						  <span className="links_name">Configuracion</span>
						</a>
						 <span className="tooltip">Configuracion</span>
				  </li>
				  
				  	  <li key ='10' className="item">
						<a href="#" >
						<i> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up">
							<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
							<polyline points="17 6 23 6 23 12"></polyline></svg></i>	
						  <span className="links_name">Notificaciones</span>
						</a>
						 <span className="tooltip">Notificaciones</span>
				  </li>
				  
				  <li key ='11' className="item">
						<a href="#" >
						<i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap">
							<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
						</i>	
						  <span className="links_name">Contactanos</span>
						</a>
						 <span className="tooltip">Contactanos</span>
				  </li>
				  
				  
			</ul>
			
			 <li className="profile">
				 <div className="profile-details">
			
				 </div>
					<div key ='12' className="item">
					<a  className="exit" >
					<i>    
					<IoMdIcons.IoMdExit />
					</i>	
						<span className="links_name">Log out</span>
					</a>
					<span className="tooltip">Log out</span>
					</div>
			 </li>
			</ul>
			
		  </div>
        </>
    )
}