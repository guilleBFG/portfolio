import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import { Languages } from "../lang/languajes";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={Languages[locale]}>
        <Navbar {...pageProps}/>
        <main>
          <Component {...pageProps} />
        </main>
      </IntlProvider>
    </>
  );
}

export default MyApp;
