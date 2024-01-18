import React from 'react'
import { Button } from 'a/components/ui/button'
import { ITodo, TTodoListRes } from '../_interfaces'
import { createTodoInvoice } from '../_todo-actions'
import { IUser } from 'a/features/user/_interfaces'

interface ITodoInvoiceForm {
  todosRes: TRes<ITodo[]>
  usersRes: TRes<IUser[]>
}


async function TodoInvoiceForm(props: ITodoInvoiceForm) {
  const { todosRes } = props
 
  
  return (
    <form action={createTodoInvoice} className='flex flex-col gap-20'>
          <input type="number" name='amount' placeholder='enter usd amount' />
          <select name="todo" id="todo">
            {
              todosRes.data?.map((todo:ITodo, idx:number) =>(
                <option key={ 'todo' + todo.id } value={todo.id}>{todo.name}</option>
              ))
            }
          </select>
          <Button type='submit' variant={'outline'}>
              Create todo
          </Button>
    </form>
  )
}

export default TodoInvoiceForm