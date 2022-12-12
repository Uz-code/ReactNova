
export const SelectComponent = ({ value , name, label, options , onChange}) => {

    return (
        <>
        <div  className="input-tag no-select">
            {label}:
        </div>
        <select className="form-select form-select-lg" value={value} name={name} onChange = {onChange}>
            {options.map(
            ({ value, label }) => <option key={value} value={value}>{label}</option>
            )}
        </select>
        </>
    )
}