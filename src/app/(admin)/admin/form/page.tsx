import { getTodoList } from '@/features/todo/_todo-actions'
import TodoInvoiceForm from '@/features/todo/form/TodoInvoiceForm'
import { NextPage } from 'next'
import React from 'react'

const FormPage: NextPage = async () => {
    const todos = await getTodoList({})
    return <div>{/* <TodoInvoiceForm /> */}</div>
}

export default FormPage
