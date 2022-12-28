
export const ListContent = ({ content1,content2,content3,content4,content5 }) => {

    return (
        <>
           
            {  
            <div className="flex">
                <div className="card-body mx-w-185">
                    <h5 className="card-title">{ content1 }</h5>
                    { content2 && <div className="card-text">{ content2 }</div>  }
                    <div className="card-text"><small className="text-muted">{ content3 }</small></div>
                </div>
                 
                <div className="card-body mx-w-185">
                    <div className="card-text"> <small className="text-muted">{ content4 }</small></div>
                    <div className="card-text"><small className="text-muted">{ content5 }</small></div>
                </div>
            </div>
            } 

        </>
    )
}