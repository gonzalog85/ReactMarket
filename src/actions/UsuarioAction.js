import HttpClient from '../services/HttpClient'

export const registrarUsuario = usuario => {
    return new Promise((resolve, reject) => {
        HttpClient.post('/api/usuario/registrar', usuario).then(response => {
            resolve(response);
        })
            .catch((error) => {
                resolve(error.response);
            })
    });
}