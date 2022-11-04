import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../components/Auth';


export const RequiredAuth = ( { children } ) => {
    const auth = useAuth();
    const location = useLocation();
    // TODO Verificar si el nivel de usuario permite ver esta pagina actual
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
        return (
            <Navigate to={{ pathname: '/LogIn' }} 
            state = {{ from: location.pathname }} />
        );
    }

    return children;

};
