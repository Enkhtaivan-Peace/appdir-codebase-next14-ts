/**
 * @createdBy Phill Anderson 2022/12/16
 */
import React, { ReactNode, useRef, useCallback } from 'react'
import Backdrop from './Backdrop'
import CloseBtn from 'a/components/ui/button/CloseBtn'
import { useGlobalPopupCtx } from '../globalPopup/useGlobalPopupCtx'
import styled from 'styled-components'
interface IMainPopup {
    children: ReactNode
    width?: number
    maxWidth?: number
    title: string
}

function GlobalMainPopup({ children, title }: IMainPopup) {
    const backRef = useRef(null)
    const { hideGlobalPopup } = useGlobalPopupCtx()

    const closePopup = useCallback(() => {
        hideGlobalPopup()
    }, [])

    return (
        <Backdrop>
            <div ref={backRef} className="bg-blue p-10 rounded z-100">
                <MainPopupHeader>
                    <h2>{title}</h2>
                    <CloseBtn onClick={closePopup} />
                </MainPopupHeader>
                <MainPopupBody>{children}</MainPopupBody>
            </div>
        </Backdrop>
    )
}

const MainPopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: var(--space-10);
`

const MainPopupBody = styled.div`
    padding-block: var(--space-10);
`

export default GlobalMainPopup
