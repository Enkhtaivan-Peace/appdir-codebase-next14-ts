'use client'
/**
 * @createdBy Phill Anderson 2022/11/15
 */
import React, { useCallback, useRef } from 'react'
import Hamburger from 'a/components/ui/button/Hamburger'
import { ThemeSwitcherBtn } from 'a/common/theme/themeSwitcherBtn'
import AdminMobileMenu from '../mobileMenu/AdminMobileMenu'
import useElementPosition from 'a/common/window/useElementPosition'
import { useGlobalPopupCtx } from 'a/common/popup/globalPopup/useGlobalPopupCtx'
import { GLOBAL_POPUP_TYPES } from 'a/common/popup/globalPopup/globalPopupRegistration'
import tw from 'tailwind-styled-components'
import Logo from 'a/components/ui/button/Logo'
function AdminHeaderUi(): JSX.Element {
    // const { data: session } = useSession();
    const ref = useRef(null)
    useElementPosition(ref, { globalName: 'adminHeader', isAdminSide: true })
    const { showGlobalPopup } = useGlobalPopupCtx()

    const handleShowPopup = useCallback(() => {
        showGlobalPopup(GLOBAL_POPUP_TYPES.ALERT, { hello: 'hello' })
    }, [])
    return (
        <HeaderSc ref={ref}>
            <Logo />
            <button onClick={handleShowPopup}>show popup</button>
            <ThemeSwitcherBtn />
            <Hamburger />
            <AdminMobileMenu />
        </HeaderSc>
    )
}
const HeaderSc = tw.header`
    flex
    items-center
    justify-between
    w-full
    h-[50px]
    px-4
    border-b
    border-gray-300
`

export default AdminHeaderUi
