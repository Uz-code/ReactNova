
export const InputFancy = ({ value , placeholder, required, type = "text", name, onChange, reference, disabled , fancy = true}) => {

    return (
        !fancy ?
        <>
            <div  className="input-tag no-select">
                {placeholder}
            </div>
            <input type={type}  className="form-input" value={value} name={ name } onChange = { onChange }  disabled={ disabled }    />
        </>
        :
        <>
            <input type={type} className="input-fancy" name= { name } placeholder=" " ref={reference} disabled={ disabled }  value={ value } onChange = { onChange } required={required} />
            <p className= { required ? "required" : ''} >{placeholder}</p>
        </>
    )
}