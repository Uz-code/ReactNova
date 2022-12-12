
export const ContainerFlex = ({ children , half, justifyContent, paddingTop = true, gap = true }) => {

    return (
        <>
           
            {  
                <div className={ `row g-6 flex ${paddingTop ? 'content-main': ''}`} style={{ flexDirection: "row" }}>
                    <div className= {`col-xl-3 col-sm-6 col-12 main-section ${half ? 'form-user': ''}`}  style={{ flex:1 , justifyContent: justifyContent, gap : gap }}>
                        {children}
                    </div>
                </div>
            } 

        </>
    )
}