import { AdminGlobalProvider } from 'a/common/global/useAdminGlobalCtx';
import { GlobalPopupProvider } from 'a/common/popup/globalPopup/useGlobalPopupCtx';
import AdminFooter from 'a/components/layout/admin/AdminFooter';
import AdminHeader from 'a/components/layout/admin/header/AdminHeader';
import AdminMain from 'a/components/layout/admin/main/AdminMain';
import AdminMainContent from 'a/components/layout/admin/main/AdminMainContent';
import AdminSidebar from 'a/components/layout/admin/sidebar/AdminSidebar';
import { Flex } from 'a/components/ui/containers/flex/Flex';
import React from 'react'
import tw from 'tailwind-styled-components'

export const metadata = {
    title: 'Dashboard',
    description: 'Admin Dashboard',
}

export default function AdminLayout({ children }: JsxChildren) {
    return (
      <AdminGlobalProvider>
        <GlobalPopupProvider>
            <AdminLayoutTw>
                <AdminHeader />
                <AdminMainContent children={children} />
            </AdminLayoutTw>
        </GlobalPopupProvider>
      </AdminGlobalProvider>
    );
  }

  const AdminLayoutTw = tw.div`
  flex 
  flex-col
  w-full
  md:min-h-screen
  relative
  bg-white
  dark:bg-gray-400
`