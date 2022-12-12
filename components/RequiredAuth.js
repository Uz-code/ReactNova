import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/Auth';

export const RequiredAuth = ( { children } ) => {
    const auth = useAuth();
    const location = useLocation();
    // TODO Verificar si el nivel de usuario permite ver esta pagina actualç
    if (!auth.user) {
        return (
            <Navigate to={{ pathname: '/LogIn' }} 
            state = {{ from: location.pathname , message: auth.message, title: auth.title}} />
        );
    }

    return children;

};
