import { fetchApi } from "a/common/fetch/fetchCrud"
import { IUser, TCreateUser, TDeleteUser, TEditUser } from "./_interfaces"
import { generateQuery } from "a/common/fetch/queryGenerator"

const options = {
    next: { revalidate: true },
}

const user = 'users'

export const userService =  {

    fetchUsers: async (payload:TListReq) => {
        const thePayload = {
            ...payload,
            fieldName: 'name'
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchApi.fetchItems<IUser[]>(`/${user}` + queryParams)
        return res
    },

    fetchUserById: async (id:number) => {
        const res = await fetchApi.fetchItems<IUser>(`/${user}/` + id)
        return res
    },

    addUser: async (data:TCreateUser) => {
        const res = await fetchApi.createItem<TCreateUser>(`/${user}`, data )
        return res;
    },

    editUser: async (id:number, data:TEditUser) => {
        const res = await fetchApi.updateItem<TEditUser>(`/${user}/` + id, data )
        return res;
    },

    deleteUser: async (id:number) => { 
        console.log('todoId:', id)
        const res = await fetchApi.deleteItem<TDeleteUser>(`/${user}`, id)
        return res
    },
}
