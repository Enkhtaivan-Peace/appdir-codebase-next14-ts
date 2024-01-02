'use client'
import React, { ReactNode } from 'react'
import { HeaderProvider } from './useHeaderCtx'

interface IClientHeader {
    children: ReactNode
}
function ClientHeader(props:IClientHeader) {
    const { children } = props
  return (
    <HeaderProvider>
        { children }
    </HeaderProvider>
  )
}

export default ClientHeader