/**
 * @createdBy Phill Anderson 2022/12/16
 */
import React, { ReactNode, useRef, useCallback } from 'react'
import Backdrop from './Backdrop'
import CloseBtn from 'a/components/ui/button/CloseBtn'
import { useGlobalPopupCtx } from '../globalPopup/useGlobalPopupCtx'
import styled from 'styled-components'
import useKeyPress from 'a/common/keyboard/key'
interface IMainPopup {
    children: ReactNode
    width?: number
    maxWidth?: number
    title: string
}

function GlobalMainPopup({ children, title }: IMainPopup) {
    const backRef = useRef(null)
    const { hideGlobalPopup } = useGlobalPopupCtx()
    useKeyPress({
        callback: () => closePopup(),
        keyName: 'Escape'
    })

    const closePopup = useCallback(() => {
        hideGlobalPopup()
    }, [])

    return (
        <Backdrop>
            <MainPopupWrapper ref={backRef}>
                <MainPopupHeader>
                    <h2 className='text-black'>{title}</h2>
                    <CloseBtn onClick={closePopup} />
                </MainPopupHeader>
                <MainPopupBody>{children}</MainPopupBody>
            </MainPopupWrapper>
        </Backdrop>
    )
}

export const MainPopupWrapper = styled.div`
    background: white;
    padding: var(--space-10);
    border: 1px solid gray;
    border-radius: 5px;
`

export const MainPopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: var(--space-10);
`

export const MainPopupBody = styled.div`
    padding-block: var(--space-10);
`

export default GlobalMainPopup
