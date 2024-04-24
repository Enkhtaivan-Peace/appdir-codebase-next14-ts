import React, { forwardRef } from 'react'
import { useTabCtx } from '../../store/useTabCtx'
import { TTabLinkItem } from '../../store/_type'
import tw from 'tailwind-styled-components'
import useTab from '../../store/useTab'

const BTabLink = forwardRef<HTMLLIElement, TTabLinkItem>((props, ref) => {
    const { id, text } = props
    const { setActiveTabId, activeTabId, tabHeadItems } = useTabCtx()
    const isActive = activeTabId === id
    const { handleKeyDown } = useTab()

    return (
        <Li
            ref={ref}
            active={isActive.toString()}
            role="tab"
            tabIndex={isActive ? 0 : -1}
            aria-selected={isActive}
            onClick={() => setActiveTabId(id)}
            onKeyDown={(e: any) => handleKeyDown(e, tabHeadItems)}
        >
            <BorderedLink className={isActive ? 'rounded-b-none' : ''}>{text}</BorderedLink>
        </Li>
    )
})

const Li = tw.li<{ active: string }>`
    inline-block 
    w-full
    p-10
    text-center
    rounded-tl-[10px]
    rounded-tr-[10px]
    border
    border-gray-300
    bg-gray-100
    cursor-pointer
    outline-none
    even:border-r-0
    even:border-l-0
    first:border-r
    last:!border-r
    ${(p) => (p.active === 'true' ? 'border-b-0 bg-gray-50' : '')}
`

const BorderedLink = tw.button`
    outline-none
`

export default BTabLink
