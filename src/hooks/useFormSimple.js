import { useState,useEffect } from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate, useLocation } from 'react-router-dom';

export const useFormSimple = ( initialForm = {} ) => {
    
    // Auth
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from || '/';

    // use State
    const [ formState, setFormState ] = useState( initialForm );
    const [ StateMessageError, setStateMessageError] = useState('');
    const [ titulo, setTitulo] = useState('Error');

    const [ showModal, setShowModal] = useState(false);

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

    const handleLogIn = ( e ) => {
        e.preventDefault();
        console.log(formState);

        // todo hacerla async
       if(VerifDatos()){
            // adentro de auth.login se validara el usuario y se guardara en el localstorage 
            if (auth.login(formState).length === 0) {
                //todo traer el error de la api y mostrarlo en el modal
                setStateMessageError(auth.message);
                
                //setStateMessageError('Usuario o Password incorrecta.');
                setShowModal(true);
                return false;
            }         
            
            navigate(redirectPath, { replace: true }); 
            return true;
       }

        return false;

    }

    const VerifDatos = () => {

        const isValid = Object.keys( formState ).every( key => 
            validateInput( formState[ key ] , key )
        );

        if(!isValid) {
            setShowModal(true);
        }
        
        return isValid;
    }

    const validateInput = ( value , key ) => {
        setTitulo("Error");
        switch (key) {
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
            default:
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
        handleLogIn,
        handleChange,
        setValue,
        StateMessageError,
        setStateMessageError,
        setTitulo,
        titulo,
    }
}