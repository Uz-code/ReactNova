
export const Row = ({ children, gap }) => {

    return (
        <div className= "row g-6 mb-3" style={{ display: "flex", flexDirection: "row" , gap: gap}}>
            {children}
        </div>
    )
}