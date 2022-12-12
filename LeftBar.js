import React, { useState } from 'react';
import './NavBar.css';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';

 export const Navbar = () => {
	  
  const showSidebar = () => setSidebar(!sidebar);
  
  const [sidebar, setSidebar] = useState(false);

  const showRecursos = () => setRecursos(!recursos);
  
  const [recursos, setRecursos] = useState(false);

  const [categories,setCategories] = useState([]);
 
 
    return (
        < >  
        <div className={sidebar ? 'left-bar left-bar-active' : 'left-bar'} >
          <div className="upper-part">
            <div className="actions" onClick={showSidebar}>
              <div className=""></div>
              <div className="circle-2"></div>
            </div>
          </div>
          <div className={sidebar ? 'left-content left-content-active' : 'left-content'} >
            <ul className={sidebar ? 'action-list' : 'action-list action-list-inactive'} > 
              
            <li className="item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox" viewBox="0 0 24 24">
                <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
              <span onClick={showRecursos}> Recursos Asignados
                <div className={recursos ? 'panel  panel-active' : 'panel ' } >
                  <p>Sobres Normales</p>
                </div>
              </span>
            </li>
            
            {SidebarData.map((item, index) => {
              return (
              <>
                <li key={index} className="item">
                  {item.icon}
                  <span> {item.title}</span>
                </li>
              </>
              );
          })}
          
          </ul>
          <ul  className={sidebar ? 'category-list' : 'category-list category-list-inactive'} > 
              <li className="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Perfil</span>
              </li>
              <li className="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-sun" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                </svg>
                <span>Configuracion</span>
              </li>
              <li className="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline></svg>
                <span>Notificaciones</span>
              </li>
              <li className="item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                <span>Contactanos</span>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}