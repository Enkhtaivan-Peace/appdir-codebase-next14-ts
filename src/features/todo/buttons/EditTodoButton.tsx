'use client'
import { POPUP_TYPES } from 'a/common/popup/popupRegistration'
import { usePopupCtx } from 'a/common/popup/usePopupCtx'
import { Button } from 'a/components/ui/button'
import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
interface IEditTodoBtn {
    handleEditTodo: () => Promise<void>
}
function EditTodoButton(props:IEditTodoBtn) {
    const { handleEditTodo } = props
    
    const { showPopup } = usePopupCtx()

    async function handleClick() {
        showPopup(POPUP_TYPES.TODO_EDIT)
    }
  return (
    <Button variant='ghost' onClick={handleClick}>
        <MdOutlineModeEditOutline />
    </Button>
  )
}

export default EditTodoButton