import { useAuth } from './components/Auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { OptionsMenu } from './components/OptionsMenu';
import { MenuIcon } from '@heroicons/react/outline';

 export const Menu = ({setSidebar,sidebar}) => {

	const navigate = useNavigate();

	const onButtonClick = () => {

		setSidebar(!sidebar);
	}
	
	const auth = useAuth();
    return (
        < >
		
		 <div className = "menu flex" style = {{display: 'flex', alignItems: 'center'}}>
		 <div className="upper-containter flex" style = {{display: 'flex', alignItems: 'center'}}>
				
				<div className="actions" >
			
					<a className='closeBtn'>
						{ 
						!auth.user ? <button type='submit' className="btn btn-sm btn-neutral flex" onClick={ () => navigate('/LogIn') }> Iniciar Sesion </button>
						: 
						<button className="close" onClick={()=>onButtonClick()}>
							<svg className="closeBtn" focusable="false" viewBox="0 0 6 6" style={{width : '1.5rem', height : '1.5rem', margin:'0 auto'}}>
								<MenuIcon className="h-6 w-6 text-gray-500" />
							</svg>
						</button>
						
						}
						
					</a>
					
				
					{/*<a className="gb_je gb_uc gb_he" aria-label="" href="" title="">
						<img className="logo" styles="height:40px;" src={img} />
						{/*<img className="gb_yc" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r4.png" /> 
					</a>*/}
				</div>
				
			</div>
			{ 
				/*div for user profile in the corner of the menu*/
				
				auth.user &&
					
					<div className="user-profile gap-8 pr-[40px]" style = {{display: 'flex'}}>
						<OptionsMenu/>
					</div>
					
				}
		 </div>
        </>
    )
}