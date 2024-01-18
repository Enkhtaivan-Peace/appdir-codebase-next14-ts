import { fetchApi } from "a/common/fetch/fetchCrud"
import { ITodo, TCreateTodo, TDeleteTodo, TEditTodo } from "./_interfaces"
import { generateQuery } from "a/common/fetch/queryGenerator"

const options = {
    next: { revalidate: true },
}

export const TodoService =  {

    fetchTodos: async (payload:TListReq) => {
        const thePayload = {
            ...payload,
            fieldName: 'name'
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchApi.fetchItems<ITodo[]>('/todos' + queryParams)
        return res
    },

    fetchTodoById: async (id:number) => {
        const res = await fetchApi.fetchItems<ITodo>('/todos/' + id)
        return res
    },

    addTodo: async (data:TCreateTodo) => {
        const res = await fetchApi.createItem<TCreateTodo>('/todos', data )
        return res;
    },

    editTodo: async (id:number, data:TEditTodo) => {
        const res = await fetchApi.updateItem<TEditTodo>('/todos/' + id, data )
        return res;
    },

    deleteTodo: async (id:number) => { 
        console.log('todoId:', id)
        const res = await fetchApi.deleteItem<TDeleteTodo>('/todos', id)
        return res
    },

    createTodoInvoice: async (formData:FormData) => {
        const rawFormData = {
            userId: formData.get('userId'),
            todoId: formData.get('todo'),
            amount: formData.get('amount'),
            status: 'in progress',
        }
        console.log('rawData', rawFormData)
        // const rawFormData = Object.fromEntries(formData.entries())
    }
}
