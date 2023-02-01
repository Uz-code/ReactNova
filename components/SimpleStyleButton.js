
export const SimpleStyleButton = ({ children , onClick , type }) => {

    return (
        <>
           
            {  

            <button className={`inline-flex justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  focus:ring-offset-gray-100`} onClick={onClick} type={type}> {children}</button>

            } 

        </>
    )
}