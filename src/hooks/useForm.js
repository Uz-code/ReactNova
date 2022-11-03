import { useState,useEffect } from 'react';

export const useForm = ( initialForm = {} ) => {
  
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

    const handleSubmitData = ( name, value ) => {
       
        setFormState({
            ...formState,
            [ name ]: value
        });
    } 
    
    useEffect( () => {

        if (formState.UsrSo === '11')
        {
           
            if( formState.Protocol === '4' ){
                handleSubmitData('puertoDeConexion','22');
            }
            else if( formState.Protocol === '1' ){
                handleSubmitData('puertoDeConexion','23');
            }
        }
        else
        {
            handleSubmitData('puertoDeConexion','3840');
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
            return true;
       }
    
       setShowModal(true);

        return false;

    }

    const SubmitForm = (formState) => {
        console.log(formState);
    }
    
    const validateForm = () => {

        const isValid = Object.keys( formState ).every( key => 
            validateInput( formState[ key ] , key )
        );

        return isValid;
    }


    const validateInput = ( value , key ) => {
        
        if (key === "username") {
           if( !ValidarLength( value , "Nombre de Usuario", 0, 6 ) ){
                return false;
           }
        }
        /*if (key === "email") {
        
            return validateEmail( value );
        }*/
        if (key === "password") {
          
            return validatePassword( value );
        }
     
        if (key === "vpassword") {
          
            return validateConfirmPassword( value );
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
            setStateMessageError('Las contraseñas no coinciden');
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

    const ChkNotNull = ( value , name ) => {

        const isValid = value.length > 0;
        if ( !isValid ) {
            setStateMessageError(`El campo ${ name } no puede estar vacío`);
        }

        return isValid;

    }

    const ValidarNumeroLimites = ( value , name, min , max ) => {

        const isNumeric = /^\d+$/.test( value );
        if ( !isNumeric ) {
            setStateMessageError(`El campo ${ name } debe ser un número`);
            return false;
        }
        
        const isValid = ( value >= min && value <= max );
        if ( !isValid ) {
            setStateMessageError(`El valor de ${name} debe estar entre ${min} y ${max}`);
        }

        return isValid;

    }

    const ValidarLength = ( value , name, min, max) => {

        var isValid = ChkNotNull( value , name );
        
        if (!isValid) {
            return false;
        }

        isValid = ( value.length >= min && value.length <= max );
       
        if (!isValid) {
            setStateMessageError(`El campo ${ name } debe tener entre ${min} y ${max} caracteres`);
        }

        return isValid;
    }

    

    return {
        ...formState,
        formState,
        setShowModal,
        showModal,
        handleChange,
        handleSubmit,
        handleClear,
        handleSubmitData,
        StateMessageError,
        setStateMessageError
    }
}