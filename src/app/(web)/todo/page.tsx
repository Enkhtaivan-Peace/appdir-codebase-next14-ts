import { PopupProvider } from 'a/common/popup/usePopupCtx'
import { Wrapper } from 'a/components/ui/containers/Wrapper'
import TodoAddFormClient from 'a/features/todo/form/TodoAddFormClient'
import TodoAddFormServer from 'a/features/todo/form/TodoAddFormServer'
import TodoList from 'a/features/todo/TodoList'
import React from 'react'

function TodoPage() {
  return (
    <PopupProvider>
      <Wrapper>
          <h2>Зөвхөн server actions ашиглан todo list бүхий crud хийж чадах уу?</h2>
          <TodoAddFormServer />
          {/* <TodoAddFormClient /> */}
          <hr />
          <TodoList />
      </Wrapper>
    </PopupProvider>
  )
}

export default TodoPage