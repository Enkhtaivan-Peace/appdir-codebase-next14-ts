import Hero from "a/components/layout/web/Hero";
import Footer from "a/components/layout/web/footer/Footer";
import ClientHeader from "a/components/layout/web/header/ClientHeader";
import Header from "a/components/layout/web/header/Header";

export default function CustomLayout({ children }:JsxChildren) {
    return (
      <>
        <ClientHeader>
              <Header />
        </ClientHeader>
        <main className="my-0 py-16">
            <Hero />
            {children}
        </main>
        <Footer />
      </>
    );
}