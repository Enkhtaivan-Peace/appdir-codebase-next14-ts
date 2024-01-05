import React from 'react'
import { ITodo } from './_interfaces'
import TodoListItem from './TodoListItem'
import './_todo.css'
import { getTodoList } from './_todo-actions'
async function TodoList() {
   const  todoListRes = await getTodoList()
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