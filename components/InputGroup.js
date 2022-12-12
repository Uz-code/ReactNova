
export const InputGroup = ({ children , marginBottom , marginTop, flex }) => {

    return (
        <>
           
            {  
                <label className= {`input-group${flex ? '-flex' : ' ' } mb-${marginBottom} mt-${marginTop}`}>
                    {children}
                </label>
            } 

        </>
    )
}