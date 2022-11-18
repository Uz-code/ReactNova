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
    const [ chkArchivoAdjunto_pk, setChkArchivoAdjunto_pk ] = useState( false );

    const [toggleGenerarPass, setToggleGenerarPass] = useState(false);
    const [toggleGenerarPassc, setToggleGenerarPassc] = useState(false);
    
    const [prevPasswordc,setPrevPasswordc ] = useState('');
    const [prevPasscchk,setPrevPasscchk ] = useState('');

    const [prevPassword,setPrevPassword ] = useState('');
    const [prevPasschk,setPrevPasschk ] = useState('');

    const [ typePassC, setTypePassC ] = useState( 'password' );
    const [ typePass, setTypePass ] = useState( 'password' );

    const [ formState, setFormState ] = useState( initialForm );
    const [ StateMessageError,setStateMessageError ] = useState('');
    const [ title, settitle] = useState('Error');

    const [ utilCadenaConexion,setUtilCadenaConexion ] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [hdnSOAnterior, setHdnSOAnterior] = useState('');

    const [ listLocalizacion, setListLocalizacion ] = useState( [] );

    const [ nombreLocalizacion, SetNombreLocalizacion ] = useState( '' );

    const guardarLocalizacion = ( arr ) => {
        
        if (arr.length > 0) {

            let listId;
            let listNombre;

            if (arr.length > 1) {
               const arrlistId = arr.map( (item) => item.id );
               listId = arrlistId.join(',');

               listNombre = arr.map( (item) => item.name );

            } else {
                listId = arr[0].id;

                listNombre = arr[0].name;

            }


            setListLocalizacion(arr);
            
            SetNombreLocalizacion(listNombre);

            setValue("LocalizacionID", listId.toString()); //  mepa mejor retornar un objeto que un array por ahora safa, todo

        }

        setShowModal(false);

    }

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


    const setValues = ( values ) => {
       
        setFormState({
            ...formState,
            ...values
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

        var objCadenaConexion =  utilCadenaConexion ? setCadenaConexion() : { CadenaConexionUsuario: '' }
        
        setValues({
            ...objCadenaConexion
        });

    },[utilCadenaConexion]);

    useEffect (() => {
        !chkArchivoAdjunto_pk && setValues({ ArchivoAdjunto_pk: '' });
    },[chkArchivoAdjunto_pk]);

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
       
        toggleGenerarPassc && typePassC === 'text' && setTypePassC('password');

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
        toggleGenerarPass && typePass === 'text' && setTypePass('password');

        //toggleGenerarPass && setValues({ Passwordc: 'Generada por SATCS', passcchk: 'Generada por SATCS' });
    },[toggleGenerarPass]);
    
    useEffect( () => {

        var port = setPort();

        setValues({
            ...port
        });

    },[formState.Protocol] );


    useEffect( () => {
        //Metodo con valores por defecto dependiendo del sistema operativo

        var objCadenaConexion = utilCadenaConexion && (setCadenaConexion());
        var objPeriodoCtrlClaveAuto = setTipoPeriodoCtrlClaveAuto();
        var objPort = setPort();
        var objLocalizacionID = {'LocalizacionID': ''};
        SetNombreLocalizacion(''); //Se limpia el nombre de la localizacion
        setListLocalizacion([]); //Se limpia el arreglo de localizaciones

        //Objeto que se agrega al FormState 
        setValues({
            ...objPeriodoCtrlClaveAuto,
            ...objPort,
            ...objCadenaConexion,
            ...objLocalizacionID
        });

        //setHdnSOAnterior(formState.UsrSo);

    },[formState.UsrSo] );
    
    const setTipoPeriodoCtrlClaveAuto = () => {
        var objPeriodoCtrlClaveAuto = {};

        if( formState.UsrSo != undefined){
            if (formState.UsrSo == 63)
            {
                objPeriodoCtrlClaveAuto = { TipoPeriodoCtrlClaveAuto: '0' };
            }
        }
        
        return objPeriodoCtrlClaveAuto;
    }

    const setPort = () => {

        var port = {};
        if(formState.UsrSo != undefined){
            
            if (formState.UsrSo == 7 || formState.UsrSo == 9 || formState.UsrSo == 11 || formState.UsrSo == 13 || formState.UsrSo == 15 || formState.UsrSo == 17  || formState.UsrSo == 41 || formState.UsrSo == 50 || formState.UsrSo == 51 || formState.UsrSo == 20 || formState.UsrSo == 55 || formState.UsrSo == 59)
            {
                if( formState.Protocol === '4' ){
                    port = {
                        'puertoDeConexion': '22'
                    };
                }
                else if( formState.Protocol === '1' ){
                    port = {
                        'puertoDeConexion': '23'
                    };
                }
            }
            else
            {
                if (formState.UsrSo == 1 || formState.UsrSo == 3 || formState.UsrSo == 30 || formState.UsrSo == 99)
				{
                    port = {
                        'puertoDeConexion': '3389'
                    };
				}
				else if (formState.UsrSo == 40 || formState.UsrSo == 50 || formState.UsrSo == 20)
				{
                    port = {
                        'puertoDeConexion': '23'
                    };
				}
				else if (formState.UsrSo == 58)
				{
                    port = {
                        'puertoDeConexion': '3306'
                    };
				}
				else if (formState.UsrSo == 2)
				{
                    port = {
                        'puertoDeConexion': '1433'
                    };
				}
				else if (formState.UsrSo == 64)
				{
                    port = {'puertoDeConexion': '5432'};
				}
				else if (formState.UsrSo == 65)
				{
                    port = {'puertoDeConexion': '27001'};
				}
				else
				{
                    port = {'puertoDeConexion': '22'};
				} 
            }
        }

        return port;
    }
    const setCadenaConexion = () => {
        var objCadenaConexion = {};
        if( formState.UsrSo != undefined){
           
            if (formState.UsrSo == '2')//SQL Server
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Server={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}' };
            }
            else if(formState.UsrSo == '60')//Oracle
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False;' };
            }
            else if(formState.UsrSo == '58')//MySQL Server 
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; Port={SatPortUC}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False;' };
            }
            else if(formState.UsrSo == '57')//SAP Ase
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False; Charset=iso_1;' };
            }
            else if(formState.UsrSo == '64')//PosgreSQL
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Server={SatUsrLocalizacion}; Port={SatPortUC}; UID={SatUsr}; PWD="{OldPass}"; DB=postgres; Pooling=False;' };
            }
            else if(formState.UsrSo == '65')//MongoDB
            {   
                objCadenaConexion = { CadenaConexionUsuario: 'mongodb://{SatUsr}:{OldPass}@{SatUsrLocalizacion}:{SatPortUC}/{SatUsrDB}?maxPoolSize=1&maxIdleTime=20s&connectTimeout=10s&waitQueueTimeout=10s&serverSelectionTimeout=10s' };
            }
            else
            {
                objCadenaConexion = { CadenaConexionUsuario: '' };
            }
        }

        return objCadenaConexion;
    }


    const handleClear = ( e ) => {
        e.preventDefault();
        setFormState( initialForm );
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
                
                //setStateMessageError('Usuario o Password incorrecta.');
                setStateMessageError(auth.message);
                settitle();
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
        settitle("Error");

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
            case 'NombreBD':
                if ( formState.UsrSo == 65 ) {
                    if( !ValidarLength( value , "NombreBD", null, 200 ) ){
                        return false;
                    }
                }
                break;
            case 'CadenaConexionUsuario':
                if(utilCadenaConexion && (formState.UsrSo == 2 || formState.UsrSo == 60 || formState.UsrSo == 58 || formState.UsrSo == 57 || formState.UsrSo == 64 || formState.UsrSo == 65)){
                    if( !ValidarLength( value , "Cadena de Conexion", null, 4000 ) ){
                        return false;
                    }
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
                
                if(formState.UsrSo == 61 || formState.UsrSo == 62 || formState.UsrSo == 56){
                    if(formState.LocalizacionID == undefined || formState.LocalizacionID == null || formState.LocalizacionID == '')
                    {
                        setStateMessageError('Debe seleccionar una Localizacion');
                        return false;
                    }
                }
                else
                {
                    if( !ValidarLength( value , "Localizacion", null, 200 ) ){
                        return false;
                    }
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
        nombreLocalizacion, SetNombreLocalizacion,
        setShowModal,
        showModal,
        handleChange,
        handleSubmit,
        handleLogIn,
        handleClear,
        guardarLocalizacion,
        setValue,
        StateMessageError,
        setStateMessageError,
        title,
        toggleGenerarPass, setToggleGenerarPass,
        toggleGenerarPassc, setToggleGenerarPassc,
        typePassC, setTypePassC,
        typePass, setTypePass,
        chkArchivoAdjunto_pk, setChkArchivoAdjunto_pk,
        utilCadenaConexion, setUtilCadenaConexion,
        listLocalizacion, setListLocalizacion,
        
    }
}