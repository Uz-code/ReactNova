import * as IoIcons from 'react-icons/io5';
import { SetState } from './hooks/SetState';
import img from './img/logo.png';

import React, { useState } from 'react';

 export const Menu = ({setSidebar,sidebar}) => {

	const onButtonClick = () => {

		setSidebar(!sidebar);
	}
	
    return (
        < >
		
		 <div className = "menu">
		 <div className="upper-containter">
				<div className="actions" >
			
					<a>
						<button className="close" onClick={()=>onButtonClick()}  >
							<svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
						</button>
					</a>
				
					{/*<a className="gb_je gb_uc gb_he" aria-label="" href="" title="">
						<img className="logo" styles="height:40px;" src={img} />
						{/*<img className="gb_yc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png" /> 
					</a>*/}
				</div>
			</div>
		 </div>
        </>
    )
}