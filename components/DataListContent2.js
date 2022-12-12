
export const DataListContent2 = ({ address, fullName, email, id , university, company, size }) => {

    return (
    
        // if listUsers is not empty, check if the user is already in the list
        // if the user is already in the list, show the button with the class "btn btn-danger"
        // if the user is not in the list, show the button with the class "btn btn-primary"
        // if listUsers is empty, show the button with the class "btn btn-primary"
        <div className={size === 1 ? "card card-full" : "card list-item card-half"} >
        <div className="flex">
            <div className="col-md-8">
                    <div className="card-body mx-w-185">
                        <h5 className="card-title">{ fullName }</h5>
                        <div className="card-text">{ address }</div>  
                        <div className="card-text">{ company }</div>
                        <div className="card-text"><small className="text-muted">Last updated 3 mins ago</small></div>
                    </div>
                </div>
                
                <div className="col-md-8 ">
                  <div className="card-header">
                      <div className="card-text"><small className="text-muted"> the audit report is not an analysis of the company's earnings performance for the period. Instead, the report is merely a measure of the reliability of the financial statements. </small></div>
                  </div>
                </div>
            </div>
        </div>
    )
  }