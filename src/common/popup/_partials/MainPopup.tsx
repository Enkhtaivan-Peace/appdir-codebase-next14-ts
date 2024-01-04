/**
 * @createdBy Phill Anderson 2022/12/16
 */
import React, { ReactNode, useRef, useCallback } from 'react'
import Backdrop from './Backdrop'
import CloseBtn from 'a/components/ui/button/CloseBtn'
import { usePopupCtx } from '../usePopupCtx'
import styled from 'styled-components'
import { MainPopupBody, MainPopupHeader, MainPopupWrapper } from './GlobalMainPopup'
import useKeyPress from 'a/common/keyboard/key'
interface IMainPopup {
    children: ReactNode
    width?: number
    maxWidth?: number
    title: string
}

function MainPopup({ children, title }: IMainPopup) {
    const backRef = useRef(null)
    const { hidePopup } = usePopupCtx()
    
    useKeyPress({
        callback: () => closePopup(),
        keyName: 'Escape'
    })

    const closePopup = useCallback(() => {
        hidePopup()
    }, [])

    return (
        <Backdrop>
            <MainPopupWrapper ref={backRef}>
                <MainPopupHeader>
                    <h2>{title}</h2>
                    <CloseBtn onClick={closePopup} />
                </MainPopupHeader>
                <MainPopupBody>{children}</MainPopupBody>
            </MainPopupWrapper>
        </Backdrop>
    )
}

export default MainPopup
