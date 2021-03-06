import { http } from './config'

export default {
    save: (data) => {
        return http.post('Consulta/Save', data)
    },

    edit: (data, idFichaClinica) => {
        return http.post(`Consulta/Update/${idFichaClinica}`, data)
    },

    list: (idPaciente) => {
        return http.get(`Consulta/Read/${idPaciente}`)
    },

    read: (uuid) => {
        return http.get(`fichaClinica/${uuid}`)
    },

    enviarAnamnese: (data) => {
        var dados = [];
        Object.keys(data.data.retorno[0]).forEach((item) => {
            if (data.data.retorno[0][item] != null) {
                dados.push(item)
            }
        });
        
        return dados;

    },

    delet: (idFichaClinica) => {
        return http.delete(`Consulta/Delete/${idFichaClinica}`)
    }
} 