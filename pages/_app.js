import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import { Languages } from "../lang/languajes";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={Languages[locale]}>
        <Navbar {...pageProps}/>
        <main className="mb-0 bg-gray-800 border-gray-700">
          <Component className="mb-0 bg-gray-800 border-gray-700" {...pageProps} />
        </main>
        <Footer/>
      </IntlProvider>
    </>
  );
}

export default MyApp;
