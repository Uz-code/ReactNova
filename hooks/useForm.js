import { useState,useEffect } from 'react';
import { useAuth } from '../components/Auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { DialogHook } from './DialogHook';

export const useForm = ( initialForm = {} ) => {
    
    // tipo de modal 1 alerta 
    const [ typeModal, setTypeModal ] = useState( 1 );

    // Auth
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.from || '/';

    //
    const { dialog, setDialog } = DialogHook ( { title: '', message: '' } );

    // use State
    const [ chkArchivoAdjunto_pk, setChkArchivoAdjunto_pk ] = useState( false );


    /* XD Strings booleanos TODO ver que hacer con esto, cosas de SAT*/
    const LogOpenHabilitadaStr = "true";
    const LogWinHabilitadaStr = "true";
    const LogISeriesHabilitadaStr = "true";
    const LogCommHabilitadaStr = "true";
    const LogBDHabilitadaStr = "true";
    const LogZSeriesHabilitadaStr = "true";
    const LogAppWinHabilitadaStr = "true";
    const LogAppWebHabilitadaStr = "true";
    /*  */
    
    const [ LoggingSesionHabilitado, setLoggingSesionHabilitado ] = useState( true );

    const [ formState, setFormState ] = useState( initialForm );

    const [ StateMessageError,setStateMessageError ] = useState('');
    const [ title, setTitle] = useState('Error');

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

    useEffect (() => {

        setearCadenaDeConexionPorDefecto();

    },[utilCadenaConexion]);

    const setearCadenaDeConexionPorDefecto = ( ) => {

        var objCadenaConexion =  utilCadenaConexion ? (formState.CadenaConexionUsuario == '' && setCadenaConexion()) : { CadenaConexionUsuario: '' }
            
        setValues({
            ...objCadenaConexion
        });

    }

    useEffect (() => {

        formState.CadenaConexionUsuario != '' && setUtilCadenaConexion(true);

    },[formState.CadenaConexionUsuario]);

    useEffect (() => {
        !chkArchivoAdjunto_pk && setValues({ ArchivoAdjunto_pk: '' });
    },[chkArchivoAdjunto_pk]);

    useEffect( () => {

        var port = setPort();

        setValues({
            ...port
        });

    },[formState.ProtocoloConexion] );


    useEffect( () => {

    setLoggingSesionHabilitado(false); 

    if (LogAppWinHabilitadaStr == "true" || LogAppWebHabilitadaStr || "true") {
        setLoggingSesionHabilitado(true); 
    }else if((formState.Plataforma == "7" || formState.Plataforma == "9" || formState.Plataforma == "11" || formState.Plataforma == "13" || formState.Plataforma == "15" || formState.Plataforma == "17") &&
    (LogOpenHabilitadaStr == "true") || 
    (formState.Plataforma == "1" || formState.Plataforma == "3" || formState.Plataforma == "30" || formState.Plataforma == "99") &&
    (LogWinHabilitadaStr == "true") || 
    (formState.Plataforma == "20") &&
    (LogISeriesHabilitadaStr == "true") || 
    (formState.Plataforma == "50" || formState.Plataforma == "51" || formState.Plataforma == "40" || formState.Plataforma == "41") &&
    (LogCommHabilitadaStr == "true") || 
    (formState.Plataforma == "2" || formState.Plataforma == "60" || formState.Plataforma == "57" || formState.Plataforma == "58") &&
    (LogBDHabilitadaStr == "true") || 
    (formState.Plataforma == "19" || formState.Plataforma == "21" || formState.Plataforma == "191") &&
    (LogZSeriesHabilitadaStr == "true"))
    {
        setLoggingSesionHabilitado(true); 
    }

        //Metodo con valores por defecto dependiendo del sistema operativo

        var objCadenaConexion = utilCadenaConexion && (setCadenaConexion());
        var objPeriodoCtrlClaveAuto = setTipoPeriodoCtrlClaveAuto();
        var objPort = setPort();
        var objLocalizacionID = {'LocalizacionID': ''};
        SetNombreLocalizacion(''); //Se limpia el nombre de la Localizacion
        setListLocalizacion([]); //Se limpia el arreglo de localizaciones

        //Objeto que se agrega al FormState 
        setValues({
            ...objPeriodoCtrlClaveAuto,
            ...objPort,
            ...objCadenaConexion,
            ...objLocalizacionID
        });

        //setHdnSOAnterior(formState.Plataforma);

    },[formState.Plataforma] );
    
    const setTipoPeriodoCtrlClaveAuto = () => {
        var objPeriodoCtrlClaveAuto = {};

        if( formState.Plataforma != undefined){
            if (formState.Plataforma == 63)
            {
                objPeriodoCtrlClaveAuto = { TipoPeriodoCtrlClaveAuto: '0' };
            }
        }
        
        return objPeriodoCtrlClaveAuto;
    }

    const setPort = () => {

        var port = {};
        if(formState.Plataforma != undefined){
            
            if (formState.Plataforma == 7 || formState.Plataforma == 9 || formState.Plataforma == 11 || formState.Plataforma == 13 || formState.Plataforma == 15 || formState.Plataforma == 17  || formState.Plataforma == 41 || formState.Plataforma == 50 || formState.Plataforma == 51 || formState.Plataforma == 20 || formState.Plataforma == 55 || formState.Plataforma == 59)
            {
                if( formState.ProtocoloConexion === '4' ){
                    port = {
                        'PuertoConexion': '22'
                    };
                }
                else if( formState.ProtocoloConexion === '1' ){
                    port = {
                        'PuertoConexion': '23'
                    };
                }
            }
            else
            {
                if (formState.Plataforma == 1 || formState.Plataforma == 3 || formState.Plataforma == 30 || formState.Plataforma == 99)
				{
                    port = {
                        'PuertoConexion': '3389'
                    };
				}
				else if (formState.Plataforma == 40 || formState.Plataforma == 50 || formState.Plataforma == 20)
				{
                    port = {
                        'PuertoConexion': '23'
                    };
				}
				else if (formState.Plataforma == 58)
				{
                    port = {
                        'PuertoConexion': '3306'
                    };
				}
				else if (formState.Plataforma == 2)
				{
                    port = {
                        'PuertoConexion': '1433'
                    };
				}
				else if (formState.Plataforma == 64)
				{
                    port = {'PuertoConexion': '5432'};
				}
				else if (formState.Plataforma == 65)
				{
                    port = {'PuertoConexion': '27001'};
				}
				else
				{
                    port = {'PuertoConexion': '22'};
				} 
            }
        }

        return port;
    }
    
    const setCadenaConexion = () => {
        var objCadenaConexion = {};
        if( formState.Plataforma != undefined){
           
            if (formState.Plataforma == '2')//SQL Server
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Server={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}' };
            }
            else if(formState.Plataforma == '60')//Oracle
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False;' };
            }
            else if(formState.Plataforma == '58')//MySQL Server 
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; Port={SatPortUC}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False;' };
            }
            else if(formState.Plataforma == '57')//SAP Ase
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Data Source={SatUsrLocalizacion}; User ID={SatUsr}; Password="{OldPass}"; Pooling=False; Charset=iso_1;' };
            }
            else if(formState.Plataforma == '64')//PosgreSQL
            {
                objCadenaConexion = { CadenaConexionUsuario: 'Server={SatUsrLocalizacion}; Port={SatPortUC}; UID={SatUsr}; PWD="{OldPass}"; DB=postgres; Pooling=False;' };
            }
            else if(formState.Plataforma == '65')//MongoDB
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
    const SubmitForm = (formState) => {
        console.log("Formulario: ",formState);

        /* TODO: Que haga el submit a la api xD */

        setShowModal(true);
        setDialog( { title: "(DEVELOPER OPTION)", message: 'Submit exitoso, desea navegar a la pantalla anterior? (el resultado esta en consola)', AcceptHandler: () => navigate('/TablaFetchData') , CancelHandler: () => setShowModal(false) } );
    }
    
    const VerifDatos = () => {

        setTitle("Error");
        const isValid = Object.keys( formState ).every( key => 
            validateInput( formState[ key ] , key )
        );

        if(!isValid) {

            setShowModal(true);
            setTypeModal(1);

        }
        
        return isValid;
    }


    const validateInput = ( value , key ) => {
        /* Todo despues de las vacaciones cambiar el switch por un if , era mas rapido pero despues hay que hacerlo bien y ordenado */
        switch (key) {
            case 'Nombre':
                if( !ValidarLength( value , "Nombre de Usuario", null, 30 ) ){
                    return false;
               }
                break;
            case 'Password':
                    if( !ValidarLength( value , "Contraseña", null, 128 ) ){
                        return false;
                    }
                break;
            case 'VerifPassword':
                    if(!ValidarLength( value , "Verificacion Contraseña", null, 128 ) ){
                        return false;
                    }
                    if(!ValidarEquidad(formState.Password ,formState.VerifPassword,'')){
                        setStateMessageError('La contraseña no coincide con su verificacion');
                        return false;
                    }
                break;
            case 'PasswordAdicional':
                    return ValidarLength( value , "Contraseña Combinada", null, 128 , false);
            case 'VerifPasswordAdicional':
                    if(!ValidarLength( value , "Verificacion Contraseña Combinada", null, 128, false ) ){
                        return false;
                    }
                    if(!ValidarEquidad(formState.PasswordAdicional ,formState.VerifPasswordAdicional )){
                        setStateMessageError('La contraseña combinada no coincide con su verificacion');
                        return false;
                    }
                break;
                case 'ProtocoloConexion':
                    if ( value === '' ) {
                        setStateMessageError('Protocolo no puede estar vacio');
                        return false;
                    }
                    break;
                case 'DefaultShell':
                    return ValidarLength( value , "Shell por Defecto", null, 30, false );
                case 'ServidorX11':
                    return ValidarLength( value , "Servidor X11", null, 30 , false);
                case 'SatPromptUC':
                        return ValidarLength( value , "Prompt de Usuario" , null, 30, false );
                case 'PuertoConexion':
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
                    if ( formState.Plataforma == 65 ) {
                        return ValidarLength( value , "NombreBD", null, 200 );
                    }
                    break;
                case 'CadenaConexionUsuario':
                    if(utilCadenaConexion && (formState.Plataforma == 2 || formState.Plataforma == 60 || formState.Plataforma == 58 || formState.Plataforma == 57 || formState.Plataforma == 64 || formState.Plataforma == 65)){
    
                        if (!ChkNotNull( value )) {
                            
                            let AcceptHandler = ( ) => {
                                setearCadenaDeConexionPorDefecto();
                                setShowModal(false);
                            }
                            
                            setDialog( { title: "Error! ☠️", message: 'El campo Cadena de Conexion se encuentra vacío, Desea dejar la cadena de conexión por defecto?', AcceptHandler: () => AcceptHandler() , CancelHandler: () => setShowModal(false) } );
                            
                            return false;
                        }
                            
                        return ValidarLength( value , "Cadena de Conexion", null, 4000 );
                    }
                    break;
       
            case 'AWS_AccessKeyID':
                if ( formState.Plataforma == 63 ) {
                    if (!ValidarLength( value, "ID Clave de Acceso", null, 30, true )) {
                        return false;
                    }                }
                break;
            case 'AWS_SecretAccessKey':
                if ( formState.Plataforma == 63 ) {
                    if (!ValidarLength( value, "Clave de Acceso Secreta", null, 30, true )) {
                        return false;
                    }
                }
                break;
            case 'AWS_AcountID':
                if ( formState.Plataforma == 63 ) {
                    if (!ValidarLength( value, "ID o Alias", null, 30, true )) {
                        return false;
                    }
                }
                break;
            case 'SegundosScreenshot':
                if (!ValidarLength( value , "Segundos Screenshot", null, 128, true )){
                    return false;
                }
                if (!ValidarNumeroLimites( value , "Segundos Screenshot", 0, 65535 )){
                    return false;
                }
                break;
            case 'Localizacion':
                
                if(formState.Plataforma == 61 || formState.Plataforma == 62 || formState.Plataforma == 56){
                    if(formState.LocalizacionID == undefined || formState.LocalizacionID == null || formState.LocalizacionID == '')
                    {
                        setStateMessageError('Debe seleccionar una Localizacion Valida');
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
            case 'Descripcion':
                return ValidarLength( value , "Descripcion", null, 128, true );
            default:
                return true;
        }

        return true;
    }

    const ValidarEquidad = ( password,verificacion ) => {
        return (password === verificacion);;
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

    const ValidarLength = ( value, name, min, max, required = true) => {
      
        if(value == null) {value = ''};

        try {
            if (required){
                if (!ChkNotNull( value )) {
                    setStateMessageError(`El campo ${ name } no puede estar vacío`);
                    return false;
                }
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
            setStateMessageError(`Error desconocido validando el Largo del elemento ${ name }`);
            return false;   
        }
        
        return true;
    }

    return {
        ...formState,
        formState,
        setFormState,
        LoggingSesionHabilitado,
        nombreLocalizacion, SetNombreLocalizacion,
        setShowModal,
        showModal,
        handleChange,
        handleSubmit,
        handleClear,
        guardarLocalizacion,
        setValue,
        setValues,
        StateMessageError,
        setStateMessageError,
        title,setTitle ,
        chkArchivoAdjunto_pk, setChkArchivoAdjunto_pk,
        utilCadenaConexion, setUtilCadenaConexion,
        listLocalizacion, setListLocalizacion,
        dialog,setDialog
    }
}