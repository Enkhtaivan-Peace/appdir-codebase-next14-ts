import { Wrapper } from 'a/components/ui/containers/Wrapper'
import TodoAddFormClient from 'a/features/todo/TodoAddFormClient'
import TodoAddFormServer from 'a/features/todo/TodoAddFormServer'
import TodoList from 'a/features/todo/TodoList'
import React from 'react'

function TodoPage() {
  return (
    <Wrapper>
        <h2>Зөвхөн server actions ашиглан todo list бүхий crud хийж чадах уу?</h2>
        <TodoAddFormServer />
        {/* <TodoAddFormClient /> */}
        <hr />
        <TodoList />
    </Wrapper>
  )
}

export default TodoPage