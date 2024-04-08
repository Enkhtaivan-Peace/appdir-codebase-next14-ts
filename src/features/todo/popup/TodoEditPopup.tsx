import MainPopup from '@/common/popup/_partials/MainPopup'
import { usePopupCtx } from '@/common/popup/usePopupCtx'
import { Button } from '@/components/ui/button'
import React from 'react'
import TodoEditForm from '../form/TodoEditForm'

function TodoEditPopup() {
    const { popupState } = usePopupCtx()
    console.log(popupState)
    return (
        <MainPopup title="Edit todo">
            <TodoEditForm todo={popupState.todo} />
        </MainPopup>
    )
}

export default TodoEditPopup
