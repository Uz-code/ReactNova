import { useState,useEffect } from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate, useLocation } from 'react-router-dom';

export const useForm = ( initialForm = {} ) => {
    
    // Auth
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from || '/';

    // use State
    const [toggleGenerarPass, setToggleGenerarPass] = useState(false);
    const [toggleGenerarPassc, setToggleGenerarPassc] = useState(false);
    
    const [prevPasswordc,setPrevPasswordc ] = useState('');
    const [prevPasscchk,setPrevPasscchk ] = useState('');

    const [prevPassword,setPrevPassword ] = useState('');
    const [prevPasschk,setPrevPasschk ] = useState('');


    const [ formState, setFormState ] = useState( initialForm );
    const [ StateMessageError,setStateMessageError ] = useState('');
    const [ titulo, setTitulo] = useState('Error');

    const [showModal, setShowModal] = useState(false);

    //Handlers
    const handleChange = ( e ) => {

        if(e.target.type === 'checkbox'){
            const { name, checked } = e.target;
            setValue( name, checked );
        }else{
            const { name, value } = e.target;
            setValue( name, value );
        }
    } 

    const setValue = ( name, value ) => {
       
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 

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

    useEffect (() => {
        if(formState.Passwordc != 'Generada por SATCS')
        {
            setPrevPasswordc(formState.Passwordc);
        }
        if(formState.Passchk != 'Generada por SATCS')
        {
            setPrevPasscchk(formState.passcchk);
        }

        setPasswordPorSatCS('Passwordc','passcchk','Generada por SATCS', prevPasswordc , prevPasscchk, toggleGenerarPassc);
    },[toggleGenerarPassc]);

    useEffect (() => {
        if(formState.Password != 'Generada por SATCS')
        {
            setPrevPassword(formState.Password);
        }
        if(formState.passchk != 'Generada por SATCS')
        {
            setPrevPasschk(formState.passchk);
        }
        setPasswordPorSatCS('Password','passchk','Generada por SATCS', prevPassword, prevPasschk, toggleGenerarPass);
    },[toggleGenerarPass]);
    
    useEffect( () => {

        if( formState.UsrSo != undefined){
            if (formState.UsrSo === '11')
            {
                if( formState.Protocol === '4' ){
                    setValue('puertoDeConexion','22');
                }
                else if( formState.Protocol === '1' ){
                    setValue('puertoDeConexion','23');
                }
            }
            else
            {
                setValue('puertoDeConexion','3840');
            }
        }

    },[formState.Protocol,formState.UsrSo] );
    
    const handleClear = ( e ) => {
        e.preventDefault();
        setFormState( initialForm );
        //setStateMessageError('');
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        
       if(VerifDatos()){ 
            SubmitForm(formState);
       }
    
    }
    const handleLogIn = ( e ) => {
        e.preventDefault();
        console.log(formState);

        // todo hacerla async
       if(VerifDatos()){
            // adentro de auth.login se validara el usuario y se guardara en el localstorage 
            if (auth.login(formState).length === 0) {
                //todo traer el error de la api y mostrarlo en el modal
                setStateMessageError('Usuario o Password incorrecta.');
                setShowModal(true);
                return false;
            }         
            
            navigate(redirectPath, { replace: true }); 
            return true;
       }

        return false;

    }

    const SubmitForm = (formState) => {
        alert("submit ok.");
        console.log(formState);
    }
    
    const VerifDatos = () => {
        setTitulo("Error");

        const isValid = Object.keys( formState ).every( key => 
            validateInput( formState[ key ] , key )
        );

        if(!isValid) {
            setShowModal(true);
        }
        
        return isValid;
    }


    const validateInput = ( value , key ) => {
        
        switch (key) {
            case 'Protocol':
                if ( value === '' ) {
                    setStateMessageError('Protocolo no puede estar vacio');
                    return false;
                }
                break;
            case 'UsrSo':
                if ( value === '' ) {
                    setStateMessageError('Sistema Operativo no puede estar vacio');
                    return false;
                }
                break;
            case 'puertoDeConexion':
                if(!ChkNotNull(value)){
                    setStateMessageError('Puerto de Conexion no puede estar vacio');
                    return false;
                }
                if (!ValidarNumeroLimites( value , "Puerto de Conexion", 0, 65535 )){
                    return false;
                }
                break;
            case 'ip':
                if ( value === '' ) {
                    setStateMessageError('IP no puede estar vacio');
                    return false;
                }
                break;
            case 'username':
                if( !ValidarLength( value , "Nombre de Usuario", null, 30 ) ){
                    return false;
               }
                break;
            case 'password':
                if( !ValidarLength( value , "Contraseña", null, 128 ) ){
                    return false;
                }
                break;
            case 'Password':
                if(!toggleGenerarPass) {
                    if( !ValidarLength( value , "Contraseña", null, 128 ) ){
                        return false;
                    }
                }
                break;
            case 'passchk':
                if(!toggleGenerarPass) {
                    if(!ValidarLength( value , "Verificacion Contraseña", null, 128 ) ){
                        return false;
                    }
                    if(!ValidarEquidad(formState.Password ,formState.passchk,'')){
                        setStateMessageError('La contraseña no coincide con su verificacion');
                        return false;
                    }
                }
                break;
            case 'Passwordc':
                if(!toggleGenerarPassc) {
                    if( !ValidarLength( value , "Contraseña Combinada", null, 128 ) ){
                        return false;
                    }
                }
                break;
            case 'passcchk':
                if(!toggleGenerarPassc) {
                    if(!ValidarLength( value , "Verificacion Contraseña Combinada", null, 128 ) ){
                        return false;
                    }
                    if(!ValidarEquidad(formState.Passwordc ,formState.passcchk)){
                        setStateMessageError('La contraseña combinada no coincide con su verificacion');
                        return false;
                    }
                }
                break;
            case 'localizacion':
                if ( value === '' ) {
                    setStateMessageError('localizacion no puede estar vacio');
                    return false;
                }
                break;
            case 'description':
                if ( value === '' ) {
                    setStateMessageError('Descripcion no puede estar vacio');
                    return false;
                }
                break;
            default:
                return true;
                break;
        }

        return true;
    }

    const ValidarEquidad = ( password,verificacion ) => {
        const isValid = (password === verificacion);
     
        return isValid;
    }

    const validateEmail = ( value ) => {

        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( value );
        if ( !isValid ) {
            setStateMessageError('El correo no es válido');
        }

        return isValid;

    }

    const ChkNotNull = ( value ) => {
        //check if value is not null or empty 
        const isValid = (value !== null && value !== '');

        return isValid;

    }

    const ValidarNumeroLimites = ( value , name, min , max ) => {

        if (isNaN(value)) {
            setStateMessageError(`El campo ${ name } debe ser un número`);
            return false;
        }

        // if max is null or min is null, do someting else 
        if ( max === null || min === null ) {
          
            if ( max === null ) { // if max is null, only check min
                if ( value < min ) {
                    setStateMessageError(`El campo ${ name } debe ser mayor o igual a ${ min }`);
                    return false;
                }
            }

            if ( min === null ) { // if min is null, only check max
                if ( value > max ) {
                    setStateMessageError(`El campo ${ name } debe ser menor o igual a ${ max }`);
                    return false;
                }
            }

        }else { // if max and min are not null, check both
            if ( value < min || value > max ) {
                setStateMessageError(`El campo ${ name } debe estar entre ${ min } y ${ max }`);
                return false;
            }
        }

        return true;
    }

    const ValidarLength = ( value , name, min, max) => {

        try {
            if (!ChkNotNull( value )) {
                setStateMessageError(`El campo ${ name } no puede estar vacío`);
                return false;
            }
    
            if( min == null || max == null ){
                if( max == null ){
                    if( value.length < min ){
                        setStateMessageError(`El campo ${ name } debe tener al menos ${ min } caracteres`);
                        return false;
                    }
                }
                if( min == null ){
                    if( value.length > max ){
                        setStateMessageError(`El campo ${ name } debe tener menos de ${ max } caracteres`);
                        return false;
                    }
                }
            }else{
                if( value.length < min || value.length > max ){
                    setStateMessageError(`El campo ${ name } debe tener entre ${ min } y ${ max } caracteres`);
                    return false;
                }
            }
        } catch (error) {
            setStateMessageError(`Error desconocido validando el Largo del elemento.`);
            return false;   
        }
        
        return true;
    }

    return {
        ...formState,
        formState,
        setShowModal,
        showModal,
        handleChange,
        handleSubmit,
        handleLogIn,
        handleClear,
        setValue,
        StateMessageError,
        setStateMessageError,
        titulo,
        toggleGenerarPass, setToggleGenerarPass,
        toggleGenerarPassc, setToggleGenerarPassc,
    }
}