
export const Button = ({ label , onClick, type , active , medium }) => {

    return (
        <>
           
            {  
                <button className={`btn btn-sm btn-neutral ${ medium && 'pd-1' } white ${ active && 'active' }`} onClick={onClick} type={type}> {label} </button>
            } 

        </>
    )
}