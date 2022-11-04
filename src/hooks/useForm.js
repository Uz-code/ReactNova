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
    const [ formState, setFormState ] = useState( initialForm );
    const [ StateMessageError,setStateMessageError ] = useState('');
    const [showModal, setShowModal] = useState(false);
    
    //Handlers
    const handleChange = ( e ) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [ name ]: value
        });
    } 

    const setValue = ( name, value ) => {
       
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 
    
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
        
       if(validateForm()){ 

            SubmitForm(formState);
       }
    
    }
    const handleLogIn = ( e ) => {
        e.preventDefault();
        // todo hacerla async
       if(validateForm()){
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
        console.log(formState);
    }
    
    const validateForm = () => {

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
                if( !ValidarLength( value , "Contraseña", null, 20 ) ){
                    return false;
                }
                break;
            case 'localizacion':
                if ( value === '' ) {
                    setStateMessageError('Nombre no puede estar vacio');
                    return false;
                }
                break;
            case 'description':
                if ( value === '' ) {
                    setStateMessageError('Descripcion no puede estar vacio');
                    return false;
                }
                break;
            case 'vpassword':
                if(!validateConfirmPassword( value ) ){
                    return false;
                }
                if(!ValidarLength( value , "Contraseña", null, 20 ) ){
                    return false;
                }
                break;
            default:
                return true;
                break;
        }

        return true;
    }

    const validatePassword = ( value ) => {

        const isValid = value.length >= 6;
        if (!isValid) {
            setStateMessageError('La contraseña debe tener al menos 6 caracteres');
        }
        return isValid;

    }

    const validateConfirmPassword = ( value ) => {
        const isValid = (value === formState.password);
        if (!isValid) {
            setStateMessageError('Las contraseña no coincide con su verificacion');
        }   
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

        return value.length > 0;

    }

    const ValidarNumeroLimites = ( value , name, min , max ) => {

        if (!isNumeric(value)) {
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
        
        return true;
    }

    const isNumeric = ( value ) => {
        return /^\d+$/.test( value );
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
        setStateMessageError
    }
}