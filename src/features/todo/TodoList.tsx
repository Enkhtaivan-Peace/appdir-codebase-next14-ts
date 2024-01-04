import React from 'react'
import { TodoService } from './TodoService'
import { ITodo, TRes } from './_interfaces'
import TodoListItem from './TodoListItem'

async function TodoList() {
    const todoListRes:TRes<ITodo[]> = await TodoService.fetchTodos()
    
  return (
    <div>
        {
            todoListRes.data.map((todo:ITodo, idx:number) => (
                <TodoListItem key={'todo-' + idx} {...todo} />
            ))
        }
    </div>
  )
}

export default TodoList