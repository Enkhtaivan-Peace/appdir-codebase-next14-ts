import FetchApi from "a/common/fetch/fetchCrud"
import { ITodo, TCreateTodo, TDeleteTodo, TEditTodo, TTodoList } from "./_interfaces"
import { generateQuery } from "a/common/fetch/queryGenerator"

const fetchCrud = new FetchApi()
const options = {
    next: { revalidate: true },
}

export const TodoService =  {

    fetchTodos: async (payload:TTodoList) => {
        const thePayload = {
            ...payload,
            fieldName: 'name'
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchCrud.fetchItems<ITodo[]>('/todos' + queryParams)
        return res
    },

    fetchTodoById: async (id:number) => {
        const res = await fetchCrud.fetchItems<ITodo>('/todos/' + id)
        return res
    },

    addTodo: async (data:TCreateTodo) => {
        const res = await fetchCrud.createItem<TCreateTodo>('/todos', data )
        return res;
    },

    editTodo: async (id:number, data:TEditTodo) => {
        const res = await fetchCrud.updateItem<TEditTodo>('/todos/' + id, data )
        return res;
    },

    deleteTodo: async (id:number) => { 
        console.log('todoId:', id)
        const res = await fetchCrud.deleteItem<TDeleteTodo>('/todos', id)
        return res
    }
}
