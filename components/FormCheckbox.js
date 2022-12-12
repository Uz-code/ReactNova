import { InputGroup } from "./InputGroup"
export const FormCheckbox = ({ marginTop, flex , value , label , name, width, disabled, onChange}) => {

    return (
        <>
           
            {  
            <InputGroup marginTop= {marginTop} flex = {flex}>
              <div  className="input-tag no-select">
                {label}:
              </div>
              <div style={{ width : width }}>
              <div className="form-check form-switch" style={{ width: "3rem"}}>
                  <label className="toggle">
                      <input type="checkbox" checked={value} name= {name} disabled={disabled} onChange={onChange}/>
                      <span style={{ top: "10px"}}></span>
                  </label>
              </div>
              </div>
            </InputGroup>
            } 

        </>
    )
}