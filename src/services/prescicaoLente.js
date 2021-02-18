import { http } from './config'


export default {
    save: (prescricao) => {
        const dados = {
            data: {
                ...prescricao
            }
        }
        if (dados.data.idPaciente === -1) {
            return "erro"
        } else {
            return http.post('prescricao/lente', {...prescricao})
        }
    },
    read: (uuid) => {
        return http.get(`prescricao/lente/${uuid}`)
    },

    delete: (uuid) => {
        return http.delete(`prescricao/lente/${uuid}`)
    },

    update: (prescricao, uuid) => {
       
        return http.put(`prescricao/lente/${uuid}`, {...prescricao})
      },
}