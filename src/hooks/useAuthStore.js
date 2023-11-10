import { useDispatch, useSelector } from 'react-redux';
import { modularApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await modularApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {

            dispatch(onLogout('Las credenciales ingresadas son incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }

    }

    const startRegister = async ({ email, password, name }) => {

        dispatch(onChecking());

        try {

            const { data } = await modularApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {

            dispatch(onLogout(error.response.data.msg || 'Ah ocurrido un error'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);

        }

    }


    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await modularApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {

            localStorage.clear();
            dispatch(onLogout());

        }

    }


    const startLogOut = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {

        // Propiedades
        user,
        status,
        errorMessage,

        //Metodos
        startLogin,
        startLogOut,
        startRegister,
        checkAuthToken,


    }

}


