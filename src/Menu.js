import * as IoIcons from 'react-icons/io5';
import { SetState } from './hooks/SetState';
import img from './img/logo.png';

import React, { useState } from 'react';

 export const Menu = ({setSidebar}) => {

    const [state, innserState] = useState(false);

	const onButtonClick = () => {
		
		innserState(!state);

		setSidebar(!state);
	}
	
    return (
        < >
		
		 <div className = "menu">

		 <div className="upper-containter">
				<div className="actions" >
			
						<a className="gb_je gb_uc gb_he" aria-label="Gmail" href="#inbox" title="Gmail">
							<button className="close" onClick={()=>onButtonClick()} >
								<svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
							</button>
						</a>
					
						<a className="gb_je gb_uc gb_he" aria-label="" href="" title="">
						 <img className="logo" styles="height:40px;" src={img} />
						 {/*<img className="gb_yc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png" /> */}
						</a>
				</div>
			</div>



          <div className="pull-right links">	
					<div className="rad-dropdown">
					
					<a className="rad-menu-item" href="#">
						<i className="icon">
							<span className="rad-menu-badge red">6</span>
						</i>
					</a>
					 <i className="icon"> <IoIcons.IoNotificationsOutline />	</i>
						<ul className="rad-dropmenu-item">
							<li className="rad-dropmenu-header"><a href="#">Your Alerts</a></li>
							<li className="rad-notification-item text-left">
								<a className="rad-notification-content" href="#">
									<div className="pull-left">	
									</div>
									<div className="rad-notification-body">
										<div className="lg-text">Introduction to fetch()</div>
										<div className="sm-text">The fetch API</div>
										<em className="pull-right sm-text"><i className="fa fa-clock-o"></i> 2 sec ago</em>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
		 </div>
        </>
    )
}