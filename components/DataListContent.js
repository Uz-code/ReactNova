import { ListContent } from './ListContent';

export const DataListContent = ({ address, fullName, id , size, onAddUserToList, listUsers }) => {

    return (
    
        <div className={size === 1 ? "card card-full" : "card list-item card-half"} onClick = { () => onAddUserToList(fullName, id) }  style={{ maxHeight: '120px' }}>
            <div className="flex">


                <button type="button" className={`list-item__button ${ listUsers.some( user => user.id === id ) ? 'list-item__button-active' : '' }`}>
                    <svg className="feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>

                <ListContent content1={fullName} content2={address} content3={'Last updated 3 mins ago'} />
                
            </div>
        </div>
    )
  }