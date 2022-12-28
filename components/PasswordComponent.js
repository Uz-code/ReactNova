import { BsEye, BsEyeSlash } from 'react-icons/bs';

export const PasswordComponent = ({  value, name, title , required ,onChange , toggleTypePass , typePass , toggleGenerarPass }) => {

    return (
        <>
            <input type={typePass} id={name}  className="input-fancy" name={name} placeholder="  " value={value} onChange={onChange} readOnly={toggleGenerarPass} />
            <p className= { required ? "required" : ''}>{title}</p>
            {!toggleGenerarPass && 
            <div className="password-icon" onClick={toggleTypePass}>
                <i data-feather="eye"> {typePass == 'password' ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>} </i>
            </div>
             }
        </>
    )
}