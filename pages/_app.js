import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { IntlProvider } from "react-intl";
import { Languages } from "../lang/languajes";
import { useRouter } from "next/router";
import Herobutton from "../components/herobutton";
import BlockchainNFT from "../components/blockchainNFT";
function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <>
      <IntlProvider locale={locale} messages={Languages[locale]}>
        <Navbar />
        <main>
          <Component {...pageProps} />
          <Herobutton {...pageProps.user} />
          <BlockchainNFT/>
        </main>
      </IntlProvider>
    </>
  );
}

export default MyApp;
