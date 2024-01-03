'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
// import { TMENU } from 'a/common/types/common'
import tw from 'tailwind-styled-components'
interface ISidebarItem extends TMENU {}

function SidebarItem(props: ISidebarItem) {
    const { text, href } = props
    const pathName = usePathname()
    const isActive = pathName === href

    return (
        <SidebarItemTw href={href} className={`menuItem ${isActive ? 'text-emerald-500' : ''}`}>
            {text}
        </SidebarItemTw>
    )
}

const SidebarItemTw = tw(Link)`
    font-railwayBold
    transition
`

export default SidebarItem
