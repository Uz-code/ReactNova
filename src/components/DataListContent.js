
export const DataListContent = ({ address, fullName, email, id , university, company, size, onAddUser, listUsers }) => {

    return (
    
        <div className={size === 1 ? "card card-full" : "card list-item card-half"} onClick = { () => onAddUser(fullName, id) }>
        <div className="flex">
    

            <button type="button" className={`list-item__button ${ listUsers.some( user => user[1] === id ) ? 'list-item__button-active' : '' }`}>
			  <svg className="feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>

            <div className="col-md-8">
                    <div className="card-body mx-w-185">
                        <h5 className="card-title">{ fullName }</h5>
                        <div className="card-text">{ address }</div>  
                        <div className="card-text">{ company }</div>
                        <div className="card-text"><small className="text-muted">Last updated 3 mins ago</small></div>
                    </div>
                </div>
               
            </div>
        </div>
    )
  }