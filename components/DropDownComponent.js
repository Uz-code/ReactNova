
export const DropDownComponent = ( {children, open ,delay, notifications, profile, RoundCorners } ) => {
	
	
return( 
	<div className={`dropdown-menu ${notifications ? ' menu-notifications' : '' } ${profile ? 'menu-small-tic' : '' } ${RoundCorners ? 'roundCorners' : ''} ${open? 'active' : (delay) ? 'inactive delay' : 'inactive '}`} >
		{children}
	</div>
)}

export default DropDownComponent;
