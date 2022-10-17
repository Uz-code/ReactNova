import React, { useState } from 'react';
import './NavBar2.css';

import SubMenu from './SubMenu';
import * as IoMdIcons from 'react-icons/io';

import { SidebarData1 } from './SidebarData1';
import { SidebarData2 } from './SidebarData2';
import { SidebarData3 } from './SidebarData3';
import { SidebarData4 } from './SidebarData4';

export  const Navbar2 = ({sidebar,MenuType}) => {

	const SidebarData = orderMenu(MenuType);

	function orderMenu(MenuType){
		let SidebarArray = [SidebarData1,SidebarData2,SidebarData3,SidebarData4,SidebarData1,SidebarData1,SidebarData1];

		if( MenuType > 7 || MenuType < 1)
		{
			console.log("MenuType is out of range");
			return SidebarArray[0];	
		}

		return SidebarArray[MenuType-1];
	}

	return (
        < >  
		<div className={`sidebar ${sidebar && 'open' }`}>
			<ul className="nav-list">
				{SidebarData.map((item, index) => {
					return (
						<SubMenu	
						Menu 
						item= { item } 
						key= { index }
						sidebarState =  { sidebar }
					/>
					);
				})}	
				
				<li className="profile">
					<div className="profile-details">
					</div>
					<div key ='12' className="item">
						<a  className="exit" >
							<i>    
								<IoMdIcons.IoMdExit />
							</i>	
						</a>
						<span className="tooltip">Log out</span>
					</div>
				</li>
			</ul>
		</div>
        </>
    )
}
	
export default Navbar2;