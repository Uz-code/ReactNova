import { useState,useEffect } from 'react';
import { PasswordComponent } from './PasswordComponent';
import { BsKeyFill } from 'react-icons/bs';

export const PasswordVerif = ({ Password, VerifPassword , name , namev , title , titlev, handleChange , setFormState , formState}) => {

    const [ typePass, setTypePass ] = useState( 'password' );

    const [toggleGenerarPass, setToggleGenerarPass] = useState(false);

    const toggleTypePass = () => {
        if (!toggleGenerarPass) {
            typePass == 'password' ? setTypePass( 'text' ) : setTypePass( 'password' ) ? setTypePass( 'text' ) : setTypePass( 'password' );
        }
    };

    const [prevPassword,setPrevPassword ] = useState('');
    const [prevPasschk,setPrevPasschk ] = useState('');

    useEffect (() => {
        
        if(Password != 'Generada por SATCS')
        {
            setPrevPassword(Password);
        }
        if(VerifPassword != 'Generada por SATCS')
        {
            setPrevPasschk(VerifPassword);
        }
        
        setPasswordPorSatCS(name,namev,'Generada por SATCS', prevPassword, prevPasschk, toggleGenerarPass);
        toggleGenerarPass && typePass === 'text' && setTypePass('password');

    },[toggleGenerarPass]);

    const togglePass = () => {
        setToggleGenerarPass(!toggleGenerarPass);
    };

    const setPasswordPorSatCS = (password,verificacion,valorPorDefecto,prevPassValue,prevVerifValue,toggle) => {

        if (toggle) {
            setFormState({
                ...formState,
                [password]: valorPorDefecto,
                [verificacion]: valorPorDefecto
            });
        } else {
            setFormState({
                ...formState,
                [password]: prevPassValue,
                [verificacion]: prevVerifValue
            });
        }

    } 

    return (
        <>
        <div className='mt-5 mb-3 flex'>
            <label className='input-group'>
                <PasswordComponent   title = {title} value = {Password || ''} name={name} required={true} onChange = {handleChange} toggleTypePass = {toggleTypePass} typePass = {typePass}  toggleGenerarPass = {toggleGenerarPass} />
            </label>

            <label className='input-group'>
                <PasswordComponent  title = {titlev} value = {VerifPassword || ''} name={namev} required={true} onChange = {handleChange} toggleTypePass = {toggleTypePass} typePass = {typePass}  toggleGenerarPass = {toggleGenerarPass} />
            </label>
            <div className="button-fancy" onClick={togglePass} title="Generar Password" > <BsKeyFill style={toggleGenerarPass && { color: "#434ce8" }} /> </div>
        </div>
        </>
    )
}