import FetchApi from "a/common/fetch/fetchCrud"
import { ITodo, TCreateTodo, TDeleteTodo } from "./_interfaces"

const fetchCrud = new FetchApi()
const options = {
    next: { revalidate: true },
}

export const TodoService =  {

    fetchTodos: async () => {
        const res = await fetchCrud.fetchItems<ITodo[]>('/todos?sort=-createdAt')
        return res
    },

    addTodo: async (data:TCreateTodo) => {
        const res = await fetchCrud.createItem<TCreateTodo>('/todos', data )
        return res;
    },

    deleteTodo: async (id:number) => { 
        console.log('id', id)
        const res = await fetchCrud.deleteItem<TDeleteTodo>('/todos', id)
        return res
    }
}
