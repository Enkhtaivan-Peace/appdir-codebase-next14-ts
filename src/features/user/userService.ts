import { fetchApi } from "a/common/fetch/fetchCrud"
import { IUser, TCreateUser, TDeleteUser, TEditUser } from "./_interfaces"
import { generateQuery } from "a/common/fetch/queryGenerator"

const options = {
    next: { revalidate: true },
}

const user = 'users'

export const userService = {

    fetchUsers: async (payload:TListReq, token:string) => {
        const thePayload = {
            ...payload,
            fieldName: 'name'
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchApi.get<IUser[]>(`/${user}` + queryParams, token)
        return res
    },

    fetchUserById: async (id:number) => {
        const res = await fetchApi.get<IUser>(`/${user}/` + id)
        return res
    },

    addUser: async (data:TCreateUser) => {
        const res = await fetchApi.post<TCreateUser>(`/${user}`, data )
        return res;
    },

    editUser: async (id:number, data:TEditUser) => {
        const res = await fetchApi.put<TEditUser>(`/${user}/` + id, data )
        return res;
    },

    deleteUser: async (id:number) => { 
        console.log('todoId:', id)
        const res = await fetchApi.delete<TDeleteUser>(`/${user}`, id)
        return res
    },
}
