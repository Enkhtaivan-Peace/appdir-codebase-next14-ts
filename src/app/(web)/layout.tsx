import { SiteGlobalProvider } from "a/common/global/useSiteGlobal";
import { GlobalPopupProvider } from "a/common/popup/globalPopup/useGlobalPopupCtx";
import Footer from "a/components/layout/web/footer/Footer";
import ClientHeader from "a/components/layout/web/header/ClientHeader";
import Header from "a/components/layout/web/header/Header";

export default function WebLayout({ children }: JsxChildren) {
  return (
    <SiteGlobalProvider>
      <GlobalPopupProvider>
        <ClientHeader>
          <Header />
        </ClientHeader>
        <main className="my-0 py-16">{children}</main>
        <Footer />
      </GlobalPopupProvider>
    </SiteGlobalProvider>
  );
}
