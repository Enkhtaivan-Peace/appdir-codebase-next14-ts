'use client'
import { Flex } from 'a/components/ui/containers/flex/Flex'
import React, { CSSProperties } from 'react'
import AdminSidebar from '../sidebar/AdminSidebar'
import AdminMain from './AdminMain'
import AdminFooter from '../AdminFooter'
import { useAdminGlobalCtx } from 'a/common/global/useAdminGlobalCtx'

function AdminMainContent({ children }: JsxChildren) {
    const { adminGlobalItems } = useAdminGlobalCtx()
    const adminHeaderHeight = adminGlobalItems?.adminHeader?.offsets?.offsetHeight

    const style:CSSProperties = {
        paddingTop: `${adminHeaderHeight}px`
    }
  return (
    <>
        <Flex className='relative' style={style}>
            <AdminSidebar />
            <AdminMain>
                { children }
            </AdminMain>
        </Flex>
        <AdminFooter />
    </>
  )
}

export default AdminMainContent