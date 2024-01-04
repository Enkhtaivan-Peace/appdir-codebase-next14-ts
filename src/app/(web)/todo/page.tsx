import { Wrapper } from 'a/components/ui/containers/Wrapper'
import TodoAddForm from 'a/features/todo/TodoAddForm'
import TodoList from 'a/features/todo/TodoList'
import React from 'react'

function TodoPage() {
  return (
    <Wrapper>
        <h2>Зөвхөн server actions ашиглан todo list бүхий crud хийж чадах уу?</h2>
        <TodoAddForm />
        <hr />
        <TodoList />
    </Wrapper>
  )
}

export default TodoPage