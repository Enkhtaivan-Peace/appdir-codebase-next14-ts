/**
 * @createdBy Phill Anderson 2022/11/15
 */
import React from 'react'
import tw from 'tailwind-styled-components'
import { IButton } from './_interface'

export function Button(props: IButton) {
    const { onClick, children, isLoading } = props
    return <button onClick={onClick}>{isLoading ? 'уншиж байна ...' : children}</button>
}

export const BlueBtnTw = tw.button`
  bg-blue
`

export const RedBtnTw = tw.button`
  bg-red-300
`

export const GreenBtnTw = tw.button`
  bg-green
`

export const GhostBtnTw = tw.button`
  bg-transparent;
`
