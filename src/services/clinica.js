import { http } from './config'


export default {
    read: () =>{
        return http.get(`/Clinica/read`)
    }, 

    save: (data) =>{
        return http.post(`/Clinica/`, {...data})
    },

    update(data, uuid){
        return http.put(`/Clinica/${uuid}`, data)
    }, 
    
    saveLogo : (logo, uuid) =>{
        return http.post(`/Clinica/logo/${uuid}`, {logo})
    },

    readLogo: () =>{
        return http.get(`/Clinica/image/logo`)
    }
}