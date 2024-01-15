'use server'
import { revalidatePath } from "next/cache";
import { TodoService } from "./TodoService";
import { ITodo, TCreateTodo, TTodoList } from "./_interfaces";

export async function addTodo(formData: FormData) {
    const name = formData.get('name') as string;
    const photo = formData.get('photo') as string;
    const description = formData.get('description') as string;

    console.log('photo', photo)
    const data:TCreateTodo = {
        name,
        photo: ( photo || photo !== '' ) ? photo : "https://loremflickr.com/640/480/technics",
        description: description ?? 'no-description',
        isCompleted: false
    }
    const todoListRes:TRes<ITodo> = await TodoService.addTodo(data)
    revalidatePath('/todo')
    return todoListRes
}

export async function editTodo(formData: FormData) {

    const id = formData.get('id') as string;
    const name = formData.get('name') as string;
    const photo = formData.get('photo') as string;
    const description = formData.get('description') as string;
    
    const data:TCreateTodo = {
        name,
        photo,
        description,
        isCompleted: false
    }
    const todoListRes:TRes<Partial<ITodo>> = await TodoService.editTodo(+id, data)
    revalidatePath('/todo')
    return todoListRes
}

export async function deleteTodo(id:number) {
    const res = await TodoService.deleteTodo(id)
    console.log(res)
}



export async function getTodoList(payload: TTodoList) {
    const todoListRes:TRes<ITodo[]> = await TodoService.fetchTodos(payload)
    return todoListRes
}

export async function getTodoById(id:number) {
    const todoListRes:TRes<ITodo> = await TodoService.fetchTodoById(id)
    return todoListRes
}