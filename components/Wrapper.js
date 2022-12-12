
export const Wrapper = ({ children }) => {

    return (
        <>
           
            {  
                <div className="App-header App-body">
                    <div className= "responsive-wrapper container-fluid ">
                        {children}
                    </div>
                </div>
            } 

        </>
    )
}