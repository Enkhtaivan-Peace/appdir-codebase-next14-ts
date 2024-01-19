import { fetchApi } from "../fetch/fetchCrud"


export const authService = {
    login: async (payload:any) => {
        const res = await fetchApi.post('/admins/login', payload)
        return res
    },

    logout: async (payload:any) => { 
        const res = await fetchApi.get('/admins/logout')
        return res
    },

    signUp: async (payload:any) => { 
        console.log('signUp ...')
    }
}