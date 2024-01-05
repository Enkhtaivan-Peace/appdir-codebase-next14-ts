'use server'
import { revalidatePath } from "next/cache";
import { TodoService } from "./TodoService";
import { ITodo, TCreateTodo } from "./_interfaces";

export async function addTodo(formData: FormData) {
    const name = formData.get('name') as string;
    const photo = formData.get('photo') as string;
    const description = formData.get('description') as string;
    console.log(name, description, photo)
    const data:TCreateTodo = {
        name,
        photo: photo ?? "https://loremflickr.com/640/480/technics",
        description: description ?? 'no-description',
        isCompleted: false
    }
    const todoListRes:TRes<ITodo> = await TodoService.addTodo(data)
    revalidatePath('/todo')
}

export async function deleteTodo(id:number) {
    const res = await TodoService.deleteTodo(id)
    console.log(res)
    revalidatePath('/todo')
}

export async function getTodoList() {
    const todoListRes:TRes<ITodo[]> = await TodoService.fetchTodos()
    return todoListRes
}