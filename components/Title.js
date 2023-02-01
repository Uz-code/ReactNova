
export const Title = ({ title,children }) => {

    return (
        <>
            <a className="space-y-2 h-8 rounded text-2xl text-slate-600" > {title}</a>
            {children}
        </>
    )
}