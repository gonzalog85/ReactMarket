import axios from 'axios';
import HttpClient from '../services/HttpClient';

const instancia = axios.create();
instancia.CancelToken = axios.CancelToken;
instancia.isCancel = axios.isCancel;

export const registrarUsuario = (usuario, dispatch) => {
    return new Promise((resolve, eject) => {
        instancia
            .post('/api/usuario/registrar', usuario)
            .then((response) => {
                dispatch({
                    type: 'INICIAR_SESION',
                    sesion: response.data,
                    autenticado: true,
                });
                resolve(response);
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
};

export const loginUsuario = (usuario, dispatch) => {
    return new Promise((resolve, eject) => {
        instancia
            .post('/api/usuario/login', usuario)
            .then((response) => {
                dispatch({
                    type: 'INICIAR_SESION',
                    sesion: response.data,
                    autenticado: true,
                });
                resolve(response);
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
};

export const getUsuario = (dispatch) => {
    return new Promise((resolve, eject) => {
        HttpClient.get('/api/usuario')
            .then((response) => {
                dispatch({
                    type: 'INICIAR_SESION',
                    sesion: response.data,
                    autenticado: true,
                });
                resolve(response);
            })
            .catch((error) => {
                resolve(error.response);
            });
    });
};
