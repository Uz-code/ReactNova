
export const TextareaComponent = ({ value , name, label, rows , onChange}) => {

    return (
        <>
            <div  className="input-tag no-select">
                {label}
            </div>
            <div className="form-check form-switch" style={{ width: "51%"}}>
                <textarea type="text" rows={rows} style={{ width: "99%", resize:"none" }} className="form-input" value={ value } name={name} onChange = {onChange} />
            </div>
        </>
    )
}