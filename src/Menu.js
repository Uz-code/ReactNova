import { useAuth } from './components/Auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
 export const Menu = ({setSidebar,sidebar}) => {

	const navigate = useNavigate();

	const onButtonClick = () => {

		setSidebar(!sidebar);
	}
	
	const auth = useAuth();
    return (
        < >
		
		 <div className = "menu">
		 <div className="upper-containter">
				<div className="actions" >
			
					<a>
						{ 
						!auth.user ? <button type='submit' className="btn btn-sm btn-neutral flex" onClick={ () => navigate('/LogIn') }> Iniciar Sesion </button>
						: 
						<button className="close" onClick={()=>onButtonClick()}>
							<svg focusable="false" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
						</button>
						}
						
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