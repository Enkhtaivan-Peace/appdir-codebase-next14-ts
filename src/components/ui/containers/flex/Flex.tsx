/**
 * @createdBy Phill Anderson 2022/11/16
 */
import React from 'react'
import { checkFlexProps } from './_helpers'
import { IFlex } from './_interface'

function Flex(props: IFlex) {
    const { children, gap, className } = props

    const styleObj = {
        gap: gap ?? 0,
    }
    return (
        <div style={styleObj} className={`flex ${checkFlexProps(props)} ${className}`}>
            {children}
        </div>
    )
}

export default Flex
