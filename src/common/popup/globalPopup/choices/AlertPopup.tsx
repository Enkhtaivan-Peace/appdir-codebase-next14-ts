'use client'
import React from 'react'
import GlobalMainPopup from '../../_partials/GlobalMainPopup'
import { Button } from '@/components/ui/button'
// import { POPUP_TYPES } from '../popupRegistration'
function AlertPopup() {
    // const { hidePopup, showPopup } = usePopupCtx()

    return (
        <GlobalMainPopup title="AlertPopup">
            <Button variant="outline">Ok</Button>
        </GlobalMainPopup>
    )
}
export default AlertPopup
