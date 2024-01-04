import FetchApi from "a/common/fetch/fetchCrud"
import { ITodo } from "./_interfaces"

const fetchCrud = new FetchApi()

export const TodoService =  {
    
    fetchTodos: async () => {
        const res = fetchCrud.fetchItems<ITodo[]>('/todos')
        return res
    },

}
