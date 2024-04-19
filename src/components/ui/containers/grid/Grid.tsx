// import { JsxChildren } from '@/common/types/common'
import React from 'react'
import tw from 'tailwind-styled-components'

export function AutoGrid(props: JsxChildren) {
    return <div className="auto-grid">{props.children}</div>
}

export const Grid = tw.div`grid`
