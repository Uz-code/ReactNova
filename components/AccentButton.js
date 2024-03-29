
export const AccentButton = ({ label , onClick,type ="button" ,disabled }) => {

    return (
        <>
            {  
            <button  onClick={onClick} disabled={disabled} type={type}  class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ">
               {label}
           </button>
            } 

        </>
    )
}