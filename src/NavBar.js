import React, { useState } from 'react';

import * as RiIcons from 'react-icons/ri';

import Navbar2 from './NavBar2';

import { Link } from 'react-router-dom';

export const Navbar = ({sidebar}) => {

const [menuType, setMenuType] = useState(1);

  return (
    <>
      <div className="NavigationBar" >
        <div className={`SideNavBar`}>

          <ul  className='nav-list category-list'> 
            <Link to={"./"}  >
            <li key ='1' className={`NavItem ${menuType == 1 && 'nav-active ' }`} onClick={() => {setMenuType(1)}} >	
                <i className={`NavItem ${menuType == 1 ? 'icon-active' : 'inactive'  }`} > <RiIcons.RiHomeLine /></i>	
                <span className="tooltip inactive">Inicio</span>
            </li>
            </Link>

            <li key ='2' className={`NavItem ${menuType == 2 && 'nav-active '  }`} onClick={() => {setMenuType(2)}} >
              <i className={`NavItem ${menuType == 2 ? 'icon-active' : 'inactive'  }`} ><RiIcons.RiHomeLine /></i>	
              <span className="tooltip">Recursos Asignados</span>
            </li>

            <Link to={"./Verificaciones"}  >
              <li key ='3' className={`NavItem ${menuType == 3 && 'nav-active ' }`} onClick={() => {setMenuType(3)}} >
              <i className={`NavItem ${menuType == 3 ? 'icon-active' : 'inactive'  }`} ><RiIcons.RiHomeLine /></i>	
              <span className="tooltip inactive">Verificaciones</span>
              </li>
            </Link>

            <li key ='4' className={`NavItem ${menuType == 4 && 'nav-active ' }`}onClick={() => {setMenuType(4)}} >
            <i className={`NavItem ${menuType == 4 && 'icon-active ' }`} ><RiIcons.RiHomeLine /></i>	
            </li>

            <li key ='5' className={`NavItem ${menuType == 5 && 'nav-active ' }`} onClick={() => {setMenuType(5)}} >
            <i className={`NavItem ${menuType == 5 && 'icon-active ' }`} ><RiIcons.RiHomeLine /></i>	
            </li>

            <li key ='6' className={`NavItem ${menuType == 6 && 'nav-active ' }`}  onClick={() => {setMenuType(6)}} >
            <i className={`NavItem ${menuType == 6 && 'icon-active ' }`} ><RiIcons.RiHomeLine /></i>	
            </li>

            <li key ='7' className={`NavItem ${menuType == 7 && 'nav-active ' }`}  onClick={() => {setMenuType(7)}} >
            <i className={`NavItem ${menuType == 7 && 'icon-active ' }`} ><RiIcons.RiHomeLine /></i>	
            </li> 

            <Link to={"./SettingsPage"} onClick={() => {setMenuType(8)}}>
            <li key ='8' className={`NavItem ${menuType == 8 && 'nav-active ' }`} >	
                <i className={`NavItem ${menuType == 8 ? 'icon-active' : 'inactive'  }`} > <RiIcons.RiHomeLine /></i>	
                <span className="tooltip inactive">Settigs</span>
            </li>
            </Link>
            
          </ul>
        </div>
      </div>
      <Navbar2 
        sidebar= { sidebar } 
        MenuType= { menuType } 
      />
    </>
  );
}