import { AdminGlobalProvider } from 'a/common/global/useAdminGlobalCtx';
import { GlobalPopupProvider } from 'a/common/popup/globalPopup/useGlobalPopupCtx';
import AdminFooter from 'a/components/layout/admin/AdminFooter';
import AdminHeader from 'a/components/layout/admin/header/AdminHeader';
import React from 'react'

export const metadata = {
    title: 'Dashboard',
    description: 'Admin Dashboard',
}

export default function AdminLayout({ children }: JsxChildren) {
    return (
      <AdminGlobalProvider>
        <GlobalPopupProvider>
            <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
                <div className="flex-grow">
                    <AdminHeader />
                    <main className="my-0 py-16">{children}</main>
                </div>
                <AdminFooter />
            </div>
        </GlobalPopupProvider>
      </AdminGlobalProvider>
    );
  }