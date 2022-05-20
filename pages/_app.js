import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { IntlProvider } from "react-intl";
import { Languages } from "../lang/languajes";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={Languages[locale]}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
      </IntlProvider>
    </>
  );
}

export default MyApp;
