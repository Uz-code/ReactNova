
export const Card = ({ children , flex }) => {

    return (
        <>
           
            {  
               <div className= { `card mh-2 shadow border-0 ${flex ? 'flex' : ''}` }>
                    <div className='card-body mb-5'>
                        {children}
                    </div>
                </div>
            } 

        </>
    )
}