
export const Card = ({ children , flex , minHeight ,cardSmall}) => {

    return (
        <>
           
            {  
               <div className= { `card ${cardSmall ? 'card-small' : ''} ${minHeight ? 'mh-2' : ''} shadow border-0 ${flex ? 'flex' : ''}` }>
                    <div className='card-body'>
                        {children}
                    </div>
                </div>
            } 

        </>
    )
}