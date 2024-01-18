import { getTodoList } from 'a/features/todo/_todo-actions'
import TodoInvoiceForm from 'a/features/todo/form/TodoInvoiceForm'
import { getUserList } from 'a/features/user/_user-actions'
import React from 'react'

const AddPage = async () => {
  const todos = await getTodoList({})
  const users = await getUserList({})

  return (
    <div>
        <h3>Add Todo form</h3>
        <TodoInvoiceForm todosRes={todos} usersRes={users} />
    </div>
  )
}

export default AddPage