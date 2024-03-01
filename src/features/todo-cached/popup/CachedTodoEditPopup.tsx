import MainPopup from 'a/common/popup/_partials/MainPopup'
import { usePopupCtx } from 'a/common/popup/usePopupCtx'
import { Button } from 'a/components/ui/button'
import React from 'react'
import CachedTodoEditForm from '../form/cachedTodoEditForm/CachedTodoEditForm'
import { FormProvider } from 'a/components/ui/form/store/useFormCtx'

function CachedTodoEditPopup() {
    const { popupState } = usePopupCtx()
    console.log(popupState)
    return (
        <MainPopup title="Cached Edit todo">
            <FormProvider>
                <CachedTodoEditForm todo={popupState.todo} />
            </FormProvider>
        </MainPopup>
    )
}

export default CachedTodoEditPopup
