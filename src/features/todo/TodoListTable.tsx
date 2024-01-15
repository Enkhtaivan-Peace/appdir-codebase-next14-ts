import React from 'react'
import { getTodoList } from './_todo-actions'
import { TTodoList } from './_interfaces'



async function TodoListTable(props:TTodoList) {
    const { search, page, limit } = props
    console.log('page props:', props)
    const todos = await getTodoList({ search, page, limit })
 
  return (
    <div>TodoListTable</div>
  )
}

export default TodoListTable