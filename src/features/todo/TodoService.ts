import FetchApi from "a/common/fetch/fetchCrud"
import { ITodo, TCreateTodo, TDeleteTodo, TEditTodo } from "./_interfaces"

const fetchCrud = new FetchApi()
const options = {
    next: { revalidate: true },
}

export const TodoService =  {

    fetchTodos: async () => {
        const res = await fetchCrud.fetchItems<ITodo[]>('/todos?sort=-createdAt')
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
